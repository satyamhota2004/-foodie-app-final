const express = require("express");

const Inventory = require("../models/Inventory");

const router = express.Router();

router.get("/", async (req, res) => {
  const items = await Inventory.find();

  res.json(items);
});

router.post("/", async (req, res) => {
  const item = await Inventory.create(req.body);

  res.json(item);
});

module.exports = router;