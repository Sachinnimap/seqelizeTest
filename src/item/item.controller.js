const {Item} = require("../../models/mongooseModels/item")

const getItems = async (req,res)=>{
    const response =  await Item.find();
    const itemData = response[0].getFullName(response[0].itemName, response[0].email);
    console.log("ItemData",itemData)
    const nameCap =  response[0].getCapName(response[0].itemName)
    console.log("capital_name",nameCap)
    const emailDomain =  response[0].getEmailDomain(response[0].email)
    console.log("emailDomain_",emailDomain)
    res.status(200).json(response);
}

const getItemsByRoles = async(req,res)=>{
    const response = await Item.findByRole();
    console.log(response)
    res.status(200).json(response)
}

const getItemsByPrice =  async(req,res)=>{
    const response = await Item.findByPrice()
    console.log("response",response)
    res.status(200).json(response)
}
const createItem = async(req,res)=>{
    const {itemName,price,address,email,role,status} =  req.body;

    const response =  await Item.create({itemName,price,address,email,role,status})

    return res.status(201).json(response)
}


const updateItem =  async(req,res)=>{
    const {itemName,price,address,email,role,status} =  req.body;

    const response =  await Item.findOneAndUpdate({itemName,price,address,email,role,status},{runValidator:true})

    return res.status(201).json(response)
}

const deleteItem =  async(req,res)=>{
    const id = req.params.id;

    const response =  await Item.findOneAndDelete({_id: id})

    return res.status(201).json(response)
}



module.exports =  {getItems,createItem,getItemsByRoles,updateItem,deleteItem,getItemsByPrice};