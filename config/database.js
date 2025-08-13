
const {Sequelize} = require("sequelize")


const sequelize = new Sequelize(
 "seqdb",
  "root",
  "root",
  {
    host: "localhost",
    dialect: 'mysql',
    logging: true, // optional
  }
)

module.exports = sequelize;

