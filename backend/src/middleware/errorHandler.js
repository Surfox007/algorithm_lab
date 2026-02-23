import { fail } from '../utils/apiResponse.js';

export const notFound = (_req, res) => fail(res, 'Route not found', 404);

export const errorHandler = (err, _req, res, _next) => {
  const statusCode = err.statusCode || 500;
  fail(res, err.message || 'Internal Server Error', statusCode, err.details || null);
};
