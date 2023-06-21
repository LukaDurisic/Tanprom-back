const User = require("../models/User");

async function userRegister(username, password,uid) {
  try {
    const newUser = await User.create({
      username: username,
      password: password,
      firebaseUID: uid,
    });
  } catch (err) {
    console.log(err);
  }
}

async function getUsers() {
  try {
    const data = await User.findAll({ attributes: ["username", "password"] });
    return data;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  userRegister: userRegister,
  getUsers: getUsers,
};
