const sequelize = require('../config/database')
const { DataTypes } = require('sequelize')
const user = require('./user')
const product = require("./product")


const UserModel = user(sequelize,DataTypes)
const ProductModel = product(sequelize,DataTypes)

module.exports = {
    sequelize,
        UserModel,
        ProductModel
}