const express =  require("express")
const {getBooks,createBook, getBooksById} =  require("./book.controller")

const router = express.Router()

router.route("/").get(getBooks).post(createBook)
router.route("/:id").get(getBooksById)


module.exports = router;