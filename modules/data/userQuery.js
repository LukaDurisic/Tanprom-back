const User = require("../models/User");
const Cart = require("../models/Cart");
const PartInCart = require("../models/PartInCart");
const Part = require("../models/Part");
const SoldPart = require("../models/SoldPart");

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

async function addPartInCart(cartid, partid, quantity) {
  try {
    const adding = await refreshQuantity(partid, quantity);
    if (adding != 0) {
      const addPart = await PartInCart.create({
        cart_id: cartid,
        part_id: partid,
        quantity: quantity,
      });
      console.log("part added");
    }
  } catch (err) {
    console.log(err);
  }
}

async function refreshQuantity(partid, quantity) {
  Part.findByPk(partid).then((prt) => {
    if (prt) {
      if (prt.available > quantity) {
        prt.available = prt.available - quantity;
        prt.save();
        return 1;
      } else {
        console.log("There are not that many available parts");
        return 0;
      }
    } else {
      console.log("User not found!");
      return 0;
    }
  });
}

async function removePart(cartid, partid) {
  try {
    await PartInCart.destroy({ where: { cart_id: cartid, part_id: partid } });
    console.log("User deleted successfully");
  } catch (err) {
    console.error(err);
  }
}

async function addToSold(partid, userid, quantity) {
  const price = await Part.findByPk(partid).then((prt) => {
    if (prt) {
      return prt.price;
    }
  });

  await SoldPart.create({
    part_id: partid,
    user_id: userid,
    quantity: quantity,
    price: price,
  });
}

module.exports = {
  userRegister: userRegister,
  createCart: createCart,
  addPartInCart: addPartInCart,
  refreshQuantity: refreshQuantity,
  addToSold: addToSold,
  removePart: removePart,
};
