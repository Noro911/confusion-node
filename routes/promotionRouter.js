const express = require("express");

const promotionRouter = express.Router();
const promotionController = require('../controller/promotionController')

promotionRouter.use(express.json());

promotionRouter
  .route("/")
  .get((req, res) => {
    res.end("Get promotions");
  })
  // .post((req, res) => {
  //   res.end(`Add new promotion: {name: ${req.body.name}, age: ${req.body.age}}`);
  // })
  .post(promotionController.create)
  .delete((req, res) => {
    res.end(`Delete all promotions`);
  });

promotionRouter.route("/:promoId")
  .get((req, res) => {
    res.end(`Get promotion ${req.params.promoId}`);
  })
  .put((req, res) => {
    res.end(`Update promotion {name: ${req.body.name}, age: ${req.body.age}}`);
  })
  .delete((req, res) => {
    res.end(`Delete promotion ${req.params.promoId}`);
  });

module.exports = promotionRouter;
