const express = require("express");
//const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const routes = require("./controllers");
const PORT = process.env.PORT || 3000;

//const db = require("./models");

// Sets up the Express App
const app = express();

//app.use(logger("dev"));

//Body Parser Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
