const { Permissions, RolePermission } = require("../models")

async function  roleHandler(req,res,next) {
    
    const method =  req.method
    const base_url =  req.baseUrl.split("/")[1]
    const path =  req.path
    const roleId = req?.user?.roleId

    console.log("role_id",roleId)

    const isValidPath =  await Permissions.findOne({where :{method,base_url,path}})
    
    if(!isValidPath) throw new Error("Invalid route!")
    
    console.log("permissionId" ,isValidPath.id)
    
    const isHasAccess =  await RolePermission.findOne({where :{role_id: +roleId, permission_id:isValidPath.id}})

    if(!isHasAccess) throw new Error("Access Denied!")

    next()

}


module.exports =  {roleHandler}