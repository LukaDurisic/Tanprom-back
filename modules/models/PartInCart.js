const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/db-config");
const Cart = require('./Cart')
const Part = require('./Part')

    const PartInCart = sequelize.define('part_in_cart', {
        cart_id:{
            type: Sequelize.UUID,
            primaryKey: true,
            allowNull: false,
            references: {
                model: 'Cart',
                key: 'id'
              }
        },part_id:{
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Part',
                key: 'id'
              }
        },quantity:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })

    // PartInCart.belongsTo(Cart);
    // Cart.hasMany(PartInCart);

    // PartInCart.belongsTo(Part);
    // Part.hasMany(PartInCart);

    module.exports = PartInCart