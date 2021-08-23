require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 3001;
const cors = require("cors");
const path = require("./MealsApi/router");
const mongoose = require("mongoose");
const MONGODB_URL =
  "mongodb+srv://t62xbdtv8YyUmtj3:t62xbdtv8YyUmtj3@cluster0.zqyac.mongodb.net/foodDB?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URL, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
