//define the routes and link them to the corresponding controller functions.

import express from 'express';
import { createUser, updateUser, getAllUsers, getUserByEmail } from './user.controller';

const router = express.Router();

router.post('/users/new', createUser);
router.post('/users/edit/:userId', updateUser);
router.get('/', getAllUsers);
router.get('/users', getUserByEmail);

export default router;