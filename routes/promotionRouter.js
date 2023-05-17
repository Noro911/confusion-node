const express = require("express");

const promotionRouter = express.Router();

promotionRouter.use(express.json());

promotionRouter
  .route("/")
  .get((req, res) => {
    res.end("Get promotions");
  })
  .put((req, res) => {
    res.end("Put promotion");
  })
  .post((req, res) => {
    res.end("Post new promotion");
  })
  .delete((req, res) => {
    res.end("Delete promotion");
  });

promotionRouter.route("/:promoId")
  .get((req, res) => {
    res.end(`Get promotion ${req.params.promoId}`);
  })
  .post((req, res) => {
    res.end(`Post promotion ${req.params.promoId}`);
  })
  .put((req, res) => {
    res.end(`Update promotion ${req.params.promoId}`);
  })
  .delete((req, res) => {
    res.end(`Delete promotion ${req.params.promoId}`);
  });

module.exports = promotionRouter;
