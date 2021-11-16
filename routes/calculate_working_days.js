
const { time } = require('../controllers/working_days_controller')
const express = require('express')
const router=express.Router()

router.post('/',time);

module.exports = router