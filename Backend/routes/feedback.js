const express = require('express')
const router = express.Router()
const feedback = require('../controllers/feedbacks')

router.post('/form', feedback.getFeedback)

module.exports = router