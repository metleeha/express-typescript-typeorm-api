import {Request, Response} from 'express';
import {PictureRepository} from '../repositories';

export class PictureController {
    // * GET
    // * /articles
    async getAllPictures(req: Request, res: Response): Promise<any> {
        const pictures = await PictureRepository.find({
            relations: {
                article: true
            }
        })
        res.json(pictures)
    }
}