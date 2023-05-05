const { DataTypes, Sequelize } = require("sequelize");
const UUID = require('uuid')

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id:{
            type: Sequelize.UUID,
            defaultValue:Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        username: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        freezeTableName: true,
        timestamps:true
    })

    return User
}