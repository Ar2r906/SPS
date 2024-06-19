const { event } = require('../models/event');
const { user } = require('../models/users');

exports.getEvents = async (req, res) => {
    try {
        const events = await event.findAll();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getEventsRegistration = async (req, res) => {
    try {
        const id = req.params.id;
        const EventsRegistration = await event.findByPk(id);
        if (EventsRegistration) {
            res.json(EventsRegistration);
        } else {
            res.status(404).json({ message: 'Event not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};