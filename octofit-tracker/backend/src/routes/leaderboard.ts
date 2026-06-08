import { Router } from 'express';
import type { Request, Response } from 'express';
import LeaderboardModel from '../models/leaderboard.js';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const leaderboard = await LeaderboardModel.find().sort({ rank: 1 });
  res.json({ data: leaderboard });
});

export default router;
