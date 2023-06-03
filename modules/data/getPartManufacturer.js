const Part = require("../models/Part");
const { Op } = require("sequelize");
const Manufacturer = require("../models/Manufacturer");

async function getPartManufacturer() {
  try {
    const make = 'Mercedes-Benz'
    const data = await Part.findAll({
      attributes: ["name", "price", "available"],
      include:{
        model:Manufacturer,
        where:{
            make:make
        }
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

module.exports = getPartManufacturer();
