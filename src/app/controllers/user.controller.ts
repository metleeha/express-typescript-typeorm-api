import {Request, Response} from 'express';
import {UserRepository} from '../repositories';
import {ArticleRepository} from '../repositories';
import {Article} from '../entities';

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

}