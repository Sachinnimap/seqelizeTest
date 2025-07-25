const { User, Product } = require("../../models")
const bycrypt =  require("bcrypt")


async function getAllUsers(){
    return await User.findAll({
        // include : [
        //     {
        //         model  :Product,
        //         as : "product"
        //     }
        // ]
    })
}

async function getUsersById(userId){
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