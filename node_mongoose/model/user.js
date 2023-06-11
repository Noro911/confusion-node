const mongoose = require('mongoose')
// import passport-local-mongoose
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  firstname: {
    type: String,
      default: ''
  },
  lastname: {
    type: String,
      default: ''
  },
  admin:   {
      type: Boolean,
      default: false
  }
})
// plugin
User.plugin(passportLocalMongoose)
module.exports = mongoose.model('User', User)