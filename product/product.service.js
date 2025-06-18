const {ProductModel} = require("../models")

 async function getAllProducts () {
        return await ProductModel.findAll()
}

async function getProductById(productId){
                return await ProductModel.findOne({where: {id : productId}})
}

async function addProduct(data){
        const {name,type,desc,price,outOfStock,country,manufacturedBy,image,mobileNumber} = data;
        await ProductModel.create({name,type,desc,price,outOfStock,country,manufacturedBy,image,mobileNumber})
        return null
}

async function modifyProduct(productId,data){
                        const [response] = await ProductModel.update(data,{
                                where : {
                                        id :productId
                                }
                        })
                        
                        if(response == 0) throw new Error("product not updated!")

                         return null
                
}

async function deleteProduct(productId){
                await ProductModel.destroy({where:{id : productId}})
                return null
}

module.exports =  {getAllProducts,getProductById,modifyProduct,deleteProduct,addProduct};