var express = require("express");
var router = express.Router();
router.use("/home", require(__dirname + "/user/homecontroller"));
router.use("/products", require(__dirname + "/user/productcontroller"));
router.use("/shop", require(__dirname + "/user/shopcontroller"));
router.use("/vegetables", require(__dirname + "/user/vegetablescontroller"));
router.use("/abouts", require(__dirname + "/user/aboutcontroller"));
router.use("/contacts", require(__dirname + "/user/contactcontroller"));


router.get("/", function(req,res){
    //res.json({"message": "this is index page"});
    res.render("index.ejs" ,{currentPage : ""});
});
module.exports = router;
