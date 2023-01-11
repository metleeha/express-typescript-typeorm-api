import {DataSource, DataSourceOptions} from 'typeorm';

const options: DataSourceOptions = {
    type: 'sqlite',
    database: 'database.sqlite',
    entities: ['src/app/entity/**/*.ts'],
    migrations: ['src/app/data/migrations/**/*.ts'],
    subscribers: ['src/app/data/subscribers/**/*.ts'],
    synchronize: true,
  };
  
export const AppDataSource = new DataSource(options);