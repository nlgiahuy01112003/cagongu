var express = require("express");
const exphbs = require("express-handlebars");
var router = express.Router();
router.use("/admindashboard", require(__dirname + "/admin/admindashboardcontroller"));

router.get("/", function(req,res){
    //res.json({"message": "this is index page"});
    res.render("index.ejs" ,{currentPage : ""});
});
module.exports = router;
