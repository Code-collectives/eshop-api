

import express from 'express';
import { getProfile, getUserAdverts, registerUser, signInUser, updateProfile } from '../controllers/user.js';
import { hasPermission, isAuthenticated } from '../middlewares/auth.js';

const userRouter = express.Router();

// User routes

userRouter.get( '/users/me', isAuthenticated, hasPermission('get_profile'), getProfile);

userRouter.get('/users/me/adverts', isAuthenticated, getUserAdverts);

userRouter.patch( '/users/me', isAuthenticated, hasPermission('update_profile'), updateProfile)

userRouter.post('/users/register', registerUser);

userRouter.post('/users/signIn', signInUser);




export default userRouter;
