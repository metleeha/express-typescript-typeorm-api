import {Request, Response} from 'express';
import {ArticleRepository} from '../repositories';

export class ArticleController {
    // * GET
    // * /articles
    async getAllArticles(req: Request, res: Response): Promise<any> {
        const articles = await ArticleRepository.find({
            relations: {
                user: true,
                pictures: true
            }
        })
        res.json(articles)
    }
    // * DELETE
    // * /articles
    async deleteAllArticles(req: Request, res: Response): Promise<any> {
        const articles = await ArticleRepository.createQueryBuilder()
        .delete()
        .execute()
        res.json(articles)
    }
}