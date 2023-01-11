import {AppDataSource} from 'src/app-data-source';
import {User} from '../entity/User';

export const UserRepository = AppDataSource.getRepository(User);
