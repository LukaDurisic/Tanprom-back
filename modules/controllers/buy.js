const { removePart, addToSold } = require("../data/userQuery");
const {sequelize} = require("../models/index.js");

const buy = async (req, res) => {
  const partid = req.body.partID;
  const userid = req.body.cartUserID;
  const cartid = req.body.cartID;
  const quantity = req.body.quantity;

  try {
    const t = await sequelize.transaction();
    

    try {
      await removePart(cartid, partid,t);

      await addToSold(partid, userid, quantity,t);

      await t.commit();

      res.status(200).json({ message: "Purchase successful" });
    } catch (error) {
      await t.rollback();

      console.error("Transaction error:", error);
      res
        .status(500)
        .json({ error: "An error occurred during the transaction" });
    }
  } catch (err) {
    res.status(500).json({error : "Transaction failed"})
  }
};

module.exports = buy;
