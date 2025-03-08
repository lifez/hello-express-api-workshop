const { DatabaseSync } = require('node:sqlite');


const db = new DatabaseSync('books.db');

db.exec(
  "CREATE TABLE IF NOT EXISTS models (id INTEGER PRIMARY KEY, title TEXT, owner TEXT)"
);

module.exports = db;
