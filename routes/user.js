

import express from 'express';
import { registerUser, signInUser } from '../controllers/user.js';

const userRouter = express.Router();

// User routes
router.post('users/register', registerUser);
router.post('users/sign', signInUser);



export default userRouter;
