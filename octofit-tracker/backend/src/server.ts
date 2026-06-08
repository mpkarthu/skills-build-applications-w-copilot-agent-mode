import express, { type Express, type Request, type Response } from 'express';
import usersRouter from './routes/users.js';
import teamsRouter from './routes/teams.js';
import activitiesRouter from './routes/activities.js';
import leaderboardRouter from './routes/leaderboard.js';
import workoutsRouter from './routes/workouts.js';
import { connectDatabase, MONGODB_URI } from './config/database.js';

const app: Express = express();
const PORT = 8000;
const CODESPACE_NAME = process.env.CODESPACE_NAME?.trim();
const host = CODESPACE_NAME ? `${CODESPACE_NAME}-8000.app.github.dev` : `localhost:${PORT}`;
const protocol = CODESPACE_NAME ? 'https' : 'http';
const apiUrl = `${protocol}://${host}/api`;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDatabase()
  .then(() => {
    console.log(`Connected to MongoDB at ${MONGODB_URI}`);
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// API routes
app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);

// Root endpoint
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'OctoFit Tracker API',
    apiUrl,
    codespace: CODESPACE_NAME || null,
  });
});

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    apiUrl,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  if (CODESPACE_NAME) {
    console.log(`Codespaces API base URL: ${apiUrl}`);
  }
});
