const express = require('express')
const { route } = require('./indexRoute')
const router = express.Router()

const submit = require('../controllers/submitForm')

router.post("/submit-message", submit.handleSubmit)

module.exports = router