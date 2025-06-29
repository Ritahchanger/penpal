const Order = require("./orders.model");
const { uploadToCloudinary } = require("../config/uploadToCloudinary");
const CustomError = require("../utils/CustomError");

const addAssignmentService = async (orderData, files = []) => {
  const { clientName, paperDetails, deadline, charges, description } = orderData;

  if (!clientName || !paperDetails || !deadline || !charges) {
    throw new CustomError("Missing required fields", 400);
  }

  if (isNaN(new Date(deadline).getTime())) {
    throw new CustomError("Invalid deadline date", 400);
  }

  if (typeof charges !== "number" || charges < 0) {
    throw new CustomError("Charges must be a positive number", 400);
  }

  let uploadedFileUrls = [];

  if (files.length > 0) {
    try {
      const uploadPromises = files.map((file) =>
        uploadToCloudinary(file.buffer, "orders/assignments")
      );
      uploadedFileUrls = await Promise.all(uploadPromises);
    } catch (err) {
      console.error("Cloudinary upload error:", err);
      throw new CustomError("File upload failed", 500);
    }
  }
  const newOrder = await Order.create({
    clientName,
    paperDetails,
    deadline,
    charges,
    description,
    files: uploadedFileUrls,
  });

  return {
    id: newOrder._id,
    orderId: newOrder.orderId, 
    clientName: newOrder.clientName,
    status: newOrder.status,
    files: newOrder.files,
  };
};
const getUnbidOrdersService = async () => {
  try {

    const pendingOrders = await Order.find({ status: "Pending", bids:0 }).sort({ createdAt: -1 });

    return pendingOrders;

  } catch (error) {
    throw new CustomError("Failed to fetch pending orders", 500);
  }
};

const addBidderToOrder = async (orderId, userId) => {
  try {
    const order = await Order.findById(orderId);

    if (!order) {
      return { success: false, message: "Order not found" };
    }

   
    if (order.biddedWriters.includes(userId)) {
      return { success: false, message: "You have already bid on this order" };
    }


    order.biddedWriters.push(userId);
    order.bids += 1;

    await order.save();

    return { success: true, message: "Bid placed successfully", order };
  } catch (error) {
    console.error("Error adding bidder:", error);
    return {
      success: false,
      message: "Failed to add bidder",
      error: error.message,
    };
  }
};


const cancelBidOnOrder = async (orderId, userId) => {
  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return { success: false, message: "Order not found" };
    }
    const alreadyBidded = order.biddedWriters.includes(userId);
    if (!alreadyBidded) {
      return { success: false, message: "You have not bid on this order" };
    }
    const now = new Date();
    const createdAt = new Date(order.createdAt);
    const diffInMilliseconds = now - createdAt;
    const diffInHours = diffInMilliseconds / (1000 * 60 * 60);

    if (diffInHours > 1) {
      return {
        success: false,
        message: "Bid cancellation is not allowed after 1 hour of order creation",
      };
    }
    order.biddedWriters = order.biddedWriters.filter(
      (id) => id.toString() !== userId.toString()
    );
    if (order.bids > 0) order.bids -= 1;
    await order.save();
    return { success: true, message: "Bid cancelled successfully", order };
  } catch (error) {
    console.error("Error cancelling bid:", error);
    return {
      success: false,
      message: "Failed to cancel bid",
      error: error.message,
    };
  }
};


module.exports = { addAssignmentService,getUnbidOrdersService, addBidderToOrder, cancelBidOnOrder};
