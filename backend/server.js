const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ideaRoutes = require('./routes/ideaRoutes');
const userRoutes = require('./routes/userRoutes');
const errorHandler  = require('./middleware/errorHandler');
const connectDB = require('./config/db'); // DB connection file

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api/idea', ideaRoutes);
app.use('/api/auth', userRoutes); // changed from /api/user to /api/auth

// Error Handler Middleware
app.use(errorHandler);

// Port
const PORT = 5000;

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
