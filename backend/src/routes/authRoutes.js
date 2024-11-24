const express = require('express');
const router = express.Router();
const pool = require('../db_connection');

// POST /api/login (to authenticate users)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user in the database by email
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    // If the user does not exist
    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user = result.rows[0];

    // Check if the provided password matches the one in the database
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Return user data
    res.status(200).json({ 
      message: 'Login successful', 
      user: { userId: user.user_id, email: user.email, name: user.name }
    });

  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
