const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

console.log('DB_USER from .env:', process.env.DB_USER);

const app = express();
app.use(cors());
app.use(express.json());

// Route setup
const messageRoutes = require('./src/routes/messageRoutes');
app.use('/api/messages', messageRoutes);

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
