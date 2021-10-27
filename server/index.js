//package imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//module imports
const todos = require("./routes/todos");

//initialize express app
const app = express();

//connect to mongodb
mongoose
  .connect("mongodb://localhost:27017/todo-app")
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch(() => {
    console.log("Couldn't connect to MongoDB...");
  });

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api/todos", todos);

const port = 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
