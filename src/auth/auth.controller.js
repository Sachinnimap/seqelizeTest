const { User } = require("../../models");
const jwt  =  require("jsonwebtoken")


async function login  (req,res){
            const {email,password} =  req.body;

        const getUser =  await User.findOne({where : {email}})

        if(!getUser){
            throw  new Error("Invalid credentials")
        }

        if(!(getUser.password == password)) throw new Error("Wrong password!")


          const token =  await jwt.sign({userId: getUser.id,roleId : getUser.role},"SECRETKEY")
          console.log("token",token)

        res.status(200).json(token)
}



module.exports =  {login}