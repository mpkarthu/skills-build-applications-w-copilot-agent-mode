import mongoose, { Document, Schema } from 'mongoose';

export interface IWorkout extends Document {
  name: string;
  difficulty: string;
  focus: string;
  durationMinutes: number;
}

const workoutSchema = new Schema<IWorkout>({
  name: { type: String, required: true },
  difficulty: { type: String, required: true },
  focus: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
});

const WorkoutModel = mongoose.models.Workout || mongoose.model<IWorkout>('Workout', workoutSchema);
export default WorkoutModel;
