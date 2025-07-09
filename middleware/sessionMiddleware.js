


const sessionMiddleware = (req,res,next)=>{

    console.log('req.userId',req.session)

    console.log("req",req.session.userId)
    
        if(!req.session.userId){
            console.log("access denied by session")
            throw new Error("access denied by session")
        }
        next()
        // res.status(201)
}   


module.exports =  {sessionMiddleware};



