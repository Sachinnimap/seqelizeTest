const express =  require("express");
const {getItems,createItem,updateItem,deleteItem,getItemsByRoles} = require("../item/item.controller")
const router =  express.Router();

router.route("/").get(getItems).post(createItem)
router.route("/:id").put(updateItem).delete(deleteItem)
router.route("/itemsbyroles").get(getItemsByRoles)
router.route("/")


module.exports = router;