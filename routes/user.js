

import express from 'express';
import { registerUser, loginUser, logoutUser } from '../controllers/user.js';

const router = express.Router();

// User routes
router.post('/signup', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

export default router;
