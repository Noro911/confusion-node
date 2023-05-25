const express = require('express')

const leaderRouter = express.Router()
const leaderController = require('../controller/leadersController')

leaderRouter.use(express.json())

leaderRouter.route('/')
  .get((req, res) => {
    res.end('Get leaders')
  })
  // .post((req, res) => {
  //   res.end(`Add new leader: {name: ${req.body.name}, age: ${req.body.age}}`)
  // })
  .post(leaderController.create)
  .delete((req, res) => {
    res.end(`Delete all leaders`)
  })

leaderRouter.route('/:leaderId')
  .get((req, res) => {
    res.end(`Get leader ${req.params.leaderId}`)
  })
  .put((req, res) => {
    res.end(`Update leader {name: ${req.body.name}, age: ${req.body.age}}`)
  })
  .delete((req, res) => {
    res.end(`Delete leader ${req.params.leaderId}`)
  })

  module.exports = leaderRouter