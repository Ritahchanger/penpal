const express = require("express");


const Router = express.Router();



const { upload } = require("../config/multerConfig");



const asyncMiddleware = require("../middlewares/asyncMiddleware");


const OrderController = require("./orders.controller");




Router.post(
  '/',
  upload.array('files', 10), 
  asyncMiddleware(OrderController.addOrderController)
);


Router.get('/unbid',asyncMiddleware(OrderController.getPendingUnbidOrdersController))


Router.get("/orders/:orderId/bid",asyncMiddleware(OrderController.addBidderController))


Router.put("/orders/:orderId/cancel-bid", asyncMiddleware(OrderController.cancelBidController));



module.exports = Router;
