const express =  require("express");
const {getItems,createItem} = require("../item/item.controller")
const router =  express.Router();

router.route("/").get(getItems).post(createItem)


module.exports = router;