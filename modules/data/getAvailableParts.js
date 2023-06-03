const Part = require("../models/Part");
const { Op } = require("sequelize");

async function getAvailableParts() {
  try {
    const data = await Part.findAll({
      attributes: ["name", "price", "available"],
      where: {
        available: {
          [Op.ne]: 0,
        },
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
}

module.exports = getAvailableParts();
