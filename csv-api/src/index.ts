import dotenv, { config } from 'dotenv';
import http from 'http';
import { Connection } from 'mongoose';
import { env } from 'process';
import app from './app';
import connectMongoDB from './database/mongodb';
import logger from './logger';

dotenv.config();

const server = http.createServer(app);

let mongoDbConnection: Connection | null = null;
(async () => {
  try {
    mongoDbConnection = await connectMongoDB();
  } catch (error) {
    throw Error(`>>>>> Server Connection Error: ${error}`);
  }

  server.listen(env.SERVER_PORT, () => {
    logger.info(`Server (${env.NODE_ENV}) running on port ${env.SERVER_PORT}`);
  });
})();

const onCloseSignal = async () => {
  logger.info('sigint received, shutting down');

  await mongoDbConnection?.close();
  logger.info('<<<< Disconnected to MongoDB >>>>');

  server.close(() => {
    logger.info('<<<< Server Closed >>>>');
    process.exit();
  });
  setTimeout(() => process.exit(1), 10000).unref();
};

process.on('SIGINT', onCloseSignal);
process.on('SIGTERM', onCloseSignal);
