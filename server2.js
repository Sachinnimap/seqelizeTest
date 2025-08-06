const express =  require("express")
const {handleAuth} =  require("./customeMid")
const app = express()
const {handleDate} = require("./ageMidd")


app.use(express.json())
app.use(handleAuth)

app.use((err,req,res,next)=>{
    console.log("midddleware is running!")
    next()
})

// app.use("unhandledException",(err))


app.get("/", (req,res)=>{
    console.log("ID-controller",req.customId)
    res.send("Hello world")
})


app.get("/getAge",handleDate,(req,res)=>{

    const dob = req.body.date;
    // if(dob) return res.status(400).json({message:"date is invalid"})

    const age = getAge(dob)

    if(!age){
       return res.status(200).json({message:"date is invalid"})
    }
    res.status(200).json({message : "Date calculated",age})
})

const getAge = (dob) =>{
const birthDate = new Date(dob)
const currentDate =  new Date()

if(birthDate >= currentDate ) return null

const  age  =  currentDate.getFullYear() - birthDate.getFullYear();
return age
}


 app.listen(3000,(req,res)=>{
   console.log("server is running!")
})

app.on("error",(error)=>{
    console.log("ERROR",error)
})