const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    image: String,
    category: String,
    stock: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("Food", foodSchema);