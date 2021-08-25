require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 3001;
const cors = require("cors");
const path = require("./MealsApi/router");
const mongoose = require("mongoose");

const url = process.env.MONGODB_URI;
console.log(url);

mongoose.connect(
  "mongodb+srv://t62xbdtv8YyUmtj3:t62xbdtv8YyUmtj3@cluster0.zqyac.mongodb.net/MealDB?retryWrites=true&w=majority",
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

mongoose.connection
  .on("open", () => {
    console.log("database is connected successfully");
  })
  .once("error", () => {
    console.log("database failed to connect");
  });
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.status(200).send("working on my own api");
});

app.use("/variusMeal/api", path);

app.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});
