const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
        itemName : {
            type : String,
            required: [true, 'Name is required'],
            minlength: [3, 'Item name must be at least 3 characters']
        },
        price:  {
            type : Number,
            required : true,
            set: (value) => Math.round(value),
                 get: value => value.toFixed(2)  //39823.00       
        },
        address : {
            type  : String,
            trim : true  // trim string from start and end 
        },
        email : {
            type : String,
            required : true,
            unique : true,
            // validate : {  //normal custom validator
            //     validator  : function (value){
            //             if(!value.includes("@")){
            //                     return  false
            //             }
            //     },
            //     message : "Email must contain @"
            // }
            validate : {
                validator :async function(value){
                    const emailData = await mongoose.model('Item').countDocuments({email : value})
                    console.log("emailData",emailData)
                    return emailData === 0;
                },
                message : "Email already exists"
            }
        },
        status : {
            type : String,
            // match  : /aa$/ - request should be match with this
            default : "Available",
            validate : {
                validator : function (value) {
                    if(this.role == "guest" && value == "Access") return false
                },
                message : 'Item is not accessible for Guest'
            },
        },
        role : {
            type  : String,
            enum : ['admin','superAdmin','user','guest'],
        },
        qty : {
            type : Number,
            min : 1,
            max : 5
        }
},{
    timestamps :true,
    versionKey :false
})

itemSchema.statics.findByRole = function(role){
    console.log("Roll method called!!!")
    return this.find({role})
}

itemSchema.statics.findByPrice  = function(price){
    console.log("Price method called!!!")
    return this.find({price :{$gt : price }})
}

itemSchema.statics = { // for multiple static method so we can write inside one method call
        findByEmail(email){
            return this.find({email})
        },
        findByName(name){
            return this.find({name})
        }
}

itemSchema.methods.getFullName = function (name,email){
        return `${name} ${email}`
    }

itemSchema.methods =  {
            getCapName(name){
                return name.toUpperCase()
            },
            getEmailDomain(email){
                return email.split("@")[1]
            }
} 

const Item =  mongoose.model("Item",itemSchema)

module.exports = {Item}; 