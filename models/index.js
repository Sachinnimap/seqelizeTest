const sequelize = require('../config/database')
const { DataTypes } = require('sequelize')
const user = require('./user')
const product = require("./product")


const UserModel = user(sequelize,DataTypes)
const ProductModel = product(sequelize,DataTypes)


UserModel.hasMany(ProductModel, { foreignKey: 'userId', as: 'products' });
ProductModel.belongsTo(UserModel, { foreignKey: 'userId', as: 'user' });

module.exports = {
    sequelize,
        UserModel,
        ProductModel
}