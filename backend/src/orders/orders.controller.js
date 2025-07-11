const OrdersService = require("./orders.service");

const addOrderController = async (req, res) => {
  const {
    clientName,
    paperDetails,
    subject,
    words,
    category,
    deadline,
    time,
    charges,
    description,
  } = req.body;

  const files = req.files || [];

  const newOrder = await OrdersService.addAssignmentService(
    {
      clientName,
      paperDetails,
      subject,
      words,
      category,
      deadline,
      time,
      charges: Number(charges),
      description,
    },
    files
  );

  return res.status(201).json({
    success: true,
    message: "Assignment created successfully",
    order: newOrder,
  });
};

const getPendingUnbidOrdersController = async (req, res) => {
  const orders = await OrdersService.getUnbidOrdersService();
  res.status(200).json({ success: true, data: orders });
};

const addBidderController = async (req, res) => {
  const { orderId } = req.params;

  const userId = req.body.userId;

  const result = await OrdersService.addBidderToOrder(orderId, userId);

  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
};

const cancelBidController = async (req, res) => {
  const { orderId } = req.params;
  const userId = req.user._id;

  const result = await OrdersService.cancelBidOnOrder(orderId, userId);

  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
};

const getWriterBids = async (req, res) => {
  const writerId = req.params.writerId;

  const orders = await OrdersService.getOrdersBiddedByWriter(writerId);

  res.status(200).json({
    success: true,
    message: "Orders the writer has bid on",
    data: orders,
  });
};

const getUnassignedOrders = async (req, res) => {
  const orders = await OrdersService.getUnassignedOrders();

  res.status(200).json({
    success: true,
    message: "Unassigned orders retrieved successfully",
    data: orders,
  });
};

const getWritersByOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    const writers = await OrdersService.getWritersByOrderId(orderId);

    return res.status(200).json({
      success: true,
      message: `Writers who have bidded on order ${orderId}`,
      data: writers,
    });
  } catch (error) {
    console.error("Error fetching writers:", error.message);
    return res.status(404).json({
      success: false,
      message: error.message || "Unable to fetch writers for the order",
    });
  }
};

const getInProgressAssignmentsController = async (req, res) => {
  try {
    const writerId = req.params.writerId;

    const assignments = await OrdersService.getWriterInProgressAssignments(
      writerId
    );

    res.status(200).json(assignments);
  } catch (error) {
    next(error);
  }
};

const assignOrderController = async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const { writerId } = req.body;

    const updatedOrder = await OrdersService.assignOrderToWriter(
      orderId,
      writerId
    );

    res.status(200).json({
      message: "Order assigned successfully",
      order: updatedOrder,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addOrderController,
  getPendingUnbidOrdersController,
  addBidderController,
  addBidderController,
  cancelBidController,
  getWriterBids,
  getUnassignedOrders,
  getWritersByOrder,
  getInProgressAssignmentsController,
  assignOrderController,
};
