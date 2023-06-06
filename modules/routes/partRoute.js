const express = require("express");
const { getPartManufacturer,getAllParts } = require("../data/partQuery");

const router = express.Router();
//test
router.get("/", async (req, res) => {
  const data = await getPartManufacturer;
  res.send(data);
});

router.get('/all', async (req, res) => {
  const data = await getAllParts;
  res.send(data);
})

module.exports = router;
