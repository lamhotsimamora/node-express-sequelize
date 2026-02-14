// config/database.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

// Inisialisasi koneksi Sequelize ke MySQL
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false // matikan log query SQL di console
  }
);

// Test koneksi database
async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
  } catch (err) {
    console.error('DB connection error:', err);
  }
}

module.exports = { sequelize, connectDB };
