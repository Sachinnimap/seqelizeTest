
module.exports =  (sequelize,DataTypes) => {
const product = sequelize.define('product',{
    name : {
        type : DataTypes.STRING,
        allowNull:false,
    },
    surname : {
        type : DataTypes.STRING,
    },
    fullName :  {
        type :DataTypes.VIRTUAL, //only available here not for database
        get(){
            return `${this.name} ${this.surname}`
        }
    },
    image : {
        type : DataTypes.STRING,
        allowNull : true
    },
    type : {
        type  : DataTypes.ENUM("FOOD","CLOTH","FOOTWEAR","GROCCERY")
    },
    desc : {
        type : DataTypes.STRING
    },
    price :{
        type : DataTypes.INTEGER,
        allowNull : false
    },
    outOfStock : {
            type : DataTypes.BOOLEAN,
            defaultValue :false
    },
    country : {
        type  : DataTypes.STRING,
        defaultValue  : "India"
    },
    manufacturedBy: {
        type  : DataTypes.JSON //anything can be stored like ARRAY, OBJECT 
    },
    // reviews  :{  TODO - review with- rating,feedback with array
    //     type : DataTypes.ARRAY
    // }
},
{
    tableName : "product",
    timestamps : true,
    paranoid : true
})
return product;
}


