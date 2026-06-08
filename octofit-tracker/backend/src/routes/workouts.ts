import { Router } from 'express';
import type { Request, Response } from 'express';
import WorkoutModel from '../models/workout.js';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const workouts = await WorkoutModel.find();
  res.json({ data: workouts });
});

router.post('/', async (req: Request, res: Response) => {
  const { name, difficulty, focus, durationMinutes } = req.body;
  const newWorkout = await WorkoutModel.create({
    name: name ?? 'New Workout',
    difficulty: difficulty ?? 'Medium',
    focus: focus ?? 'General fitness',
    durationMinutes: durationMinutes ?? 30,
  });

  res.status(201).json(newWorkout);
});

export default router;
