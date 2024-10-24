

import express from 'express';
import { getProfile, registerUser, signInUser, updateProfile } from '../controllers/user.js';
import { hasPermission, isAuthenticated } from '../middlewares/auth.js';

const userRouter = express.Router();

// User routes

userRouter.get( '/users/me', isAuthenticated, hasPermission('get_profile'), getProfile);
userRouter.patch( '/users/me', isAuthenticated, hasPermission('update_profile'), updateProfile)



export default userRouter;
