const { team } = require('../models/team');
const { user } = require('../models/users');

exports.getTeams = async (req, res) => {
    try {
        const teams = await team.findAll();
        res.json(teams);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createTeam = async (req, res) => {
    try {
      const { nameTeam } = req.body;
      const newTeam = await team.create({ nameTeam });
      res.status(201).json(newTeam);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };