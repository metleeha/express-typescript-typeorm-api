import express, {Router, Request, Response} from 'express';
import { ArticleController } from '../controllers';

const router: Router = express.Router();
const controller: ArticleController = new ArticleController();

router.get('/', async (req: Request, res: Response) => {
    await controller.getAllArticles(req, res);
});

router.delete('/', async (req: Request, res: Response) => {
    await controller.deleteAllArticles(req, res);
});

export const articlesRouter: Router = router;