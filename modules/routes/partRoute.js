const express = require("express");
const getPartMan = require("../controllers/partControllers/getPartManufacturer");
const getAll = require("../controllers/partControllers/getAll");
const getUnavailable = require("../controllers/partControllers/getUnavailable");
const filterPartsByName = require("../controllers/partControllers/filterPartsByName");

const router = express.Router();

router.get("/", getPartMan);
router.get("/all", getAll);
router.get("/all/:name", filterPartsByName);
router.get("/unavailable", getUnavailable);

module.exports = router;
