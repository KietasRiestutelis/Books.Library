const AllBooks = require("./../models/booksModel");

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await AllBooks.find();
    res.status(200).json({
      status: "success",
      results: books.length,
      data: {
        books: books,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Get book by id
exports.getBookById = async (req, res) => {
    try {
      const book = await AllBooks.findById(req.params.id);
      res.status(200).json({
        status: "success",
        data: {
          book: book,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
   
  };

  //update book by id
  exports.updateBookById = async (req, res) => {
    try {
      const book = await AllBooks.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
  
      res.status(200).json({
        status: "success",
        data: {
          book: book,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  };

  // Create book
exports.createBook = async (req, res) => {
  
    try {
      const newBook = await AllBooks.create(req.body);
      res.status(201).json({
        status: "success",
        data: {
         book: newBook,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err,
      });
    }
  };