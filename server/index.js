const express = require("express");
const bodyParser = require("body-parser");
const ProjectDB = require("./models/db.js");
const path = require("path");
const cors = require("cors");

const app = express();

// app.use(express.static(path.join(__dirname, "../build")));
app.use(bodyParser.json());
app.use(cors());

app.get("/", function(req, res) {
  ProjectDB.Project.find({})
    .limit(10)
    .then(data => {
      res.json(data);
    })
    .catch(err => console.log(err));
});

module.exports = app;
