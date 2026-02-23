import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import authRoutes from './routes/authRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import { applySecurity } from './middleware/security.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';
import { swaggerSpec } from './docs/swagger.js';

export const createApp = () => {
  const app = express();

  app.use(express.json({ limit: '1mb' }));
  app.use(morgan('combined'));
  applySecurity(app);

  app.get('/health', (_req, res) => res.json({ status: 'ok' }));
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use('/api/v1/auth', authRoutes);
  app.use('/api/v1/blogs', blogRoutes);

  app.use(notFound);
  app.use(errorHandler);

  return app;
};
