require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  res.write("testing my api").res.end();
});

app.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});
