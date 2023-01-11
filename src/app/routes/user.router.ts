import express, {Router} from 'express';
import {getAllUsers, createUser} from '../controllers/user.controller';

const router: Router = express.Router();

router.get('/users', getAllUsers);
router.post('/users', createUser);

export const usersRouter: Router = router;