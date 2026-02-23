import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'mongo-sanitize';
import hpp from 'hpp';
import xssClean from 'xss-clean';
import csrf from 'csurf';
import cookieParser from 'cookie-parser';
import { env } from '../config/env.js';

const apiLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 200 });

export const applySecurity = (app) => {
  app.use(helmet());
  app.use(
    cors({
      origin: env.clientUrl,
      credentials: true
    })
  );
  app.use(cookieParser());
  app.use(apiLimiter);
  app.use((req, _res, next) => {
    req.body = mongoSanitize(req.body);
    req.query = mongoSanitize(req.query);
    req.params = mongoSanitize(req.params);
    next();
  });
  app.use(xssClean());
  app.use(hpp());
  if (env.nodeEnv === 'production') app.use(csrf({ cookie: true }));
};
