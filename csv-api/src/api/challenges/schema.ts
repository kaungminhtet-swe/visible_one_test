import mongoose, { Schema } from 'mongoose';

interface IChallenge {
  id: string;
  name: string;
  successRate: string;
  createdAt: Date;
  updatedAt: Date;
}

const challengeScheme = new Schema<IChallenge>(
  {
    id: {
      type: String,
      required: [true, 'Product ID is required.'],
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: [true, 'Product name is required.'],
      unique: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

export const ChallengeModel = mongoose.model<IChallenge>(
  'Challenge',
  challengeScheme,
);
