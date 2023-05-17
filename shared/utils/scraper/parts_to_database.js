const fs = require("fs");
const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();
const Part = require("../../../modules/models/Part");

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: process.env.MYSQL_DIALECT,
  }
);

const csvData = fs.readFileSync("shared/utils/scraper/parts.csv", "utf-8");
const csvRows = csvData.split("\r\n");

const dataObjects = [];
csvRows.forEach((row) => {
  const rowValues = row.split(",");
  const dataObject = {
    name: rowValues[0],
    available: rowValues[1],
    price: rowValues[2],
    manufacturerId: rowValues[3],
    categoryId: rowValues[4],
  };
  dataObjects.push(dataObject);
});

(async () => {
  try {
    await sequelize.sync();
    await Part.bulkCreate(dataObjects);

    console.log("Data inserted successfully.");
    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
})();
