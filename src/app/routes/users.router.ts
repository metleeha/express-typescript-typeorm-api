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
router.get('/:user_id/articles', async (req: Request, res: Response) => {
    await controller.getArticlesByUserId(req, res)
})
router.post('/:user_id/articles', async (req: Request, res: Response) => {
    await controller.createArticle(req, res)
})
router.delete('/:user_id/articles', async (req: Request, res: Response) => {
    await controller.deleteArticlesByUserId(req, res)
})

router.put('/:user_id/articles/:article_id', async (req: Request, res: Response) => {
    await controller.updateArticleById(req, res)
})
router.delete('/:user_id/articles/:article_id', async (req: Request, res: Response) => {
    await controller.deleteArticleById(req, res)
})

router.get('/:user_id/articles/:article_id/pictures', async (req: Request, res: Response) => {
    await controller.getPicturesByArticleId(req, res)
})
router.post('/:user_id/articles/:article_id/pictures', async (req: Request, res: Response) => {
    await controller.createPicture(req, res)
})
router.delete('/:user_id/articles/:article_id/pictures', async (req: Request, res: Response) => {
    await controller.deletePicturesByArticleId(req, res)
})

export const usersRouter: Router = router;