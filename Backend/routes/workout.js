const express = require('express');
const router = express.Router();
const { authJwt } = require('../middlewares/auth')
const { getWorkout, createWorkout } = require('../controllers/workout');


router.get('/', authJwt.verifyToken, getWorkout);
router.post('/', authJwt.verifyToken, authJwt.authorizate('coach', 'head-coach'), createWorkout);

module.exports = router;