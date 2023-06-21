const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../../shared/config/db-config");
const Cart = require("./Cart");
const Part = require("./Part");

const PartInCart = sequelize.define(
  "part_in_cart",
  {
    cart_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
    //   references: {
    //     model: "Cart",
    //     key: "id",
    //   },
    },
    part_id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
    //   references: {
    //     model: "Part",
    //     key: "id",
    //   },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

PartInCart.belongsTo(Cart, {foreignKey: 'cart_id'});
Cart.hasMany(PartInCart, {foreignKey: 'cart_id'});

PartInCart.belongsTo(Part, {foreignKey: 'part_id'});
Part.hasMany(PartInCart, {foreignKey: 'part_id'});

module.exports = PartInCart;
