const express = require("express");
const {getProducts,getProduct,updateProduct,destroyProduct,createProduct} = require('./product.controller')
const {upload} = require("../utils/uploads")
const router = express.Router();

router.route("/").get(getProducts).post(upload.single("image"),createProduct)
// post(upload.array("image",5),createProduct)
// post (upload.fields([
//     {name : 'image',maxCount: 5},
//     {name : "profile",maxCount: 10}
// ]))
router.route("/:id").get(getProduct).put(updateProduct).delete(destroyProduct)


module.exports = router;

// router.post("/",upload.single("image"),createProduct)
// router.post("/",upload.array("image",5))
// router.post("/",upload.field([
//     {name : "profileImage",maxCount : 5},
//     {name : "userImage",maxCount:5}
// ]))