const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../../shared/config/db-config");

const User = sequelize.define(
  "user",
  {
    firebaseUID: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    username: DataTypes.STRING,
    }, {
        freezeTableName: true,
        timestamps:true
    })

  //   async function sync() {
  //     await User.sync({force: true})
  // }

  // sync()

  

    module.exports = User
