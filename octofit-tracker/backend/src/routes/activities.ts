import { Router } from 'express';
import type { Request, Response } from 'express';
import ActivityModel from '../models/activity.js';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const activities = await ActivityModel.find();
  res.json({ data: activities });
});

router.post('/', async (req: Request, res: Response) => {
  const { userId, type, durationMinutes, distanceKm } = req.body;
  const newActivity = await ActivityModel.create({
    userId: userId ?? '1',
    type: type ?? 'Workout',
    durationMinutes: durationMinutes ?? 30,
    distanceKm,
    timestamp: new Date(),
  });

  res.status(201).json(newActivity);
});

export default router;
