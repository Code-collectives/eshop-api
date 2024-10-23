

import express from 'express';
import { register, signIn } from '../controllers/user.js';

const router = express.Router();

// User routes
router.post('/register', register);
router.post('/signIn', signIn);


export default router;
