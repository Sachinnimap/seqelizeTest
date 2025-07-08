const express = require("express");
const {getProducts,getProduct,updateProduct,destroyProduct,createProduct} = require('./product.controller')
const {upload} = require("../../utils/uploads");
const { authHandler } = require("../../middleware/authHandler");
const { roleHandler } = require("../../middleware/roleHandler");
const router = express.Router();

router.route("/").get(authHandler,roleHandler, getProducts).post(authHandler,roleHandler,upload.single("image"),createProduct)
// post(upload.array("image",5),createProduct)
// post (upload.fields([
//     {name : 'image',maxCount: 5},
//     {name : "profile",maxCount: 10}
// ]))
router.route("/:id").get(authHandler,roleHandler,getProduct).put(authHandler,roleHandler,updateProduct).delete(authHandler,roleHandler,destroyProduct)


module.exports = router;

// router.post("/",upload.single("image"),createProduct)
// router.post("/",upload.array("image",5))
// router.post("/",upload.field([
//     {name : "profileImage",maxCount : 5},
//     {name : "userImage",maxCount:5}
// ]))