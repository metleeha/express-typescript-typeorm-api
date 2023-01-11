import 'reflect-metadata';
import {Application} from './app';
import * as dotenv from 'dotenv';
import {AppDataSource} from './app-data-source'

dotenv.config();

AppDataSource.initialize()
  .then(async () => {
    console.log('Data Source has been initialized!');
    const application: Application = new Application();
    application.startServer();
  })
  .catch(err => {
    console.error('Error during Data Source initialization', err);
  });
