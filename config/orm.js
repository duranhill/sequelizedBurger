var connection = require("./connection.js");




var orm = {
  all: function(cb) {
    var queryString = "SELECT * FROM bugerlogger";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
}


module.exports = orm;