
// import request from "supertest"
// import {application} from '../src/index';
// import {DataSource, DataSourceOptions} from 'typeorm';

// const options: DataSourceOptions = {
//     type: 'sqlite',
//     database: 'database.sqlite',
//     entities: ['src/app/entities/**/*.ts'],
//     migrations: ['src/app/data/migrations/**/*.ts'],
//     subscribers: ['src/app/data/subscribers/**/*.ts'],
//     synchronize: true,
//   };

// const AppDataSource = new DataSource(options);

// describe('Server API TEST', () => {
//     beforeAll(async () => {
//         await AppDataSource.initialize()
//         .then(async () => {
//           console.log('Data Source has been initialized!');
//         })
//         .catch(err => {
//           console.error('Error during Data Source initialization', err);
//         });
//     })
//     test('get all users from user table', async () => {
//         const response = await request(application).get("/users")
//         expect(response.status).toBe(200);
//     })
// })