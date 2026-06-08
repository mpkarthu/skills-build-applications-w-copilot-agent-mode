import mongoose, { Document, Schema } from 'mongoose';

export interface ITeam extends Document {
  name: string;
  members: number;
  points: number;
}

const teamSchema = new Schema<ITeam>({
  name: { type: String, required: true },
  members: { type: Number, required: true },
  points: { type: Number, required: true },
});

const TeamModel = mongoose.models.Team || mongoose.model<ITeam>('Team', teamSchema);
export default TeamModel;
