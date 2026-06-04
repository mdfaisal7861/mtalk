require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jokeRoutes = require('./routes/jokeRoutes');

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/jokes', jokeRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    message: 'Joke Generator API is running',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ 
    message: 'Server error',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal Server Error'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🎭 Joke Generator API running on port ${PORT}`);
});