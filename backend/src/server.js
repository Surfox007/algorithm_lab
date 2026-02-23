import { createApp } from './app.js';
import { connectDb } from './config/db.js';
import { env } from './config/env.js';
import { logger } from './utils/logger.js';

const bootstrap = async () => {
  await connectDb();
  const app = createApp();
  app.listen(env.port, () => logger.info(`API listening on ${env.port}`));
};

bootstrap();
