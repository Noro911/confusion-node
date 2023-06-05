const express = require("express");

const promotionRouter = express.Router();
const promotionController = require('../controller/promotionController')

promotionRouter.use(express.json());

promotionRouter
  .route("/")
  .get(promotionController.findAll)
  .post(promotionController.create)
  .delete(promotionController.deleteAll)

promotionRouter.route("/:promoId")
  .get(promotionController.getById)
  .put(promotionController.upadateById)
  .delete(promotionController.deleteById)
module.exports = promotionRouter;
