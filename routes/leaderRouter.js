const express = require('express')

const leaderRouter = express.Router()

leaderRouter.use(express.json())

leaderRouter.route('/')
  .get((req, res) => {
    res.end('Get leaders')
  })
  .post((req, res) => {
    res.end('Post new leader')
  })
  .put((req, res) => {
    res.end('Put leader')
  })
  .delete((req, res) => {
    res.end('Delete leader')
  })

leaderRouter.route('/:leaderId')
  .get((req, res) => {
    res.end(`Get leader ${req.params.leaderId}`)
  })
  .post((req, res) => {
    res.end(`Post leader ${req.params.leaderId}`)
  })
  .put((req, res) => {
    res.end(`Update leader ${req.params.leaderId}`)
  })
  .delete((req, res) => {
    res.end(`Delete leader ${req.params.leaderId}`)
  })

  module.exports = leaderRouter