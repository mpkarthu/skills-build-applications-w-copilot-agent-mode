import mongoose, { Document, Schema } from 'mongoose';

export interface IActivity extends Document {
  userId: string;
  type: string;
  durationMinutes: number;
  distanceKm?: number;
  timestamp: Date;
}

const activitySchema = new Schema<IActivity>({
  userId: { type: String, required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  distanceKm: { type: Number },
  timestamp: { type: Date, required: true },
});

const ActivityModel = mongoose.models.Activity || mongoose.model<IActivity>('Activity', activitySchema);
export default ActivityModel;
