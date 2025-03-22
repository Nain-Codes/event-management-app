const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

// Create events table
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS events (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            date TEXT NOT NULL,
            time TEXT NOT NULL,
            location TEXT NOT NULL
        )
    `);
});

module.exports = db;