const { Sequelize } = require(".");

// const TestUser =  sequelize.

const sequelize,Datatype = require("sequelize")

const TestUser =  sequelize.define("TestUser",{
    id : {
        type : Datatype.INTEGER,
        allowNull : false,
        unique : true,
        primary :true
    },
    username ; {
        type :  Datatype.STRING,
        allowNull : false,
    },
    email : {
        type : Datatype.STRING,
        unique :  true,
        validate ; validator(){
            isEmail : true
        },
    password : {
        type : Datatype.STRING,
        validator : validator(value){
                if(value.length !=6){
                    return false
                }
                return null
        }
    }
    }
})

sequelize.model("TestUser",TestUser)




module.export =  {TestUser} 

seqelize = ("TestUser",TestUser)


sequelize.Sync(sequelize)


const {TestUser} = require("TestModel");


const createTestUser = async(req,res)=>{
  const result = await TestUser.create({
    username ;'john_doe',
    email : 'john@example.com'
})
if(!result){
    res.status(400).json("test user not created")
}
console.log(result.id)
console.log(result.email)
res.status(201).json(result)
}






