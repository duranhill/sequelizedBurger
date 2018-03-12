var express = require("express");

var router = express.Router();
var orm = require("../config/orm.js");


router.get("/", function(req, res) {
  res.render("index");
});

router.get("/bugers", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  orm.all(function(bugerData) {
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    console.log('bugers we got from database!!!', bugerData);
    res.render("index", { buger_data: bugerData });
  });
});


module.exports = router;