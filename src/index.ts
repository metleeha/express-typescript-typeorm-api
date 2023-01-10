import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Application } from './app';
import * as dotenv from 'dotenv';

dotenv.config();

const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || ''),
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DBNAME,
    entities: ["src/entities/**/*.ts"],
    synchronize: true,
})

AppDataSource.initialize()
    .then(async () => {
        console.log("Data Source has been initialized!")
        const application: Application = new Application();
        application.startServer();
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })