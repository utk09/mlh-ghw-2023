const express = require("express");
const cors = require("cors");
const port = 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/mynewroute", (req, res) => {
  res.send("UT in GHW!!!!!!");
});

app.get("/mynewroute2", (req, res) => {
  res.send("MLH GHW!!!!!!");
});

app.listen(port, () => {
  console.log(`Server live on port ${port}`);
});
