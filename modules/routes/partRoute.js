const express = require("express");
const {
  getPartManufacturer,
  getAllParts,
  filterPartsByName,
} = require("../data/partQuery");

const router = express.Router();
//test
router.get("/", async (req, res) => {
  const data = await getPartManufacturer;
  res.send(data);
});

router.get("/all", async (req, res) => {
  const data = await getAllParts;
  res.send(data);
});

router.get("/all/:name", async (req, res) => {
  const name = req.params.name;
  const data = await filterPartsByName(name);
  res.send(data);
});

module.exports = router;
