const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../../shared/config/db-config");
const Category = require('./Category')
const Manufacturer = require('./Manufacturer')

const Part = sequelize.define(
  "part",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    available: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

Manufacturer.hasMany(Part);
Part.belongsTo(Manufacturer);
Category.hasMany(Part);
Part.belongsTo(Category);

module.exports = Part;
