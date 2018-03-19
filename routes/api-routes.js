var express = require("express");
var db = require("./models")

var router = express.Router();
var orm = require("../config/orm.js");


router.get("/", function(req, res) {
  res.render("index");
});

router.get("/bugers", function(req, res) {
  // express callback response by calling burger.selectAllBurger
 db.Burger.findAll().then(function(burgersWeFound) {
          console.log('these are our burgers', burgersWeFound);
    });
});


module.exports = router;