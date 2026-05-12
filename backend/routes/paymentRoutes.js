const express = require("express");
const Razorpay = require("razorpay");

const router = express.Router();

router.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({ message: "Amount is required" });
    }

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      return res.status(500).json({
        message: "Razorpay keys missing in .env"
      });
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET
    });

    const order = await razorpay.orders.create({
      amount: Number(amount) * 100,
      currency: "INR",
      receipt: "receipt_" + Date.now()
    });

    res.json(order);
  } catch (error) {
    console.log("RAZORPAY ERROR:", error);
    res.status(500).json({
      message: "Payment order creation failed",
      error: error.message
    });
  }
});

module.exports = router;