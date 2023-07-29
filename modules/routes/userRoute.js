const express = require("express");
const register = require("../controllers/userControllers/register");
const login = require("../controllers/userControllers/login");
const addToCart = require("../controllers/userControllers/addToCart");
const authentication = require("../../shared/middleware/autentication");
const buy = require("../controllers/userControllers/buy");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/add", authentication, addToCart);
router.post("/buy", authentication, buy);

module.exports = router;
