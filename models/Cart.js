// const { DataTypes, Sequelize } = require("sequelize");
// const UUID = require('uuid');



// module.exports = (sequelize, DataTypes) => {

//     const Cart = sequelize.define('cart', {
//         cart_id:{
//             type: Sequelize.UUID,
//             defaultValue:Sequelize.UUIDV4,
//             primaryKey: true,
//             allowNull: false
//         },user_id:{
//             type: Sequelize.UUID,
//             defaultValue:Sequelize.UUIDV4,
//             allowNull: false,
//             references:{
//                 model: User,
//                 key:'id'
//             }
//         }
//     }, {
//         freezeTableName: true,
//         timestamps: true
//     })

//     return Cart
// }