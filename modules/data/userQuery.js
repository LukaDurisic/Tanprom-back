const User = require("../models/User");

async function userRegister(uid, username) {
  try {
    const newUser = await User.create({
      firebaseUID: uid,
      username: username,
    });
    console.log('User created')
  } catch (err) {
    console.log(err);
  }
}

// async function getUsers() {
//   try {
//     const data = await User.findAll({ attributes: ["username", "password"] });
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// }

module.exports = {
  userRegister: userRegister,
  // getUsers: getUsers,
};
