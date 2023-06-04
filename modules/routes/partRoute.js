const express = require("express");
// const getAllParts = require("../data/getAllParts.js");
// const getAvailableParts = require("../data/getAvailableParts.js");
const { getPartManufacturer,getAllParts } = require("../data/partQuery");

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await getPartManufacturer;
  res.send(data);
});

router.get('/all', async (req, res) => {
  const data = await getAllParts;
  res.send(data);
})

module.exports = router;
