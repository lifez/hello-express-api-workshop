var sqlite3 = require('better-sqlite3').verbose();
var db = new sqlite3.Database("./db.sqlite")
db.run("CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY, title TEXT, description TEXT)");


module.exports = db