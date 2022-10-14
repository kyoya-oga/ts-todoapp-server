import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import { DataSource } from 'typeorm';
import cors from 'cors';
import bodyParser from 'body-parser';

const app: Express = express();
dotenv.config();

app.use(bodyParser.json());
app.use(cors());

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  synchronize: true,
});

const port = process.env.PORT || 8888;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

AppDataSource.initialize()
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Error initializing data source', err);
  });
