const express = require('express')
const router = express.Router()

const getMessages = require("../controllers/getMessagesController")

router.get("/", getMessages.viewMessages)

module.exports = router