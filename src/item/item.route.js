const express =  require("express");
const {getItems,createItem,updateItem,deleteItem} = require("../item/item.controller")
const router =  express.Router();

router.route("/").get(getItems).post(createItem)
route.route("/:id").put(updateItem).delete(deleteItem)


module.exports = router;