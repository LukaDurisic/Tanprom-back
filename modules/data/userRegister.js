const User = require("../models/User");

async function userRegister(username, password) {
  try {
    const newUser = await User.create({
      username: username,
      password: password,
    });

    console.log("User registered:", newUser);
  } catch (err) {
    console.log(err);
  }
}

module.exports = userRegister;
