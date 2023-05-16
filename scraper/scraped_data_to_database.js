const fs = require('fs');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('scarapertest', 'root', 'usbw', {
    host: 'localhost',
    dialect: 'mysql',
  });

  const CsvData = sequelize.define('CsvData', {
    column1: {
      type: DataTypes.STRING,
      allowNull: true,
    }
    // Add more columns as per your CSV file structure
  }, {
    tableName: 'Kategorije',  // Replace with your desired table name
    timestamps: false,  // Set to false if you don't want Sequelize to add timestamp fields (createdAt, updatedAt)
  });

  const csvData = fs.readFileSync('scraper/scraped_data.csv', 'utf-8');
const csvRows = csvData.split('\n');

const dataObjects = [];
csvRows.forEach(row => {
  const rowValues = row.split('\n');
  const dataObject = {
    column1: rowValues[0],
    column2: rowValues[1],
    // Map the remaining values to their respective columns
  };
  dataObjects.push(dataObject);
});

(async () => {
    try {
      await sequelize.sync();  // Create the table if it doesn't exist
      await CsvData.bulkCreate(dataObjects);  // Insert data into the table
      
      console.log('Data inserted successfully.');
      process.exit(0);  // Exit the script
    } catch (error) {
      console.error('Error:', error);
      process.exit(1);  // Exit the script with an error code
    }
  })();
