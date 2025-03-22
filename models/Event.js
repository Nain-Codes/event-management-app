const db = require('../database.js');

class Event {
    static getAll(callback) {
        db.all('SELECT * FROM events', callback);
    }

    static getById(id, callback) {
        db.get('SELECT * FROM events WHERE id = ?', [id], callback);
    }

    static create(event, callback) {
        const { title, description, date, time, location } = event;
        db.run(
            'INSERT INTO events (title, description, date, time, location) VALUES (?, ?, ?, ?, ?)',
            [title, description, date, time, location],
            callback
        );
    }

    static update(id, event, callback) {
        const { title, description, date, time, location } = event;
        db.run(
            'UPDATE events SET title = ?, description = ?, date = ?, time = ?, location = ? WHERE id = ?',
            [title, description, date, time, location, id],
            callback
        );
    }

    static delete(id, callback) {
        db.run('DELETE FROM events WHERE id = ?', [id], callback);
    }
}

module.exports = Event;