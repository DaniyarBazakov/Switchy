const express = require('express');
const router = express.Router();
const pool = require('../db_connection');

// Route to get all users
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error('Error querying the database:', err);
    res.status(500).send('Server error');
  }
});

// Route to get a specific user by ID
router.get('/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const result = await pool.query('SELECT * FROM users WHERE user_id = $1', [userId]);
    if (result.rows.length === 0) {
      return res.status(404).send('User not found');
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error querying the database:', err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
