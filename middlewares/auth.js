// middleware/auth.mjs
import jwt from 'jsonwebtoken';
import { config } from '../config.js';
import User from '../models/user.js';

export const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token.split(' ')[1], config.jwtSecret);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send('Invalid token.');
  }
};

export const authorize = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) return res.status(403).send('Forbidden.');
    next();
  };
};
