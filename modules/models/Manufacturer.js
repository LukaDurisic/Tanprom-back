const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../../shared/config/db-config");

const Manufacturer = sequelize.define(
  "manufacturer",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
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

  // async function sync() {
  //     await Manufacturer.sync({force: true})
  // }

  // sync()
module.exports = Manufacturer ;
