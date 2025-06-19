const { User, Product } = require("../models")


async function getAllUsers(){
    return await User.findAll({
        include : [
            {
                model  :Product,
                as : "product"
            }
        ]
    })
}

async function getUsersById(userId){
    return await User.findOne({where : {id : userId}})
}

async function addUser(data){
    console.log("data",data)
    const {username,password,email,firstName,lastName,role,mobileNumber} = data;
     await User.create({username,password,email,firstName,lastName,role,mobileNumber})
    return null
}

async function modifyUser(userId,data){
   const [response] =   await User.update(data,{where:{id : userId}})
   if(response == 0) throw new Error("User not updated!")
    return null
}

async function deleteUser(userId){
     await User.delete(userId)
     return null
}


module.exports = {getAllUsers,getUsersById,addUser,modifyUser,deleteUser}