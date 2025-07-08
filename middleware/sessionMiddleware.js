


const sessionMiddleware = (req,res,next)=>{

    console.log('req.userId',req.session)

    console.log("req",req)
    
        if(req.session.userId){
            
        }
        next()
        // res.status(201)
}   


module.exports =  {sessionMiddleware};