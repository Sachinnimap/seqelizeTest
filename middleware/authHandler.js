const jwt = require("jsonwebtoken")

async function authHandler (req,res,next) {
    try{
    console.log("1")
    console.log("header",req.headers.authorization) // Headers like authorization
    const token = req.headers["authorization"].split(" ")[1]
    const payload =  jwt.verify(token,"SECRETKEY");
    req.user = {
        userId : payload.userId,
        roleId : payload.roleId
    }
    console.log("varified!")
    next()
}catch(error){
    throw new Error("Unathorized!")
}
}


module.exports = {authHandler};