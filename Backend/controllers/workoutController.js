const { workout } = require('../models/workout');
const { user } = require('../models/users');

exports.getWorkouts = async (req, res) => {
    try {
        // const workouts = await workout.findAll({ where: { UserId: req.user.id } });
        const workouts = await workout.findAll();
        res.json(workouts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.createWorkout = async (req, res) => {
    try {
      const { date, time, duration, title, complexity } = req.body;
      const newWorkout = await workout.create({ date, time, duration, title, complexity });
      res.status(201).json(newWorkout);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

exports.deleteWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await workout.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: 'Тренировка удалена.' });
    } else {
      res.status(404).json({ message: 'Тренировка не найдена.' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};