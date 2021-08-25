require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("./MealsApi/router");
const port = process.env.PORT || 3001;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Db connected Succecfully 💪`);
  })
  .catch((error) => {
    console.log("error while connecting");
  });

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send("working on my own api");
});

app.use("/variusMeal/api", path);

app.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});
