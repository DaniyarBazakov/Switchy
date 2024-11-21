const express = require('express');
const router = express.Router();
const pool = require('../db_connection');

// Get all users
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error('Error querying the database:', err);
    res.status(500).send('Server error');
  }
});

module.exports = router;