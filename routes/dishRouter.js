const express = require("express");

const dishRouter = express.Router();
const dishesController = require('../controller/dishesController')

dishRouter.use(express.json());

dishRouter
  .route("/")
  .get(dishesController.findAll)
  .post(dishesController.create)
  .delete(dishesController.deleteAll)

dishRouter
  .route('/:dishId')
  .get(dishesController.getById)
  .put(dishesController.updateById)
  .delete(dishesController.deleteById)

module.exports = dishRouter;
