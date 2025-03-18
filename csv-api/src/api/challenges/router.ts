import express from 'express';
import { listChallenges } from './controller';

const router = express.Router();

router.route('/api/v1/challenges').get(listChallenges);

export default router;
