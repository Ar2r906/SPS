const express = require('express')
const router = express.Router()
const feedback = require('../controllers/feedbacks')

router.get('/form', feedback.get_feedback_table)

module.exports = router