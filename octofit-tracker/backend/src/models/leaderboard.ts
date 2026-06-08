import mongoose, { Document, Schema } from 'mongoose';

export interface ILeaderboardEntry extends Document {
  teamId: string;
  teamName: string;
  rank: number;
  points: number;
}

const leaderboardSchema = new Schema<ILeaderboardEntry>({
  teamId: { type: String, required: true },
  teamName: { type: String, required: true },
  rank: { type: Number, required: true },
  points: { type: Number, required: true },
});

const LeaderboardModel = mongoose.models.Leaderboard || mongoose.model<ILeaderboardEntry>('Leaderboard', leaderboardSchema);
export default LeaderboardModel;
