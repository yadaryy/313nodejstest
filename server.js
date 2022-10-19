const express = require('express');
const app = express();
const path = require('path');
const router= express.Router();
const session = require("express-session");

app.use("/api", require("./src/middlewares/api"));
app.use("/view", require("./src/middlewares/view"));

const port = 5005;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});