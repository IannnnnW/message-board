const Pool = require("./pool")

async function getAllMessages(){
    const { rows } = await Pool.query(`SELECT * FROM messages`);
    return rows
}

async function insertNewMessage(message){
    await Pool.query(`INSERT INTO messages (text, name) VALUES ($1, $2)`, [message.text, message.name])
}

module.exports = {
    getAllMessages,
    insertNewMessage
}