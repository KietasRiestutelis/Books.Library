const express = require("express");
const { get } = require("http");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const bookListRoutes = require("./routes/bookListRoutes");


const app = express();
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.options("/:id/:subID", cors());

app.use(express.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/users", bookListRoutes);

module.exports = app;
