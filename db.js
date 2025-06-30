const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./contacts.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS contacts (
    id TEXT PRIMARY KEY,
    name TEXT,
    address TEXT,
    email TEXT,
    phone TEXT,
    cell TEXT,
    registrationDate TEXT,
    age INTEGER,
    imageUrl TEXT,
    synced BOOLEAN
  )`);
});

module.exports = db;