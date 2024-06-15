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

