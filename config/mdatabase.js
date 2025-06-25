
const {MongoClient} = require("mongodb")


const uri = "mongodb://127.0.0.1:27017"

let db;
const connectDB = async()=>{
try{
return  await new MongoClient(uri); //create new client
}catch(error){
  throw new Error(error.message)
}
}
 connectDB().then(client=> {
db =  client.db("testmongodb")
console.log("Database connected!")
})

const getDB = ()=>{
    if(!db) throw new Error("Database not connected!")
        return db;
}
module.exports = {connectDB,getDB}

