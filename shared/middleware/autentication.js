const jwt = require("jsonwebtoken");

const authentication = async (req, res,next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    const cart = req.body.cartUserID;

    if (token == null)
      return res
        .status(401)
        .json({ message: "Not allowed", error: error.message });

    const decodedToken = jwt.decode(token);

    if (decodedToken.user_id === cart) {
      next();
    } else {
      res.status(403).send("Failed to authenticate");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Not allowed", error: error.message });
  }
};

module.exports = authentication;
