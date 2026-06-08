import { Router } from 'express';
import type { Request, Response } from 'express';
import TeamModel from '../models/team.js';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const teams = await TeamModel.find();
  res.json({ data: teams });
});

router.post('/', async (req: Request, res: Response) => {
  const { name, members, points } = req.body;
  const newTeam = await TeamModel.create({
    name: name ?? 'New Team',
    members: members ?? 1,
    points: points ?? 0,
  });

  res.status(201).json(newTeam);
});

export default router;
