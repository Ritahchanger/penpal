const express = require("express");

const Router = express.Router();

const { upload } = require("../config/multerConfig");

const asyncMiddleware = require("../middlewares/asyncMiddleware");

const OrderController = require("./orders.controller");

Router.post(
  "/",
  upload.array("files", 10),
  asyncMiddleware(OrderController.addOrderController)
);

Router.get(
  "/unbid",
  asyncMiddleware(OrderController.getPendingUnbidOrdersController)
);

Router.put(
  "/orders/:orderId/bid",
  asyncMiddleware(OrderController.addBidderController)
);

Router.put(
  "/orders/:orderId/cancel-bid",
  asyncMiddleware(OrderController.cancelBidController)
);

Router.get(
  "/orders/bidded/:writerId",
  asyncMiddleware(OrderController.getWriterBids)
);

Router.get("/unassigned", asyncMiddleware(OrderController.getUnassignedOrders));

Router.get(
  "/bidders/:orderId",
  asyncMiddleware(OrderController.getWritersByOrder)
);

Router.get(
  "/assignments/in-progress/:writerId",
  asyncMiddleware(OrderController.getInProgressAssignmentsController)
);

module.exports = Router;
