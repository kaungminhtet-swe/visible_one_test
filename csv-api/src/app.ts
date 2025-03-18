import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import challengeRouter from './api/challenges/router';

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(cors());

app.use(challengeRouter);

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

export default app;
