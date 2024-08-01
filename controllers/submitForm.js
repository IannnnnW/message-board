const db = require("../db/queries")
const asyncHandler = require("express-async-handler")

exports.handleSubmit = asyncHandler( async (req, res) =>{
    const message = { text: req.body.message, name: req.body.name }
    await db.insertNewMessage(message)
    res.redirect('/')
})