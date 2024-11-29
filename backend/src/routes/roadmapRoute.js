const express = require('express');
const router = express.Router();
const pool = require('../db_connection');


// Fetch all roadmaps
router.get('/', async (req, res) => {
  console.log('Fetching all roadmaps...');
  try {
    const result = await pool.query('SELECT * FROM roadmaps');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching roadmaps:', err);
    res.status(500).json({ error: 'Failed to fetch roadmaps' });
  }
});



 //Fetch steps for a specific roadmap
router.get('/:roadmap_id/steps', async (req, res) => {
  const { roadmap_id } = req.params;
  console.log(`Fetching steps for roadmap ID: ${roadmap_id}`);
  try {
    const result = await pool.query(
      'SELECT * FROM steps WHERE roadmap_id = $1 ORDER BY step_order ASC',
      [roadmap_id]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(`Error fetching steps for roadmap ${roadmap_id}:`, err);
    res.status(500).json({ error: 'Failed to fetch steps' });
  }
});




//Mark a step as complete/incomplete
router.post('/steps/:step_id/complete', async (req, res) => {
  const { step_id } = req.params;
  const { completed } = req.body;

  try {
    await pool.query(
      'UPDATE steps SET completed = $1 WHERE step_id = $2',
      [completed, step_id]
    );
    res.status(200).json({ message: 'Step updated successfully' });
  } catch (err) {
    console.error(`Error updating step ${step_id}:`, err);
    res.status(500).json({ error: 'Failed to update step' });
  }
});


module.exports = router;