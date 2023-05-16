const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/db-config");

    const User = sequelize.define('user', {
        id:{
            type: Sequelize.UUID,
            defaultValue:Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        username: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        freezeTableName: true,
        timestamps:true
    })

    module.exports = User
