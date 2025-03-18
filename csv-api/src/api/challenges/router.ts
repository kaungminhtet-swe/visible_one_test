import express from 'express';

const router = express.Router();

router.route('/api/v1/challenges').get((_req, res) => {
  res.send('Route from challenges');
});

export default router;
