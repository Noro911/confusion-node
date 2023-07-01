const express = require('express')
const authenticate = require('../auth')
const favoritesController = require('../controller/favoritesController')

const favoriteRouter = express.Router()

favoriteRouter.use(express.json())

favoriteRouter.route('/')
  .get(authenticate.verifyUser, favoritesController.findAll)
  .post(authenticate.verifyUser, favoritesController.addOne)
  .delete(authenticate.verifyUser, favoritesController.deleteUser)

favoriteRouter.route('/:dishId')
  .post(authenticate.verifyUser, favoritesController.addDish)
  .delete(authenticate.verifyUser, favoritesController.deleteDish)

module.exports = favoriteRouter