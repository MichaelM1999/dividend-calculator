var express = require("express");
var path = require("path");
const exphbs = require("express-handlebars");

var app = express();
var PORT = 3000;

app.use(express.static("public"));
//put into public folder so that js and css all serve;
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
//routes
app.get("/", function (req, res) {
  res.render(path.join(__dirname, "/views/index.handlebars"));
});

app.get("/add", function (req, res) {
  res.render(path.join(__dirname, "/views/portfolio.handlebars"));
});

app.post("/api/buy", function (req, res) {
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

    res.render("/views/portfolio.handlebars", {
      plans: data
});
  });
});
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

// use to post when they add to the database


//NEXT STEP: WORK on DATABASE that holds bought and sold shares