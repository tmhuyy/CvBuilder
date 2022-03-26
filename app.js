const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
require("dotenv").config();
// TODO set up the mysql connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});
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
