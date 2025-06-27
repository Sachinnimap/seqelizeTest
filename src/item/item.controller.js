const {Item} = require("../../models/mongooseModels/item")

const getItems = async (req,res)=>{
    const response =  await Item.find();
    res.status(200).json(response);
}


const createItem = async(req,res)=>{
    const {itemName,price,address,email} =  req.body;

    const response =  await Item.create({itemName,price,address,email})

    return res.status(201).json(response)
}


module.exports =  {getItems,createItem};