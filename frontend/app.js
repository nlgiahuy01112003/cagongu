var express = require("express");
var app = express();
app.set("views",__dirname + "/cagongu/frontend/views");
app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/public"));
var controller = require(__dirname  + "/../backend/controllers");
app.use(controller);
var client = app.listen(3001, function(){
  console.log("client is running on port 3001");
});
