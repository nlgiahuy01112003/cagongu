var express = require("express");
const exphbs = require("express-handlebars");
var app = express();
app.set("views",__dirname + "/views");
app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/public"));
var controller = require(__dirname  + "/controllers");
app.use(controller);
var client = app.listen(3001, function(){
  console.log("client is running on port 3001");
});
