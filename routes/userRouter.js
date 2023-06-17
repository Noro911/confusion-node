const express = require('express')
const userRouter = express.Router()
const usersController = require('../controller/usersController')
const passport = require('passport')
const authenticate = require('../auth')

userRouter.use(express.json())

userRouter.route('/').get(authenticate.verifyUser, authenticate.verifyAdmin, usersController.getAllUsers)

userRouter.route('/signup').post(usersController.create)

userRouter.route('/login').post(passport.authenticate('local'), usersController.login)

module.exports = userRouter