const express = require('express')

const leaderRouter = express.Router()
const leaderController = require('../controller/leadersController')
const authenticate = require('../auth')

leaderRouter.use(express.json())

leaderRouter.route('/')
  .get(leaderController.findAll)
  .post(authenticate.verifyUser, authenticate.verifyAdmin, leaderController.create)
  .delete(authenticate.verifyUser, authenticate.verifyAdmin, leaderController.deleteAll)

leaderRouter.route('/:leaderId')
  .get(leaderController.getById)
  .put(authenticate.verifyUser, authenticate.verifyAdmin, leaderController.updateById)
  .delete(authenticate.verifyUser, authenticate.verifyAdmin, leaderController.deleteById)

module.exports = leaderRouter