const express = require("express");

const {
  getAllBooks,
  getBookById,
  updateBookById,
  createBook,
} = require("./../controllers/booksListController");

const router = express.Router();

router.route("/allBooks").get(getAllBooks).post(createBook);
router.route("/book/:id").get(getBookById);
router.route("/:id/updateBook").patch(updateBookById);


module.exports = router;