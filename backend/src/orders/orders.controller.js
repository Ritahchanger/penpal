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


const getPendingOrdersController = async (req, res) => {
      const orders = await OrdersService.getPendingOrdersService();
      res.status(200).json({ success: true, data: orders });
  };




  module.exports = { addOrderController,getPendingOrdersController}