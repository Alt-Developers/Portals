const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const route = require("./routes/main");
const { join } = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(route);
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
