const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
// app.use('/api/users', require('./routes/user.routes'));

// Basic route

module.exports = app;