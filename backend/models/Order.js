const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    default: "Guest Customer"
  },
  items: Array,
  total: Number,
  status: {
    type: String,
    default: "Pending"
  },
  paymentMethod: {
    type: String,
    default: "Cash on Delivery"
  }
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);