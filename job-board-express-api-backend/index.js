const express = require("express");
const cors = require("cors");
const port = 5000;
const jobRouter = require("./jobDataRouter");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/job", jobRouter);

app.listen(port, () => {
  console.log(`Server live on port ${port}`);
});
