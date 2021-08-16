require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send("testing my own api");
});

app.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});
