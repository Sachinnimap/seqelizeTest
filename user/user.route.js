const express =  require("express")
const { getUser,getUsers,updateUser,destroyUser,createUser } = require("./user.controller")
const router =  express.Router()


router.route("/").get(getUsers).post( createUser) //check image file if true!
router.route("/:id").get(getUser).put(updateUser).delete(destroyUser)

module.exports = router