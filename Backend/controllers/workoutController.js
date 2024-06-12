const { workout } = require('../models/workout');
const { user } = require('../models/users');

exports.getWorkouts = async (req, res) => {
    try {
        const workouts = await workout.findAll({ where: { id: req.user.id } });
        res.json(workouts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createWorkout = async (req, res) => {
    const { title, time, duration, date, complexity } = req.body;
    try {
        const workout = await workout.create({ title, time, duration, date, complexity, id: req.user.id });
        res.status(201).json(workout);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};