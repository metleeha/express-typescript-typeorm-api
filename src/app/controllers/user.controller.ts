import {Request, Response} from 'express';
import {UserRepository} from '../repositories';

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
        console.log(results)
        return res.send(results)
    }
}