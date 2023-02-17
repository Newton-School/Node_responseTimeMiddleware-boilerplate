const express = require("express");
const responseTime = require("response-time");
const app = express();

app.use(express.json());
app.use(responseTime());

app.get("/", function (req, res) {
  res.send("Checing response time");
});

module.exports = app;
