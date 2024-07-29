const { messages } = require('../controllers/getMessagesController')

exports.handleSubmit = (req, res, next) =>{
    messages.push({user: req.body.name, message: req.body.message, added: new Date()})
    res.redirect('/')
}