

const handleDate =(req,res,next)=>{

    const date = req.body?.date
    if(!date) return res.status(400).send("date is required")

    const dob =  new Date(date)
    if(!dob.getDate()){
        return res.status(400).json({message: "Invalid date"})
    }

    console.log("dob")
    next()
}

module.exports =  {handleDate}