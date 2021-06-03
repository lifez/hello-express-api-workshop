const Database = require('better-sqlite3')
const db = new Database("./db.sqlite")
db.exec("CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY, title TEXT, description TEXT)");


module.exports = db