// Load environment variables from .env file
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const usersRouter = require('./routes/userRoute');
const postsRouter = require('./routes/postRoute');

const app = express();
app.use(cors());
app.use(express.json());

// Use the routes
app.use('/api/posts', postsRouter);

//user profile routes
app.use('/api/users', usersRouter);

// Start the Express server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});