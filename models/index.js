const Sequelize = require('sequelize');
const config = require('../config/db-config')
require('dotenv').config();



const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST,
  dialect: process.env.MYSQL_DIALECT
});

const db = {};
db.sequelize = sequelize;

db.models={}
db.models.User = require('./User')
db.models.Category = require('./Category')
db.models.Cart = require('./Cart')
db.models.Manufacturer = require('./Manufacturer')
db.models.Part = require('./Part')
db.models.PartInCart = require('./PartInCart')

// db.models.Manufacturer.sync({alter: true})
db.models.Category.sync({alter: true})
// db.models.PartInCart.sync({alter: true})
//db.sequelize.sync({alter: true})

module.exports = db;
