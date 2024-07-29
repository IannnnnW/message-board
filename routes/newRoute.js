const express = require('express')
const { route } = require('./indexRoute')
const router = express.Router()

const form = require('../controllers/getForm')
const submit = require('../controllers/submitForm')

router.get("/create-message", form.returnForm)
router.post("/submit-message", submit.handleSubmit)

module.exports = router