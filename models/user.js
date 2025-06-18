module.exports = (sequelize,DataTypes)=>{

    const user = sequelize.define("user",{
        username  : {  //TODO - validate userName - Sachin4968@
            type : DataTypes.STRING,
            allowNull : false,
            unique : true
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        email : {  //TODO - email validate @.com 
            type : DataTypes.STRING,
            allowNull :false,
            unique : true
        },
        firstName : {
            type : DataTypes.STRING,
            allowNull :false ,
            field : "first_name"
        },
        lastName : {
            type  : DataTypes.STRING,
            field : "last_name" 
        },
        role :  { //TODO  -- ADMIN ,SUPER ADMIN
            type   :  DataTypes.STRING
        }
    },

{
    tableName : "user",
    paranoid : true,
})

    return user;
}