// src/index.js

require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });       // Must be the very first line

const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();              // Connect to DB first

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
};

startServer();