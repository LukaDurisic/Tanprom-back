const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require('../../shared/config/db-config')
const User = require('./User')


    const Cart = sequelize.define('cart', {
        id:{
            type: Sequelize.UUID,
            defaultValue:Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false
        }
    }, {
        freezeTableName: true,
        timestamps: true
    })

User.hasOne(Cart, {foreignKey: 'firebaseUID'});
Cart.belongsTo(User, {foreignKey: 'firebaseUID'});

// async function sync() {
//       await Cart.sync({force: true})
//   }

//   sync()

    module.exports = Cart