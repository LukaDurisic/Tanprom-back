const User = require("../models/User");
const Cart = require("../models/Cart");

async function userRegister(uid, username) {
  try {
    const newUser = await User.create({
      firebaseUID: uid,
      username: username,
    });
    console.log("User created");
  } catch (err) {
    console.log(err);
  }
}

async function createCart(uid) {
  try {
    const newCart = await Cart.create({
      firebaseUID: uid,
    });
    console.log("cart created");
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  userRegister: userRegister,
  createCart: createCart
};
