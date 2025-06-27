const express =  require("express")
const {getBooks,createBook, getBooksById,updateBook,deleteBook} =  require("./book.controller")

const router = express.Router()

router.route("/").get(getBooks).post(createBook)
router.route("/:id").get(getBooksById).put(updateBook).delete(deleteBook)


module.exports = router;