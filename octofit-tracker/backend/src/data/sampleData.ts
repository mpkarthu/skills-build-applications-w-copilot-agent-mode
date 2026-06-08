export interface User {
  id: string;
  name: string;
  email: string;
  teamId: string;
  role: string;
}

export interface Team {
  id: string;
  name: string;
  members: number;
  points: number;
}

export interface Activity {
  id: string;
  userId: string;
  type: string;
  durationMinutes: number;
  distanceKm?: number;
  timestamp: string;
}

export interface Workout {
  id: string;
  name: string;
  difficulty: string;
  focus: string;
  durationMinutes: number;
}

export const users: User[] = [
  { id: '1', name: 'Avery Chen', email: 'avery@octofit.io', teamId: '1', role: 'Member' },
  { id: '2', name: 'Jordan Patel', email: 'jordan@octofit.io', teamId: '2', role: 'Captain' },
  { id: '3', name: 'Morgan Lee', email: 'morgan@octofit.io', teamId: '1', role: 'Member' },
];

export const teams: Team[] = [
  { id: '1', name: 'Seahorse Squad', members: 8, points: 1420 },
  { id: '2', name: 'Tidal Riders', members: 6, points: 1285 },
  { id: '3', name: 'Coral Crushers', members: 7, points: 1330 },
];

export const activities: Activity[] = [
  { id: '1', userId: '1', type: 'Run', durationMinutes: 32, distanceKm: 6.1, timestamp: '2026-06-08T09:20:00Z' },
  { id: '2', userId: '2', type: 'Swim', durationMinutes: 45, distanceKm: 1.2, timestamp: '2026-06-08T09:45:00Z' },
  { id: '3', userId: '3', type: 'Cycle', durationMinutes: 50, distanceKm: 18.0, timestamp: '2026-06-08T10:10:00Z' },
];

export const workouts: Workout[] = [
  { id: '1', name: 'Morning Strength Flow', difficulty: 'Medium', focus: 'Full body', durationMinutes: 35 },
  { id: '2', name: 'Cardio Circuit', difficulty: 'Hard', focus: 'Endurance', durationMinutes: 40 },
  { id: '3', name: 'Recovery Stretch', difficulty: 'Easy', focus: 'Flexibility', durationMinutes: 20 },
];
