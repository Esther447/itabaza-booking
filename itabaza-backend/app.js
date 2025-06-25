const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const appointmentRoutes = require('./routes/appointments');

app.use(cors());
app.use(express.json());

app.use('/api/appointments', appointmentRoutes);

app.get('/', (req, res) => {
  res.send('🎉 Itabaza Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
