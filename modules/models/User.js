const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../../shared/config/db-config");

const User = sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    firebaseUID: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

module.exports = User;
