import cors from 'cors';
import express from 'express';
import fs from 'fs';
import helmet from 'helmet';
import morgan from 'morgan';

import { uploadCSVFile } from './api/challenges/controller';
import challengeRouter from './api/challenges/router';
import { upload } from './file-upload';

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(cors());

if (!fs.existsSync('uploads/')) {
  fs.mkdirSync('uploads/');
}

// upload csv file /upload-csv
app.post('/upload-csv', upload.single('csvFile'), uploadCSVFile);

// api/v1/challenges
app.use(challengeRouter);

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

export default app;
