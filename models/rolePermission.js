

module.exports = (sequelize,DataTypes)=>{

const rolePermission = sequelize.define("role_permissions",{
    role_id:{
        type : DataTypes.INTEGER
    },
    permission_id : {
        type : DataTypes.INTEGER
    }
},
{
    timestamps : true,
    
})

return rolePermission;
}