const { getProductById,getAllProducts,modifyProduct,deleteProduct,addProduct } = require("./product.service")


const getProducts = async(req,res) => {
    const response = await getAllProducts()
    return res.status(200).json(response)
}   

const getProduct = async(req,res) => {
    const productId = req.params.id 
    const response = await getProductById(productId)

    return res.status(200).json(response)
}

const createProduct = async(req,res) =>{
console.log("req.file",req.file)
console.log("req.body",req.body)
console.log("req.user",req.user) //we get user name from attach middleware

    const data = req.body
      await addProduct(data)
     return res.status(201).json("product created successfully")
}

const updateProduct = async(req,res)=>{
    const productId = req.params.id;
    const body = req.body;
     await modifyProduct(productId, body)

    return res.status(200).json('Product updated successfully')
}

const destroyProduct  = async(req,res)=>{
    const productId = req.params.id;
   await deleteProduct(productId)
    
    return res.json(200).json("Product deleted successfully")
}

module.exports = {getProduct,getProducts,updateProduct,destroyProduct,createProduct};