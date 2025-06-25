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
    orderId: newOrder.orderId, // Now set by the pre-save hook
    clientName: newOrder.clientName,
    status: newOrder.status,
    files: newOrder.files,
  };
};

const getPendingOrdersService = async () => {
  try {
    const pendingOrders = await Order.find({ status: "Pending" }).sort({ createdAt: -1 });
    
    return pendingOrders;
  } catch (error) {
    throw new CustomError("Failed to fetch pending orders", 500);
  }
};

module.exports = { addAssignmentService,getPendingOrdersService };
