const express = require('express');
const router = express.Router();
const User = require('../models/user');

// a. Get all users for getting all users and attributes 
router.get('/getusers', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// b. Get user by ID for getting all repositories for a specific id
router.get('/getuser/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// c.- Create new user for creating a new repository
router.post('/newuser', async (req, res) => {
  try {
    const { email, username } = req.body;
    const newUser = new User({ email, username });
    await newUser.save();
    res.status(201).send('User created');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// d.- Update user by ID for uddating a repository with username
router.put('/user/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      user.username = req.body.username;
      await user.save();
      res.status(200).send('User updated');
    } else {
      res.status(404).send('User not found');
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// e.- Delete user by ID, dor deleting repository with user name
router.delete('/user/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user) {
      res.status(200).send('User deleted');
    } else {
      res.status(404).send('User not found');
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Get random user
router.get('/getrandomuser', async (req, res) => {
  try {
    const users = await User.find();
    const randomIndex = Math.floor(Math.random() * users.length);
    const randomUser = users[randomIndex];
    res.status(200).json(randomUser);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
