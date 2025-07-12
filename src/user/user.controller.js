const { addUser,deleteUser,getAllUsers,getUsersById, modifyUser}  = require("./user.service") 

const getUsers = async(req,res)=>{
    const response = await getAllUsers()
    res.status(200).json(response)
}

const getUser = async(req,res)=>{
    const userId = req.params.id
    const response =  await getUsersById(userId)
    res.status(200).json(response)
}

const createUser = async(req,res)=>{
    // console.log('req.file',req.file)
    console.log("req.body",req.body)
    console.log("headers",req.headers)
    const data =  req.body
    await addUser(data)
    res.status(201).json("User created successfully")
}

const updateUser = async(req,res)=>{
    const userId = req.params.id
    const data  = req.body
    await modifyUser(userId,data)

    res.status(200).json("User updated successfully")
}

const destroyUser = async(req,res)=>{
    const userId =  req.params.id
    await deleteUser(userId)

    res.status(200).json("User deleted successfully")
}


module.exports = {getUser,getUsers,updateUser,createUser,destroyUser}