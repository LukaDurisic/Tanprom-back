const express = require("express");
const userRegister = require("../data/userQuery");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const user = { username: req.body.username, password: req.body.password };

    await userRegister(user.username, user.password);

    res.status(201).send("Data sent");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
