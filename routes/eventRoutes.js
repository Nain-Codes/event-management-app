const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/', eventController.getAllEvents);
router.post('/', eventController.createEvent);
router.post('/:id/update', eventController.updateEvent);
router.post('/:id/delete', eventController.deleteEvent);

module.exports = router;