const messageModel = require('../models/messageModel');

async function fetchMessages(page = 1, pageSize = 10) {
    const offset = (page - 1) * pageSize;
    return await messageModel.getMessages(pageSize, offset);
}

async function createMessages(name,message){
    //Some custom validation since its not described in the tas
    if (!name || !message || name.length > 50 || message.length > 1000) {
        throw new Error("Invalid input");
    }

    return await messageModel.addMessage(name.trim(), message.trim());
}

module.exports = {
    fetchMessages,
    createMessages
};
