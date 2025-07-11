const Order = require("./orders.model");
const { uploadToCloudinary } = require("../config/uploadToCloudinary");
const CustomError = require("../utils/CustomError");

const addAssignmentService = async (orderData, files = []) => {
  const {
    clientName,
    paperDetails,
    subject,
    words,
    category,
    deadline,
    time,
    charges,
    description = "",
  } = orderData;

  if (
    !clientName ||
    !subject ||
    !words ||
    !category ||
    !deadline ||
    !time ||
    !charges
  ) {
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
      const uploadPromises = files.map(async (file) => {
        const downloadURL = await uploadToCloudinary(
          file.buffer,
          "orders/assignments"
        );

        return {
          fileName: file.originalname,
          downloadURL,
        };
      });

      uploadedFileUrls = await Promise.all(uploadPromises);
    } catch (err) {
      console.error("Cloudinary upload error:", err);
      throw new CustomError("File upload failed", 500);
    }
  }

  // ✅ Save to DB
  const newOrder = await Order.create({
    clientName,
    paperDetails, // optional now
    subject,
    words,
    category,
    deadline,
    time,
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
    const pendingOrders = await Order.find({ status: "Pending", bids: 0 }).sort(
      { createdAt: -1 }
    );

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
        message:
          "Bid cancellation is not allowed after 1 hour of order creation",
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

const getOrdersBiddedByWriter = async (writerId) => {
  if (!writerId) {
    throw new CustomError("Writer ID is required", 400);
  }

  const orders = await Order.find({
    biddedWriters: writerId,
    status: "Pending",
  })
    .populate("biddedWriters", "firstName lastName email")
    .sort({ createdAt: -1 });

  return orders;
};

const getUnassignedOrders = async () => {
  return await Order.find({ status: "Pending" }).sort({ createdAt: -1 });
};

const getWritersByOrderId = async (orderId) => {
  const order = await Order.findById(orderId).populate({
    path: "biddedWriters",
    select: "firstName lastName email phoneNo qualifications",
  });

  if (!order) {
    throw new Error("Order not found");
  }

  return order.biddedWriters;
};

const getWriterInProgressAssignments = async (writerId) => {
  if (!writerId) {
    throw new CustomError("Writer ID is required", 400);
  }

  const orders = await Order.find({
    assignedWriter: writerId,
    status: "In Progress",
  })
    .populate("assignedWriter", "firstName lastName email")
    .sort({ createdAt: -1 });

  return orders;
};

const assignOrderToWriter = async (orderId, writerId) => {
  if (!orderId || !writerId) {
    throw new CustomError("Order ID and Writer ID are required", 400);
  }

  const order = await Order.findById(orderId);
  if (!order) {
    throw new CustomError("Order not found", 404);
  }

  if (order.status !== "Pending") {
    throw new CustomError("Only pending orders can be assigned", 400);
  }

  order.assignedWriter = writerId;
  order.assignedAt = new Date();
  order.status = "In Progress";

  await order.save();

  return order;
};

module.exports = {
  addAssignmentService,
  getUnbidOrdersService,
  addBidderToOrder,
  cancelBidOnOrder,
  getOrdersBiddedByWriter,
  getUnassignedOrders,
  getWritersByOrderId,
  getWriterInProgressAssignments,
  assignOrderToWriter
};
