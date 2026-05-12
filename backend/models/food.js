const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  category: String,
  stock: Number
});

module.exports = mongoose.model("Food", foodSchema);