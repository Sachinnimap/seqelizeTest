const { UserModel } = require("../models")


async function getAllUsers(){
    return await UserModel.findAll()
}

async function getUsersById(userId){
    return await UserModel.findOne({where : {id : userId}})
}

async function addUser(data){
    console.log("data",data)
    const {username,password,email,firstName,lastName,role} = data;
     await UserModel.create({username,password,email,firstName,lastName,role})
    return null
}

async function modifyUser(userId,data){
   const [response] =   await UserModel.update(data,{where:{id : userId}})
   if(response == 0) throw new Error("User not updated!")
    return null
}

async function deleteUser(userId){
     await UserModel.delete(userId)
     return null
}


module.exports = {getAllUsers,getUsersById,addUser,modifyUser,deleteUser}