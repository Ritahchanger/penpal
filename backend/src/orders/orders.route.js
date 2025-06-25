const express = require("express");


const Route = express.Router();



const { upload } = require("../config/multerConfig");



const asyncMiddleware = require("../middlewares/asyncMiddleware");


const OrderController = require("./orders.controller");




Route.post(
  '/',
  upload.array('files', 10), 
  asyncMiddleware(OrderController.addOrderController)
);


Route.get('/pending',asyncMiddleware(OrderController.getPendingOrdersController))


module.exports = Route;
