const mongoose = require("mongoose");
const app = require("./app");

const DB =
  "mongodb+srv://Paulius:TLOPW6NWs7v3YCuR@cluster0.gjninb2.mongodb.net/Test?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("MongoDB connected");
  });

const port = 3005;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
