const Event = require('../models/Event');

exports.getAllEvents = (req, res) => {
    Event.getAll((err, events) => {
        if (err) return res.status(500).send('Server error');
        res.render('events', { events });
    });
};

exports.createEvent = (req, res) => {
    const { title, description, date, time, location } = req.body;
    Event.create({ title, description, date, time, location }, (err) => {
        if (err) return res.status(500).send('Server error');
        res.redirect('/events');
    });
};

exports.updateEvent = (req, res) => {
    const { id } = req.params;
    const { title, description, date, time, location } = req.body;
    Event.update(id, { title, description, date, time, location }, (err) => {
        if (err) return res.status(500).send('Server error');
        res.redirect('/events');
    });
};

exports.deleteEvent = (req, res) => {
    const { id } = req.params;
    Event.delete(id, (err) => {
        if (err) return res.status(500).send('Server error');
        res.redirect('/events');
    });
};