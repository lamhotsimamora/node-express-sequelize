// controllers/user.controller.js
const User = require('../models/user');


// =============================
// CREATE
// =============================
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json({ message: 'User created', data: user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// =============================
// READ ALL
// =============================
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// =============================
// READ BY ID
// =============================
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// =============================
// UPDATE
// =============================
exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;

    const [updated] = await User.update(req.body, {
      where: { id }
    });

    if (!updated) {
      return res.status(404).json({ message: 'User not found' });
    }

    const updatedUser = await User.findByPk(id);
    res.json({ message: 'User updated', data: updatedUser });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// =============================
// DELETE
// =============================
exports.deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { id: req.params.id }
    });

    if (!deleted) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User deleted' });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
