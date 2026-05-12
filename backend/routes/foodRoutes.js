const express = require("express");

const Food = require("../models/Food");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const foods = await Food.find();

    res.json(foods);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const food = await Food.create(req.body);

    res.json(food);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;