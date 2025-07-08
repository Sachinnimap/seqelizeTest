

module.exports = (sequelize,DataTypes)=>{
const role =  sequelize.define("roles",{
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            allowNull :false,
            autoIncrement : true
        },
        name : {
            type : DataTypes.STRING,
            allowNull :false,
            // unique : true
        },
        description : {
            type : DataTypes.STRING,
            allowNull : false,
        }
},
{
  
    timestamps : true,
    paranoid : true
}
)
return role;
}
