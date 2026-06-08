import mongoose from 'mongoose';

export const MONGODB_URI = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit_db';
export const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME ?? 'octofit_db';

export async function connectDatabase() {
  return mongoose.connect(MONGODB_URI, { dbName: MONGODB_DB_NAME });
}
