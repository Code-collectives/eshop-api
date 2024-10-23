

import express from 'express';
import { register, signIn } from '../controllers/user.js';

const router = express.Router();

// User routes
router.post('users/register', register);
router.post('users/signIn', signIn);
router.get('users/me', isAuthenticated, hasPermission('get_profile'), getProfile);
router.patch('users/me', isAuthenticated, hasPermission('update_profile'), updateProfile);
router.post('/users/logout', isAuthenticated,logoutUser);


export default router;
