var express = require("express");
var router = express.Router();


router.get("/", function(req,res){
    res.render("index.ejs");      
    
});
router.get("/user", function(req,res){
     res.render("admin/userManage");                                                                                                           
 });
module.exports = router;
