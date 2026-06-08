import mongoose from 'mongoose';
import UserModel from '../models/user.js';
import TeamModel from '../models/team.js';
import ActivityModel from '../models/activity.js';
import WorkoutModel from '../models/workout.js';
import LeaderboardModel from '../models/leaderboard.js';

// Seed the octofit_db database with test data
const MONGODB_URI = 'mongodb://127.0.0.1:27017/octofit_db';

const users = [
  { name: 'Avery Chen', email: 'avery@octofit.io', teamId: '1', role: 'Member' },
  { name: 'Jordan Patel', email: 'jordan@octofit.io', teamId: '2', role: 'Captain' },
  { name: 'Morgan Lee', email: 'morgan@octofit.io', teamId: '1', role: 'Member' },
  { name: 'Riley Brooks', email: 'riley@octofit.io', teamId: '3', role: 'Member' },
];

const teams = [
  { name: 'Seahorse Squad', members: 8, points: 1420 },
  { name: 'Tidal Riders', members: 6, points: 1285 },
  { name: 'Coral Crushers', members: 7, points: 1330 },
];

const activities = [
  { userId: '1', type: 'Run', durationMinutes: 32, distanceKm: 6.1, timestamp: new Date('2026-06-08T09:20:00Z') },
  { userId: '2', type: 'Swim', durationMinutes: 45, distanceKm: 1.2, timestamp: new Date('2026-06-08T09:45:00Z') },
  { userId: '3', type: 'Cycle', durationMinutes: 50, distanceKm: 18.0, timestamp: new Date('2026-06-08T10:10:00Z') },
  { userId: '4', type: 'Yoga', durationMinutes: 40, timestamp: new Date('2026-06-08T10:30:00Z') },
];

const workouts = [
  { name: 'Morning Strength Flow', difficulty: 'Medium', focus: 'Full body', durationMinutes: 35 },
  { name: 'Cardio Circuit', difficulty: 'Hard', focus: 'Endurance', durationMinutes: 40 },
  { name: 'Recovery Stretch', difficulty: 'Easy', focus: 'Flexibility', durationMinutes: 20 },
];

const leaderboard = [
  { teamId: '1', teamName: 'Seahorse Squad', rank: 1, points: 1420 },
  { teamId: '3', teamName: 'Coral Crushers', rank: 2, points: 1330 },
  { teamId: '2', teamName: 'Tidal Riders', rank: 3, points: 1285 },
];

async function seed() {
  console.log('Seed the octofit_db database with test data');

  await mongoose.connect(MONGODB_URI, { dbName: 'octofit_db' });
  console.log('Connected to MongoDB for octofit_db');

  await Promise.all([
    UserModel.deleteMany({}),
    TeamModel.deleteMany({}),
    ActivityModel.deleteMany({}),
    WorkoutModel.deleteMany({}),
    LeaderboardModel.deleteMany({}),
  ]);

  const createdUsers = await UserModel.create(users);
  const createdTeams = await TeamModel.create(teams);
  const createdActivities = await ActivityModel.create(activities);
  const createdWorkouts = await WorkoutModel.create(workouts);
  const createdLeaderboard = await LeaderboardModel.create(leaderboard);

  console.log(`Created ${createdUsers.length} users`);
  console.log(`Created ${createdTeams.length} teams`);
  console.log(`Created ${createdActivities.length} activities`);
  console.log(`Created ${createdWorkouts.length} workouts`);
  console.log(`Created ${createdLeaderboard.length} leaderboard entries`);

  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');
}

seed().catch((error) => {
  console.error('Seed failed:', error);
  process.exit(1);
});
