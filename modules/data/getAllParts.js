const Part = require("../models/Part");

async function getAllParts() {
  try {
    const data = await Part.findAll({ attributes: ["name", "price"] });
    return data;
  } catch (err) {
    console.log(err);
  }
}

module.exports = getAllParts();
