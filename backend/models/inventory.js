const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  itemName: String,
  quantity: Number,
  unit: String
});

module.exports = mongoose.model("Inventory", inventorySchema);