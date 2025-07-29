const { User, Product } = require("../../models")
const bycrypt =  require("bcrypt")
const  {Op}  =  require("sequelize")


async function getAllUsers(query){

        console.log("params:-",query)
        console.log("params.username",query.username)

    return await User.findAll({
        // include : [
        //     {
        //         model  :Product,
        //         as : "product"
        //     }
        // ]
        where : {
            id : [1,4,16]

            //  where : {
            // id : {
            //   [Op.in]  : [1,4,5,16]
            // }
            // username  : {
            //     // [Op.startsWith] : query.username,
            //     // [Op.endsWith] : query.username
            //     // [Op.like]  : `%${query.username}`
            //     //[Op.like]  : `%${query.username}%`

            // }
        }
    })
}

async function getUsersById(userId){

        await findOrCreate({where : {
            id : userId
        }})
        
    return await User.findOne({
        // include :[
        //     {
        //         model  : Product,
        //         as : "product"
        //     }
        // ],
        where : {id : userId}
    })
}

async function addUser(data){
   
    console.log("service-data",data)

    const {username,password,email,firstName,lastName,role,mobileNumber} = data;


    const hassPassword = await bycrypt.hash(password,10)

    console.log("HassPassword:-",hassPassword)

     await User.create({username,password : hassPassword,email,firstName,lastName,role,mobileNumber})
    return null
}

async function modifyUser(userId,data){
   const [response] =   await User.update(data,{where:{id : userId}})
   if(response == 0) throw new Error("User not updated!")
    return null
}

async function deleteUser(userId){

    await User.increment({stock : 5},{where : {id : 5}}) 

    //paranoid true - it will store data in db but  as deletedAt = true
     await User.delete(userId)
     return null
}

async function Increment(userId){

    //increment role - integer BY 5
    await User.increment({role : 5},{where : {id : 5}}) 


     return null 
}


module.exports = {getAllUsers,getUsersById,addUser,modifyUser,deleteUser,Increment}


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

// product.associate = (models)=>{
//     product.belongsToMany(models.User, { foreignKey : "userId", as : "user",through :"userProduct"})
// }


return product;
}





module.exports =  (sequelize,Datatypes)=>{

    const User =  sequelize.define("User",{
            name :{
                type : Datatypes.STRING,
                primaryKey  : true,
                allowNull : false,
            },
            email  : {
                type  : Datatypes.STRING,
                primaryKey : true,
                allowNull  : false
            }
    })

    return User
}

// const result =  await User.create(
//     {
//         name: "sach",email : "test@gmail.com",age:12,rollNo : 2
//     },
//     {
//         fields : ['name',"age"]
//     },
//     where :{
//         name  :{
//             [Op.substring]  : "sub"
//         } 
//     }
// ) //on create only name and age will change not other field will affect

// console.log("result",result)



// await User.increment('age',{by : 5});
// await User.increment({age : 20, rollNo : 200}) //increment by 20 and 200;
// await User.increment(['age','rollNo'],{by :10}) //increament value same

// console.log("name",result.name)
// console.log("email",result.email)

// await result.reload() //this wiil load latest data  if we want to acccess latest saved values!
// console.log("result.")