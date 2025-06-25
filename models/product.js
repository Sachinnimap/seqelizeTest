
module.exports =  (sequelize,DataTypes) => {
const product = sequelize.define('product',{

    userId : {
        type :DataTypes.INTEGER,
        allowNull : true,
        reference: {
            model : "user",
            key : "id"
        },
        // unique : true // if ONE-TO-ONE so user cannot create multiple product with same user 
    },
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
        type  : DataTypes.ENUM("FOOD","CLOTH","FOOTWEAR","GROCCERY"),
        validate : {
            // isIn :{
            //     args : [['FOOD',"CLOTH","FOOTWEAR","GROCCERY"]],
            //     msg : "Must be 'FOOD', 'CLOTH', 'FOOTWEAR' or 'GROCCERY'"
            // },
            checkEnum(value) { // custom validators
                console.log(value)
                const isValid =  ["FOOD","CLOTH","FOOTWEAR","GROCCERY"].includes(value)
                
                if(!isValid){
                    throw new Error("Must be data from ____ 'FOOD', 'CLOTH', 'FOOTWEAR' or 'GROCCERY'")
                }
            }
        },
        allowNull : false
    },
    desc : {
        type : DataTypes.STRING
    },
    price :{
        type : DataTypes.INTEGER,
        allowNull : false,
        validate: {
            // isInt : {
            //     msg : "price must be a number!"
            // }
            //  isFloat  :{
            //     msg : "price must be number1"
            // }
            isFloat  :{
                msg : "price must be number1"
            }
        }
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
    isAvailable : {
       type :  DataTypes.STRING // DataTypes.ENUM("Y","N"),
    //    validate : {
    //         checkType(value){
    //             const isInclude = ["Y","N"].includes(value)
    //             if(!isInclude){
    //                 throw new Error("available should be Y or N")
    //             }
    //         }
    //    }
    }
    
},
{
    tableName : "product",
    timestamps : true,
    paranoid : true
})

// product.associate  = (models)=>{
//     product.belongsTo(models.User,{foreignKey:"userId",as :"user"})
// }



// product.associate = (models)=> {
//     product.belongsTo(models.User,{foreignKey : "userId", as :"user"})
// }

product.associate = (models)=>{
    product.belongsToMany(models.User, { foreignKey : "userId", as : "user",through :"userProduct"})
}


return product;
}


