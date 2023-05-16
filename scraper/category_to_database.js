const fs = require('fs');
const { Sequelize, DataTypes } = require('sequelize');
const Category = require('../models/Category')

const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST,
  dialect: process.env.MYSQL_DIALECT
});

const csvData = fs.readFileSync('scraper/category.csv', 'utf-8');
const csvRows = csvData.split('\n');

const dataObjects = [];
csvRows.forEach(row => {
  const rowValues = row.split('\n');
  const dataObject = {
    name: rowValues[0],
  };
  dataObjects.push(dataObject);
});

(async () => {
    try {
      await sequelize.sync();  // Create the table if it doesn't exist
      await Category.bulkCreate(dataObjects);  // Insert data into the table
      
      console.log('Data inserted successfully.');
      process.exit(0);  // Exit the script
    } catch (error) {
      console.error('Error:', error);
      process.exit(1);  // Exit the script with an error code
    }
  })();
