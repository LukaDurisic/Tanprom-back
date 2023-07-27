const Sequelize = require("sequelize");
const config = require("../../shared/config/db-config");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: process.env.MYSQL_DIALECT,
  }
);

const db = {};
db.sequelize = sequelize;

db.models = {};
db.models.User = require("./User");
db.models.Category = require("./Category");
db.models.Cart = require("./Cart");
db.models.Manufacturer = require("./Manufacturer");
db.models.Part = require("./Part");
db.models.PartInCart = require("./PartInCart");
db.models.SoldPart = require("./SoldPart");

// db.models.Manufacturer.sync({alter: true})
// db.models.User.sync({ force : true })
db.models.SoldPart.sync({ force: true });
// db.models.Part.sync({ force: true });
db.sequelize.sync({force: true})

module.exports = db;
