const PartInCart = require("../models/PartInCart");
const { addPartInCart,refreshQuantity } = require("../data/userQuery");
// const Part = require("../models/Part");
// const Cart = require("../models/Cart");

const addToCart = async (req, res) => {
  try {
    const cartid = req.body.cartID;
    const partid = req.body.partID;
    const quantity = req.body.quantity;

    await addPartInCart(cartid, partid, quantity);
    await refreshQuantity(partid,quantity)

    res.send("Part added");
  } catch (error) {
    console.error(error);
  }
};

module.exports = addToCart;
