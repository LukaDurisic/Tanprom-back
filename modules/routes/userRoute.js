const express = require("express");
const register = require("../controllers/register");
const login = require("../controllers/login");
const addToCart = require("../controllers/addToCart");
const authentication = require("../../shared/middleware/autentication");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/add",authentication, addToCart);

module.exports = router;
