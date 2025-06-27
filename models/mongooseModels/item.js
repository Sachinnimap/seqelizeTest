const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
        itemName : {
            type : String,
            required : true
        },
        price:  {
            type : Number,
            required : true
        },
        address : {
            type  : String,
        },
        email : {
            type : String,
            required : true
        }
})

const Item =  mongoose.model("Item",itemSchema)

module.exports = {Item}; 