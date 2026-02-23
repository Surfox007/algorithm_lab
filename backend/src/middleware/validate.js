import { StatusCodes } from 'http-status-codes';
import { AppError } from '../utils/AppError.js';

export const validate = (schema, source = 'body') => (req, _res, next) => {
  const { error, value } = schema.validate(req[source], { abortEarly: false, stripUnknown: true });
  if (error) {
    return next(
      new AppError('Validation failed', StatusCodes.BAD_REQUEST, error.details.map((d) => d.message))
    );
  }
  req[source] = value;
  return next();
};
