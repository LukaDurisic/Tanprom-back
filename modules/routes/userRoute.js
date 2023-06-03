const express = require("express");
const userRegister = require("../data/userRegister");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    console.log(req.body.username);
    // console.log(req.body.password);

    const user = { username: req.body.username, password: req.body.password };

    console.log(user);

    await userRegister(user.username, user.password);

    res.status(201).send("Data sent");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
