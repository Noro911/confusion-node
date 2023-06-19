const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment = new Schema({
  rating:  {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  comment:  {
    type: String,
    required: true
  },
  author:  {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
}, {
  timestamps: true
})

const Dish = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  comments: [Comment]
}, {
  timestamps: true
});

module.exports = mongoose.model("Dish", Dish);
