var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
//routes
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/add", function (req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

$.post("/api/buy", function (req, res) {
  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Mm64088031!",
    database: "stocks_db"
  });
  connection.end();
  connection.query("SELECT * FROM user_owned;", function (err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.render("portfolio", {
      plans: data
});
  });
});
// use to post when they add to the database


//NEXT STEP: WORK on DATABASE that holds bought and sold shares