const express = require('express');
const router = express.Router();
const pool = require('../db_connection');





//Mark a step as complete/incomplete
router.post('/:step_id/complete', async (req, res) => {
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