const { User } = require("../../models");
const jwt  =  require("jsonwebtoken")
const bcrypt =  require("bcrypt")


async function login  (req,res){
            const {email,password} =  req.body;

        const getUser =  await User.findOne({where : {email}})

        if(!getUser){
            throw  new Error("Invalid credentials")
        }

          console.log("getUser.password",getUser.password)
          console.log("password",password,typeof(password))

             const isValidPassword =  await bcrypt.compare(password.toString(),getUser.password)

             console.log("isValidPassword",isValidPassword)

        if(!isValidPassword) throw new Error("Wrong password!")


          const token =  await jwt.sign({userId: getUser.id,roleId : getUser.role},"SECRETKEY")
          console.log("token",token)

          req.session.userId = getUser.id

        res.status(200).json(token)
}



module.exports =  {login}