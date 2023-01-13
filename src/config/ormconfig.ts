import {DataSource, DataSourceOptions} from 'typeorm';

import dotenv from 'dotenv';
dotenv.config();

const options: DataSourceOptions = {
  type: 'sqlite',
  database: 'database.sqlite',
  entities: ['src/app/entities/**/*.ts'],
  migrations: ['src/app/data/migrations/**/*.ts'],
  subscribers: ['src/app/data/subscribers/**/*.ts'],
  synchronize: true,
};

export const AppDataSource = new DataSource(options);

if (process.env.NODE_ENV !== "test") {
  AppDataSource.initialize()
  .then(async () => {
    console.log('Data Source has been initialized!');
  })
  .catch(err => {
    console.error('Error during Data Source initialization', err);
  });
}

export default AppDataSource;