const express = require('express');
const router = express.Router();
const pool = require('../models/db');

// GET all appointments
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM appointments ORDER BY date ASC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

router.post('/', async (req, res) => {
  console.log("📩 Received POST /api/appointments"); // Log for debug
  const { patientId, doctorId, date, type } = req.body;

  try {
    await pool.query(
      'INSERT INTO appointments (patientId, doctorId, date, type) VALUES ($1, $2, $3, $4)',
      [patientId, doctorId, date, type]
    );
    res.json({ message: 'Appointment booked successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
