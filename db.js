var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test_mkm"
});

// db.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

module.exports = db;
