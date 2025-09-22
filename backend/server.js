const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const expenseRoutes = require('./routes/expenses');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/expenses', expenseRoutes);

const PORT = process.env.PORT || 8080;

async function start() {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // For dev: sync models
    app.listen(PORT, () => console.log('Server running on', PORT));
  } catch (err) {
    console.error('DB connect error', err);
    process.exit(1);
  }
}

start();
