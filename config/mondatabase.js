const mongoose =  require("mongoose")


const connectDB = async()=> {
try{
    await mongoose.connect("mongodb://127.0.0.1:27017/testmongodb",{
        
    })
    console.log(" Mongoose- Database connected !")
}catch(error){
    console.log("something went wrong:",error.message)
}
}

module.exports = {connectDB}