const Part = require("../models/Part");
const { Op } = require("sequelize");
const Manufacturer = require("../models/Manufacturer");

async function getAllParts() {
  try {
    const data = await Part.findAll({ attributes: ["name", "price"] });
    return data;
  } catch (err) {
    console.log(err);
  }
}

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

async function getPartManufacturer() {
  try {
    const make = "Mercedes-Benz";
    const data = await Part.findAll({
      attributes: ["name", "price", "available"],
      include: {
        model: Manufacturer,
        where: {
          make: make,
        },
      },
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

module.exports = {
  getAllParts: getAllParts(),
  getAvaibleParts: getAvailableParts(),
  getPartManufacturer: getPartManufacturer(),
};
