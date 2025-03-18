import csv from 'csv-parser';
import { RequestHandler } from 'express';
import fs from 'fs';
import { StatusCodes } from 'http-status-codes';
import { ChallengeModel } from './schema';
import { IChallenge } from './types';

const model = ChallengeModel;
export const listChallenges: RequestHandler = async (_req, res, _next) => {
  try {
    const challenges = await model.find();
    res.status(StatusCodes.OK).json({
      challenges,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
};

export const uploadCSVFile: RequestHandler = async (req, res, _next) => {
  if (!req.file) {
    res.status(StatusCodes.BAD_REQUEST).send('No file was uploaded.');
    return;
  }

  const challenges: IChallenge[] = [];
  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data', (data) => {
      const successRate = parseFloat(data.ChallengeSucessRate);
      challenges.push({
        id: data.ChallengeID,
        name: data.ChallengeName,
        successRate: isNaN(successRate)
          ? data.ChallengeSucessRate
          : successRate,
      });
    })
    .on('end', () => {
      res.status(StatusCodes.OK).end();
      model.insertMany(challenges);
    })
    .on('error', (error) => {
      res.status(500).json({ error: error.message });
    });
};
