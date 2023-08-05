//define the routes and link them to the corresponding controller functions.

import express from 'express';
import { createUser, updateUser, getAllUsers } from './user.controller';

const router = express.Router();

router.post('/new', createUser);
router.post('/edit/:userId', updateUser);
router.get('/', getAllUsers);

export default router;