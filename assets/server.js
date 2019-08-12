var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });

  $.post("/api/buy", function (req, res) {
    const connection = mysql.createConnection({
        host: "localhost",

        // Your port; if not 3306
        port: 3306,

        // Your username
        user: "root",

        // Your password
        password: "",
        database: "stocks_db"
    });

    connection.connect(function (err) {
        if (err) throw err;
        console.log("connected as id " + connection.threadId);
        connection.end();
    });
}); // use to post when they add to the database

  
//NEXT STEP: WORK on DATABASE that holds bought and sold shares