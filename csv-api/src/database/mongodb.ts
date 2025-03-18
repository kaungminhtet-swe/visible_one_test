import mongoose from 'mongoose';
import { env } from 'process';
import logger from '../logger';

const options: mongoose.ConnectOptions = {
  autoIndex: false,
};

if (env.MONGODB_USER && env.MONGODB_PASSWORD) {
  options.user = env.MONGODB_USER;
  options.pass = env.MONGODB_PASSWORD;
}

async function connectMongoDB(): Promise<mongoose.Connection> {
  if (!env.MONGODB_URL) {
    logger.error('Invalid mongodb url');
    process.exit(1);
  }

  mongoose.set('debug', env.NODE_ENV === 'development');
  mongoose.set('strictQuery', false);

  try {
    await mongoose.connect(env.MONGODB_URL, options);
    logger.info('<<<< Connected to MongoDB >>>>');
  } catch (error) {
    logger.error('MongoDB Connection Error: ', error);
    process.exit(1);
  }

  mongoose.Promise = global.Promise;
  return mongoose.connection;
}

export default connectMongoDB;
