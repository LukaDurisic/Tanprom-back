const fs = require("fs");
const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();
const Manufacturer = require("../models/Manufacturer");

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: process.env.MYSQL_DIALECT,
  }
);

const csvData = fs.readFileSync("scraper/manufacturers.csv", "utf-8");
const csvRows = csvData.split("\n");

const dataObjects = [];
csvRows.forEach((row) => {
  const rowValues = row.split(",");
  const dataObject = {
    make: rowValues[0],
    country: rowValues[1],
    year: rowValues[2],
    // Map the remaining values to their respective columns
  };
  dataObjects.push(dataObject);
});

(async () => {
  try {
    await sequelize.sync(); // Create the table if it doesn't exist
    await Manufacturer.bulkCreate(dataObjects); // Insert data into the table

    console.log("Data inserted successfully.");
    process.exit(0); // Exit the script
  } catch (error) {
    console.error("Error:", error);
    process.exit(1); // Exit the script with an error code
  }
})();
