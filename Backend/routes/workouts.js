const express = require('express');
const router = express.Router();
const { authJwt } = require('../middlewares/auth')
const { getWorkout, createWorkout } = require('../controllers/workoutController');

router.get('/', authJwt.verifyToken, getWorkout);
router.post('/', authJwt.verifyToken, authJwt.authorizate('coach', 'headcoach'), createWorkout);

module.exports = router;