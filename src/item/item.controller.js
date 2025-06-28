const {Item} = require("../../models/mongooseModels/item")

const getItems = async (req,res)=>{
    const response =  await Item.find();
    res.status(200).json(response);
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



module.exports =  {getItems,createItem,updateItem,deleteItem};