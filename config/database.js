
const {Sequelize} = require("sequelize")


const sequelize = new Sequelize(
 "seqdb",
  "root",
  "root",
  {
    host: "localhost",
    dialect: 'mysql',
    logging: false, // optional
  }
)

module.exports = sequelize;

