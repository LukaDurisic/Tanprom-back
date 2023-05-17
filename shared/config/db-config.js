const mysql = require('mysql2')
const Sequelize = require('sequelize');

require('dotenv').config();

 /// ovo je isto
 // tocnije ovo doli je tocan nacin za spajanje na bazu kad se koristi sequelize
const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: process.env.MYSQL_DIALECT
  });
  
module.exports = sequelize;