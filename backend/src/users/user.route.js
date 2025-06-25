const UsersController = require("./user.controller");

const Router = require("express").Router()


const asyncMiddleware = require("../middlewares/asyncMiddleware");



Router.post("/signup",asyncMiddleware(UsersController.signup));



Router.post("/login",asyncMiddleware(UsersController.login));





module.exports = Router;