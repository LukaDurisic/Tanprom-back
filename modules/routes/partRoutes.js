const express = require("express");
// const getAllParts = require("../data/getAllParts.js");
// const getAvailableParts = require("../data/getAvailableParts.js");
const getPartManufacturer = require('../data/getPartManufacturer')

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await getPartManufacturer;

  res.send(data);
});

module.exports = router;
