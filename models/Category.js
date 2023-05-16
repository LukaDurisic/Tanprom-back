const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/db-config");

    const Category = sequelize.define('category', {
        id:{
            type: Sequelize.UUID,
            defaultValue:Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: DataTypes.STRING
    }, {
        freezeTableName: true,
        timestamps: false
    })

    module.exports = Category
