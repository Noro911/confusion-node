const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
});

module.exports = mongoose.model("Dish", Dish);
