const multer = require("multer")
const fs =  require('fs')
const path = require("path")

const storage = multer.diskStorage({
    destination : (req,file,cb) => {
        const dest  = "uploads"
        if(!fs.existsSync(dest)){
            fs.mkdirSync(dest)
        }
        cb(null,dest)
    },
    filename : (req,file,cb) => {
        console.log("originalName_",path.parse(file.originalname).name)
        console.log("ext_name_",file.filename)
        cb(null, `${path.parse(file.originalname).name}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const filter = (req,file,cb)=>{
        if(file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "application/pdf"){
            cb(null,true)
        }else{
            throw new Error("Invalid file type!")
        }
}


module.exports.upload = multer({storage : storage,fileFilter: filter})