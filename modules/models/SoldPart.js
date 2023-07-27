const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../../shared/config/db-config");
const User = require("../models/User")
const Part = require("../models/Part")

const SoldPart = sequelize.define(
  "sold_part",
  {
    part_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
      references:{
        model:Part,
        key:"id"
      }
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references:{
        model:User,
        key:"firebaseUId"
      }
    },
    quantity: {
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

async function sync() {
      await SoldPart.sync({alter: true})
  }

  sync()

module.exports = SoldPart;
