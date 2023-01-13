import {AppDataSource} from '../../config/ormconfig';
import {Article} from '../entities/Article';

export const ArticleRepository = AppDataSource.getRepository(Article);
