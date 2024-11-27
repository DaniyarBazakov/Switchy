const express = require('express');
const router = express.Router();
const pool = require('../db_connection'); // Correct import for db connection

router.post('/', async (req, res) => {
  const {
    name,
    email,
    password,
    currentField,
    desiredField,
    skills,
    yearsExperience,
    location,
    socialMediaLink,
    image,
    bio,
    previousField,
    postContent,
  } = req.body;

  const client = await pool.connect();

  try {
    // Start a transaction
    await client.query('BEGIN');

    // Insert user into users table
    const userInsertQuery = `
      INSERT INTO users
      (name, email, password, current_field, desired_field, skills, experience, location, social_media_link, image, bio)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      RETURNING *;
    `;
    const userInsertValues = [
      name,
      email,
      password,
      currentField,
      desiredField,
      skills,
      yearsExperience,
      location,
      socialMediaLink,
      image,
      bio,
    ];
    const userResult = await client.query(userInsertQuery, userInsertValues);
    const user = userResult.rows[0]; // This is the full user data returned

    // Insert post into posts table
    const postInsertQuery = `
      INSERT INTO posts
      (user_id, content, created_at, field)
      VALUES ($1, $2, NOW(), $3);
    `;
    const postInsertValues = [user.user_id, postContent, previousField];
    await client.query(postInsertQuery, postInsertValues);

    // Commit the transaction
    await client.query('COMMIT');

    // Respond with the full user data
    res.status(201).json({
      message: 'User and post created successfully',
      user: { userId: user.user_id, email: user.email, name: user.name }
    });

  } catch (error) {
    // Rollback the transaction in case of an error
    await client.query('ROLLBACK');
    console.error('Error during user and post creation:', error);
    res.status(500).json({ error: 'Failed to create user and post' });
  } finally {
    client.release();
  }
});

module.exports = router;
