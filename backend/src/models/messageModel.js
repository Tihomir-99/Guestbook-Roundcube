const db = require('../config/db');

async function getMessages(limit = 10, offset = 0) {
    const [rows] = await db.query(
        'SELECT name, message, created_at FROM messages ORDER BY created_at DESC LIMIT ? OFFSET ?',
        [limit, offset]
    );
    return rows;
}

async function addMessage(name,message){
    const [result] = await db.query(
        `INSERT INTO messages (name,message)
        VALUES(?,?)
        `,
        [name,message]
    );
    return result.insertId;
}

module.exports = {
    getMessages,
    addMessage
};
