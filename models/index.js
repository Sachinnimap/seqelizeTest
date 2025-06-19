const sequelize = require('../config/database')
const { DataTypes } = require('sequelize')
const user = require('./user')
const product = require("./product")

const db = {}
db.User = user(sequelize,DataTypes)
db.Product = product(sequelize,DataTypes)

// __________________________
// - ONE to ONE -
// UserModel.hasOne(ProductModel,{foreignKey : id, as : 'product'})
// ProductModel.belongsTo(UserModel,{foreignKey : id , as  :'user'})
// ________________________

// -1- Directly calling 
// UserModel.hasMany(ProductModel, { foreignKey: 'userId', as: 'products' });
// ProductModel.belongsTo(UserModel, { foreignKey: 'userId', as: 'user' });

// -2- added in model add throw forEach method
Object.keys(db).forEach(modelName=>{
    if(db[modelName].associate){
        db[modelName].associate(db)
    }
})


db.sequelize = sequelize;

module.exports = db;