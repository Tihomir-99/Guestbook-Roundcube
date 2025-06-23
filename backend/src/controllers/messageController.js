const messageService = require('../services/messageService');

async function getMessages(req, res) {
    const page = parseInt(req.query.page) || 1;

    try {
        const messages = await messageService.fetchMessages(page);
        const nextPageMessages = await messageService.fetchMessages(page+1);
        const hasNextPage = nextPageMessages.length > 0;
        res.status(200).json({messages, hasNextPage});
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function postMessages(req,res) {

    const {name, message} = req.body;

    console.log(req.body);

    try{
        const id = await messageService.createMessages(name, message);
        res.status(201).json({message: 'Message posted successfully', id });
    } catch (error){
        console.error('Error posting message: ', error);
        res.status(400).json({ error: error.message || 'Failed to post message' });
    }
}

module.exports = {
    getMessages,
    postMessages
};
