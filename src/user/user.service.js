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

    // const {username,password,email,firstName,lastName,role,mobileNumber} = data;


    // const hassPassword = await bycrypt.hash(password,10)

    // console.log("HassPassword:-",hassPassword)

    //  await User.create({username,password : hassPassword,email,firstName,lastName,role,mobileNumber})
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