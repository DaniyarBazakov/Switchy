const express = require('express');
const router = express.Router();
const pool = require('../db_connection');

// Create a new post
router.post('/', async (req, res) => {
  const { user_id, content, field } = req.body;
  const created_at = new Date();

  try {
    const result = await pool.query(
      'INSERT INTO posts (user_id, content, created_at, field) VALUES ($1, $2, $3, $4) RETURNING *',
      [user_id, content, created_at, field]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error inserting post:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all posts
router.get('/', async (req, res) => {
  const { field } = req.query;

  try {
    let query = `
      SELECT 
        posts.post_id, 
        posts.created_at, 
        posts.content, 
        posts.field, 
        posts.user_id,
        users.name AS user 
      FROM posts 
      JOIN users ON posts.user_id = users.user_id
    `;
    const values = [];

    if (field) {
      query += ' WHERE posts.field = $1';
      values.push(field);
    }

    query += ' ORDER BY posts.created_at DESC';
    const result = await pool.query(query, values);
    res.json(result.rows);
  } catch (err) {
    console.error('Error querying the database:', err.message);
    res.status(500).send('Server error');
  }
});

// Endpoint to fetch distinct fields
router.get('/fields', async (req, res) => {
  try {
    const result = await pool.query('SELECT DISTINCT field FROM posts');
    const fields = result.rows.map(row => row.field);
    res.json(fields);
  } catch (error) {
    console.error('Error fetching distinct fields:', error.message);
    res.status(500).json({ error: 'Failed to fetch fields' });
  }
});


//Fetch Posts By ID
router.get('/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const result = await pool.query(`
      SELECT 
        posts.post_id, 
        posts.created_at, 
        posts.content, 
        posts.field, 
        posts.user_id,
        users.name AS user 
      FROM posts 
      JOIN users ON posts.user_id = users.user_id where posts.user_id = $1
      ORDER BY posts.created_at DESC
    `, [userId]);
    res.json(result.rows);
  } catch (err) {
    console.error('Error querying the database:', err);
    res.status(500).send('Server error');
  }
});
module.exports = router;