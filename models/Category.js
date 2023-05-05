const { DataTypes, Sequelize } = require("sequelize");
const UUID = require('uuid')

module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('category', {
        id:{
            type: Sequelize.UUID,
            defaultValue:Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        name: DataTypes.STRING
    }, {
        freezeTableName: true,
        timestamps: false
    })

    return Category
}