const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Promotion = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  featured: {
    type: Boolean,
    required: true
  }
})

module.exports = mongoose.model("Promotion", Promotion)