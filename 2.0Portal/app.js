const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  res.sendFile("");
});

app.listen(3000);
