// models/user.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// Definisi tabel "users"
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }

}, {
  tableName: 'users',
  timestamps: false // createdAt & updatedAt otomatis
});

module.exports = User;
