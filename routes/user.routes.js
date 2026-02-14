// routes/user.routes.js
const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');

// Mapping endpoint CRUD

router.post('/', userCtrl.createUser);       // CREATE
router.get('/', userCtrl.getAllUsers);       // READ ALL
router.get('/:id', userCtrl.getUserById);    // READ ONE
router.put('/:id', userCtrl.updateUser);     // UPDATE
router.delete('/:id', userCtrl.deleteUser);  // DELETE

module.exports = router;
