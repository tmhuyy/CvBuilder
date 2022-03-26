const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

// TODO set up the mysql connection
const app = express();
// TODO set up the environment
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

// TODO set up the path
app.get("/", function (req, res) {
    res.render("home_page");
});
app.listen(3000, function () {
    console.log("On port 3000");
});
