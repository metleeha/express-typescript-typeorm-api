import express, {Router, Request, Response} from 'express';
import { PictureController } from '../controllers';

const router: Router = express.Router();
const controller: PictureController = new PictureController();

router.get('/', async (req: Request, res: Response) => {
    await controller.getAllPictures(req, res);
});

export const picturesRouter: Router = router;