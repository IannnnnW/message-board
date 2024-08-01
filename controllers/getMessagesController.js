const db = require("../db/queries")
const asyncHandler = require("express-async-handler")

exports.viewMessages = asyncHandler( async (req, res)=>{
    const messages =  await db.getAllMessages()
    res.render("index", {messages, title: 'Mini Messageboard'})
})