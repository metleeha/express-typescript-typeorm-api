import {Request, Response} from 'express';
import {UserRepository} from '../repositories';

// * GET
// * /users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserRepository.find();

    if (users.length === 0) {
      res.status(404).json({error: 'users가 존재하지 않습니다.'});
      return;
    } else {
      res.status(200).json(users);
    }
  } catch (err) {
    res.status(500).json({error: err});
  }
};

// * POST
// * /users
export const createUser = async (req: Request, res: Response) => {
  const {name} = req.body;
  try {
    const userName = await UserRepository.findOneBy({name: name});
    if (userName) {
      res.status(409).json('이미 가입한 유저입니다');
    } else {
      const user = await UserRepository.create(req.body);
      const results = await UserRepository.save(user);
      res.send(results).status(200).json('유저 등록이 완료되었습니다');
    }
  } catch (err) {
    res.status(500).json({error: err});
  }
};
