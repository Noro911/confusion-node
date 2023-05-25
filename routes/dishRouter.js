const express = require("express");

const dishRouter = express.Router();
const dishesController = require('../controller/dishesController')

dishRouter.use(express.json());

dishRouter
  .route("/")
  // .get((req, res) => {
  //   // res.end("Get dishes");
  // })
  .get(dishesController.findAll)
  .post((req, res) => {
    res.end(`Add new dish: {name: ${req.body.name}, age: ${req.body.age}}`);
  })
  .delete((req, res) => {
    res.end(`Delete all dishes`)
  })

dishRouter.route('/:dishId')
  .get((req, res) => {
    res.end(`Get dish ${req.params.dishId}`)
  })
  .put((req, res) => {
    res.end(`Update dish {name: ${req.body.name}, age: ${req.body.age}}`)
  })
  .delete((req, res) => {
    res.end(`Delete dish ${req.params.dishId}`)
  })

module.exports = dishRouter;
