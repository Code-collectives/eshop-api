

import express from 'express';
import { registerUser, signInUser } from '../controllers/user.js';

const userRouter = express.Router();

// User routes
userRouter.post('/users/register', registerUser);

userRouter.post('/users/signIn', signInUser);



export default userRouter;
