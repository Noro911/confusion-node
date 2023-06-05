const express = require('express')

const leaderRouter = express.Router()
const leaderController = require('../controller/leadersController')

leaderRouter.use(express.json())

leaderRouter.route('/')
  .get(leaderController.findAll)
  .post(leaderController.create)
  .delete(leaderController.deleteAll)

leaderRouter.route('/:leaderId')
  .get(leaderController.getById)
  .put(leaderController.updateById)
  .delete(leaderController.deleteById)

module.exports = leaderRouter