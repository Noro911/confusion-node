const express = require("express");
const authenticate = require("../auth")
const cors = require('../cors')

const dishRouter = express.Router();
const dishesController = require('../controller/dishesController')

dishRouter.use(express.json());

dishRouter
  .route("/")
  .options(cors.corsWithOptions, (req, res) => { res.status(200).json('cors') })
  .get(cors.cors, dishesController.findAll)
  .post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, dishesController.create)
  .delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, dishesController.deleteAll)

dishRouter
  .route('/:dishId')
  .options(cors.corsWithOptions, (req, res) => { res.status(200).json('cors') })
  .get(cors.cors, dishesController.getById)
  .put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, dishesController.updateById)
  .delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, dishesController.deleteById)

dishRouter
  .route('/:dishId/comments')
  .options(cors.corsWithOptions, (req, res) => { res.status(200).json('cors') })
  .get(cors.cors, dishesController.getComments)

dishRouter
  .route('/:dishId/comments/:commentId')
  .options(cors.corsWithOptions, (req, res) => { res.status(200).json('cors') })
  .get(cors.cors, dishesController.getCommentById)
  .put(cors.corsWithOptions, authenticate.verifyUser, dishesController.updateCommentById)
  .delete(cors.corsWithOptions, authenticate.verifyUser, dishesController.deleteCommentById)

module.exports = dishRouter;
