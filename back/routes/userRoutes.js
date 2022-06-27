const express = require("express");
// const { protect } = require("../controllers/authController");

const {
  getAllUsers,
  getUserById,
  getAllUserBooks,
  createUserBook,
  findBookAndUpdate,
  findBookAndDelete,
  createUser,
  getEmail,
  loginUser,
} = require("./../controllers/userController");

const router = express.Router();

// apsaugotas routas
router.route("/").get(getAllUsers);
router.route("/register").post(createUser);
router.route("/email").get(getEmail);
router.route("/login").post(loginUser);
router.route("/:id").get(getUserById);

router.route("/:id/books/upd/:subID").patch(findBookAndUpdate);
router.route("/:id/books/dlt/:subID").patch(findBookAndDelete);
router.route("/:id/books").get(getAllUserBooks).post(createUserBook);

module.exports = router;
