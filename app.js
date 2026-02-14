// app.js
const express = require('express');
require('dotenv').config();

const { sequelize, connectDB } = require('./config/database');
const userRoutes = require('./routes/user.routes');

const app = express();

// Middleware parser JSON
app.use(express.json());

const cors = require('cors');
app.use(cors());

// Routes
app.use('/users', userRoutes);

// Jalankan server + koneksi DB + sync tabel
async function start() {
  await connectDB();

  // Sync model -> tabel otomatis dibuat jika belum ada
  await sequelize.sync();

  app.listen(process.env.PORT, () => {
    console.log('Server running on port', process.env.PORT);
  });
}

start();
