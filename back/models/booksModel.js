const mongoose = require("mongoose");

// DB schema
const allBooksSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: [true, "Restaurant name is required"],
  },
  category: {
    type: String,
  },
  author: {
    type: String
  },
  about: {
    type: String,
  },
  bookRealiseDate: {
    type: Date
  },
  date: {
    type: Date,
    default: Date.now,
  },
  date_created: {
    type: Date,
    default: Date.now,
    unmodifiable: true,
  },
  date_updated: {
    type: Date,
    default: Date.now,
  },
  
  
});

// ModelDb table name
const AllBooks = new mongoose.model("AllBooks", allBooksSchema);

// Duomenų siuntimas į DB
const testBooks= new AllBooks({
  bookName: "trecia knyga",
  category: "veiksmo",
  author: "Kas ten zino",
  about: "Tai veiksmo knyga",
  
});

// testBooks.save();

module.exports = AllBooks;