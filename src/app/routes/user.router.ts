import express, {Router, Request, Response} from 'express';
import { UserController } from '../controllers';

const router: Router = express.Router();
const controller: UserController = new UserController();

router.get('/', async (req: Request, res: Response) => {
    await controller.getAllUsers(req, res);
});
router.post('/', async (req: Request, res: Response) => {
    await controller.createUser(req, res)
});

export const usersRouter: Router = router;