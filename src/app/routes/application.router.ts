import express, {Router} from 'express';
import { articlesRouter } from './articles.router';
import { picturesRouter } from './pictures.router';
import { usersRouter } from './users.router';

const router: Router = express.Router();
router.use('/users', usersRouter);
router.use('/articles', articlesRouter);
router.use('/pictures', picturesRouter);

export const applicationRouter: Router = router;
