const passport = require('passport')
const LocalStraregy = require('passport-local').Strategy
const User = require('./node_mongoose/model/user')

passport.use(new LocalStraregy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
