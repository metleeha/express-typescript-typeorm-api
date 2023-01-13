import {Request, Response} from 'express';
import {UserRepository} from '../repositories';
import {ArticleRepository} from '../repositories';

export class UserController {
    // * GET
    // * /users
    async getAllUsers(req: Request, res: Response): Promise<any> {
        const users = await UserRepository.find()
        res.json(users)
    }
    // * POST
    // * /users
    async createUser(req: Request, res: Response): Promise<any> {
        const user = await UserRepository.create(req.body)
        const results = await UserRepository.save(user)
        return res.send(results)
    }
    // * GET
    // */users/:user_id/articles
    async getArticlesByUserId(req: Request, res: Response): Promise<any> {
        const userId = req.params.user_id
        try {
            const user = await UserRepository.findOne({
                where: {
                    id: Number(userId)
                },
                relations: ['articles']
            })
            if(!user) {
                res.status(404).json({ error: 'user가 존재하지 않습니다.'})
                return
            }

            const results = user.articles
            res.status(200).json(results)
        } catch (err) {
            res.status(500).json({ error: err })
        }
    }
    // * POST
    // * /users/:user_id/articles
    async createArticle(req: Request, res: Response): Promise<any> {
        const userId = req.params.user_id
        const { name } = req.body
        try {
            const user = await UserRepository.findOne({
                where: {
                    id: Number(userId)
                },
                relations: ['articles']
            })
            if(!user) {
                res.status(404).json({ error: 'user가 존재하지 않습니다.'})
                return
            }

            const article = await ArticleRepository.create()
            article.name = name
            article.user = user 
            const results = await ArticleRepository.save(article)
            res.status(200).json(results)
        } catch (err) {
            res.status(500).json({ error: err })
        }
    }
    // * DELETE
    // * /users/:user_id/articles
    async deleteArticlesByUserId(req: Request, res: Response): Promise<any> {
        const userId = req.params.user_id
        try {
            const user = await UserRepository.findOne({
                where: {
                    id: Number(userId)
                },
                relations: ['articles']
            })
            if(!user) {
                res.status(404).json({ error: 'user가 존재하지 않습니다.'})
                return
            }
            user.articles = [];
            const results = await UserRepository.save(user)

            res.status(200).json(results)
        } catch (err) {
            res.status(500).json({ error: err })
        }
    }
    // * PUT
    // * /users/:user_id/articles/:article_id
    async updateArticleById(req: Request, res: Response): Promise<any> {
        const userId = req.params.user_id
        const articleId = req.params.article_id
        const { name } = req.body
        try {
            const user = await UserRepository.findOne({
                where: {
                    id: Number(userId)
                },
                relations: ['articles']
            })
            if(!user) {
                res.status(404).json({ error: 'user가 존재하지 않습니다.'})
                return
            }
            const putResult = await ArticleRepository.createQueryBuilder()
            .update()
            .set({ name: name, user: user})
            .where('id = :id', { id: articleId })
            .execute()

            res.status(200).json(putResult)
        } catch (err) {
            res.status(500).json({ error: err })
        }
    }
    // * DELETE
    // * /users/:user_id/articles/:article_id
    async deleteArticleById(req: Request, res: Response): Promise<any> {
        const articleId = req.params.article_id
        try {
            const deleteResult = await ArticleRepository.delete(articleId)
            // const deleteResult = await ArticleRepository.createQueryBuilder()
            // .delete()
            // .from(Article)
            // .where('id = :id', { id: articleId })
            // .execute()
            if (deleteResult.affected === 1) {
                res.sendStatus(200);
            } else {
                res.status(404).json({ error: '해당 article이 존재하지 않습니다.'})
            }
        } catch (err) {
            res.status(500).json({ error: err })
        }
    }
}