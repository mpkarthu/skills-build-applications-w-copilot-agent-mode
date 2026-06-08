import { Router } from 'express';
import type { Request, Response } from 'express';
import UserModel from '../models/user.js';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const users = await UserModel.find();
  res.json({ data: users });
});

router.post('/', async (req: Request, res: Response) => {
  const { name, email, teamId, role } = req.body;
  const newUser = await UserModel.create({
    name: name ?? 'New User',
    email: email ?? 'unknown@octofit.io',
    teamId: teamId ?? '1',
    role: role ?? 'Member',
  });

  res.status(201).json(newUser);
});

export default router;
