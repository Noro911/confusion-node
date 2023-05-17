const express = require("express");

const dishRouter = express.Router();

dishRouter.use(express.json());

dishRouter
  .route("/")
  .get((req, res) => {
    res.end("Get dishes");
  })
  .post((req, res) => {
    res.end("Create new dish");
  })
  .delete((req, res) => {
    res.end("Delete dishes");
  })
  .put((req, res) => {
    res.end("Put dished");
  })

dishRouter.route('/:dishId')
  .get((req, res) => {
    res.end(`Get dish ${req.params.dishId}`)
  })
  .post((req, res) => {
    res.end(`Post dish ${req.params.dishId}`)
  })
  .put((req, res) => {
    res.end(`Update dish ${req.params.dishId}`)
  })
  .delete((req, res) => {
    res.end(`Delete dish ${req.params.dishId}`)
  })

module.exports = dishRouter;
