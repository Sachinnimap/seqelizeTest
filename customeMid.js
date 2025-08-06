
 const handleAuth = (req,res,next)=>{

   req.customId = 123

   console.log("ID",req.customId)

   next()

}



module.exports =  {handleAuth}