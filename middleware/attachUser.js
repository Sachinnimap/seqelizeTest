
 function attachUser(req,res,next){
    req.user =  {id: 123,name : 'sachin ram'}
    
    next() //require so this can go to next request
}



module.exports = attachUser;