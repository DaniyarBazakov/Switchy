// index.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Mock data
const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

// Endpoint to get users
app.get('/api/users', (req, res) => {
  res.json(mockUsers);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
