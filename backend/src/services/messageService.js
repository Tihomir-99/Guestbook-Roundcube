const messageModel = require('../models/messageModel');

async function fetchMessages(page = 1, pageSize = 10) {
    const offset = (page - 1) * pageSize;
    return await messageModel.getMessages(pageSize, offset);
}

module.exports = {
    fetchMessages,
};
