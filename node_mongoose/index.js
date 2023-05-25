const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/conFusion", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connect!!!!");
  } catch (error) {
    console.log("fail!!!!!");
  }
}

module.exports = { connect };
