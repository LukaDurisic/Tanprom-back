const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require('../config/db-config')
const User = require('./User')


    const Cart = sequelize.define('cart', {
        id:{
            type: Sequelize.UUID,
            defaultValue:Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        }
    }, {
        freezeTableName: true,
        timestamps: true
    })

User.hasOne(Cart);
Cart.belongsTo(User);

// async function sync() {
//       await Cart.sync({force: true})
//   }

//   sync()

    module.exports = Cart
