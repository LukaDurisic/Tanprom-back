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
db.models.User = require('./User')(sequelize,Sequelize.DataTypes)
db.models.Category = require('./Category')(sequelize,Sequelize.DataTypes)
db.models.Cart = require('./Cart')(sequelize,Sequelize.DataTypes)

db.sequelize.sync()

module.exports = db;
