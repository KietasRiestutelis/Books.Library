const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const booksSchema = mongoose.Schema(
  {
    name: { type: String, trim: true, maxLength: 50, required: true },
    category: { type: String },
    author: { type: String },
    date: { type: Date },
  },
  { timestamps: true }
);

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minLength: 2,
      maxLength: 12,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      // validate: [validator.isEmail, "Įveskite e-mail"],
    },
     address: {
      type: String,
      required: [true, "Adress is required"],
    },
      city: {
      type: String,
      required: [true, "City is required"],
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 8,
      maxLength: 100,
    },
    // passwordConfirm: {
    //   type: String,
    //   required: [true, "Pakartokite slaptažodį"],
    //   validate: {
    //     validator: function (el) {
    //       return el === this.password;
    //     },
    //     message: "Nesutampa slaptažodžiai",
    //   },
    // },

    books: [booksSchema],
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 8);

  // this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const Users = new mongoose.model("Users", userSchema);

const testUsers = new Users({
  name: "Jonas",
  email: "jonas@gmail.com",
  password: "Jonas123456",
  address: "Basanaviciaus g. 12",
  city: "Vilnius",
  books: [
    { name: "Pirma knyga", category: "Moksline literatūra",author: "Belekas", date: "2022-05-23" },
    { name: "Antra knyga", category: "Veiksmo",author: "Belekas", date: "2022-05-23" },
   
  ],
});

// testUsers.save();

module.exports = Users;
