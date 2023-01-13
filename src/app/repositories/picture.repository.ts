import {AppDataSource} from '../../config/ormconfig';
import {Picture} from '../entities/Picture';

export const PictureRepository = AppDataSource.getRepository(Picture);
