const express = require('express')
const router = express.Router()
const { authJwt, verifyToken } = require('../middlewares/auth')
const { getUserByUid } = require('../controllers/users')

router.get('/', [authJwt.verifyToken], getUserByUid)

module.exports = router