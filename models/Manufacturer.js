const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/db-config");
const Part = require('./Part')

const Manufacturer = sequelize.define(
  "manufacturer",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Manufacturer.hasMany(Part);
Part.belongsTo(Manufacturer);

  // async function sync() {
  //     await Manufacturer.sync({force: true})
  // }

  // sync()
module.exports = Manufacturer ;
