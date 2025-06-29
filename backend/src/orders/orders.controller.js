const  OrdersService = require("./orders.service");


const addOrderController = async (req, res) => {
    const {  clientName, paperDetails, deadline, charges, description } = req.body;
    const files = req.files || [];
  
    const newOrder = await OrdersService.addAssignmentService(
      {  clientName, paperDetails, deadline, charges: Number(charges), description },
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

  const userId = req.user._id; 

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





  module.exports = { addOrderController,getPendingUnbidOrdersController,addBidderController,addBidderController,cancelBidController}