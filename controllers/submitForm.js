const { messages } = require('../controllers/getMessagesController')

exports.handleSubmit = (req, res, next) =>{
    messages.push({user: req.body.name, text: req.body.message, added: new Date()})
    console.log(messages)
    res.redirect('/')
}