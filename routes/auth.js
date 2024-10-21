// routes/auth.mjs
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';


const router = express.Router();

// Signup
router.post('/signup', async (req, res, next) => {
  const { username, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword, role });

  try {
    await user.save();
    res.status(201).send('User created successfully.');
  } catch (error) {
    res.status(400).send('Error creating user.');
  }
});

// Login
router.post('/login', async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(400).send('Invalid username or password.');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send('Invalid username or password.');

  const token = jwt.sign({ _id: user._id, role: user.role }, config.jwtSecret);
  res.send({ token });
});

export default router;
