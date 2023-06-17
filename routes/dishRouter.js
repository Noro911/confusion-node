const express = require("express");
const authenticate = require("../auth")

const dishRouter = express.Router();
const dishesController = require('../controller/dishesController')

dishRouter.use(express.json());

dishRouter
  .route("/")
  .get(dishesController.findAll)
  .post(authenticate.verifyUser, authenticate.verifyAdmin, dishesController.create)
  .delete(authenticate.verifyUser, authenticate.verifyAdmin, dishesController.deleteAll)

dishRouter
  .route('/:dishId')
  .get(dishesController.getById)
  .put(authenticate.verifyUser, authenticate.verifyAdmin, dishesController.updateById)
  .delete(authenticate.verifyUser, authenticate.verifyAdmin, dishesController.deleteById)

module.exports = dishRouter;
