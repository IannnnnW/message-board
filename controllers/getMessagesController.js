let messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello, World!",
        user: "Charles",
        added: new Date()
    }
]

function viewMessages(req, res, next) {
    res.render("index", {messages, title: 'Mini Messageboard'})
}

module.exports = {messages, viewMessages}