const express = require("express");

const promotionRouter = express.Router();
const promotionController = require('../controller/promotionController')
const authenticate = require('../auth')

promotionRouter.use(express.json());

promotionRouter
  .route("/")
  .get(promotionController.findAll)
  .post(authenticate.verifyUser, authenticate.verifyAdmin, promotionController.create)
  .delete(authenticate.verifyUser, authenticate.verifyAdmin, promotionController.deleteAll)

promotionRouter.route("/:promoId")
  .get(promotionController.getById)
  .put(authenticate.verifyUser, authenticate.verifyAdmin, promotionController.upadateById)
  .delete(authenticate.verifyUser, authenticate.verifyAdmin, promotionController.deleteById)
module.exports = promotionRouter;
