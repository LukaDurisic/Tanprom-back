const express = require("express");
const register = require("../controllers/register");
const login = require("../controllers/login");
// const cart = require("../controllers/cart");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
// router.post("/cart", cart);

module.exports = router;
