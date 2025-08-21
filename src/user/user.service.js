const { User, Product, sequelize } = require("../../models")
const bycrypt =  require("bcrypt")
const  {Op,Sequelize}  =  require("sequelize")


async function getAllUsers(query){

    'dkf'.charAt()

//         console.log("params:-",query)
//         console.log("params.username",query.username)
// throw new Error("latest error found")
    return await User.findAll({

                attributes : ['first_name','last_name', [Sequelize.literal('(select Max(role) from user)'),'totolUsers']],
                // where : Sequelize.literal('role < 5 and last_name = "last"')
                order : [['first_name',"DESC"],['last_name',"DESC"]],
                where : Sequelize.where(Sequelize.col("role"), Op.eq, 5)
                // attributes : ['first_name',[Sequelize.literal('(select COUNT(*) from user)'),'total']]

                // attributes : [[Sequelize.fn("CONCAT", sequelize.col('first_name')," ",sequelize.col('last_name')),"name"],[sequelize.fn("MAX",sequelize.col("role")),"max_role"]],
                // group : ['name'],
                // where : {
                //     first_name : {
                //         [Op.like] : "firs%"
                //     }
                
                // },
                // having  : {
                //     max_role : {[Op.gt] : 4 }
                // }
            // attributes:['first_name',[Sequelize.fn('COUNT',Sequelize.col('id')),'data']],

            // group : ['first_name']
        // include : [
        //     {
        //         model  :Product,
        //         as : "product"
        //     }
        // ]
        // where : {
        //     id : [1,4,16]

            //  where : {
            // id : {
            //   [Op.in]  : [1,4,5,16]
            // }
            // username  : {
            //     // [Op.startsWith] : query.username,
            //     // [Op.endsWith] : query.username
            //     // [Op.like]  : `%${query.username}`
            //     //[Op.like]  : `%${query.username}%`

            // }
        // }
    })
}

async function getUsersById(userId){

        await findOrCreate({where : {
            id : userId
        }})
        
    return await User.findOne({
        // include :[
        //     {
        //         model  : Product,
        //         as : "product"
        //     }
        // ],
        where : {id : userId}
    })
}

async function addUser(data){
   
    console.log("service-data",data)

    const {username,password,email,firstName,lastName,role,mobileNumber} = data;


    const hassPassword = await bycrypt.hash(password,10)

    console.log("HassPassword:-",hassPassword)

     await User.create({username,password : hassPassword,email,firstName,lastName,role,mobileNumber})
    return null
}

async function modifyUser(userId,data){
   const [response] =   await User.update(data,{where:{id : userId}})
   if(response == 0) throw new Error("User not updated!")
    return null
}

async function deleteUser(userId){

    await User.increment({stock : 5},{where : {id : 5}}) 

    //paranoid true - it will store data in db but  as deletedAt = true
     await User.delete(userId)
     return null
}

async function Increment(userId){

    //increment role - integer BY 5
    await User.increment({role : 5},{where : {id : 5}}) 


     return null 
}


module.exports = {getAllUsers,getUsersById,addUser,modifyUser,deleteUser,Increment}