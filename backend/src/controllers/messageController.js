const messageService = require('../services/messageService');

async function getMessages(req, res) {
    const page = parseInt(req.query.page) || 1;

    try {
        const messages = await messageService.fetchMessages(page);
        res.status(200).json(messages);
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    getMessages,
};
