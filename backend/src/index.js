// Load environment variables from .env file
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const usersRouter = require('./routes/userRoute');
const postsRouter = require('./routes/postRoute');
const roadmapRouter = require('./routes/roadmapRoute');
const stepRouter = require('./routes/stepRoute');
const authRouter = require('./routes/authRoutes');
const app = express();
app.use(cors());
app.use(express.json());

// Use the routes
app.use('/api/posts', postsRouter);
app.use('/api/roadmaps',roadmapRouter);
app.use('/api/steps',stepRouter);

//user profile routes
app.use('/api/users', usersRouter);
app.use('/api', authRouter);

// Start the Express server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});