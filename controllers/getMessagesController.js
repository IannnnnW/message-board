const db = require("../db/queries")
const moment = require("moment")

const asyncHandler = require("express-async-handler")

exports.viewMessages = asyncHandler( async (req, res)=>{
    let messages =  await db.getAllMessages()
    res.render("index", {messages: messages.map(message => ({...message, added: moment(message.added).fromNow()})), title: 'Mini Messageboard'})
})