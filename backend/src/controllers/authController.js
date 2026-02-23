import { StatusCodes } from 'http-status-codes';
import { authService } from '../services/authService.js';
import { ok } from '../utils/apiResponse.js';

export const authController = {
  register: async (req, res) => {
    const { user } = await authService.register(req.body);
    return ok(res, { user }, 'Registered successfully', StatusCodes.CREATED);
  },
  login: async (req, res) => {
    const { user, accessToken, refreshToken } = await authService.login(req.body.email, req.body.password);
    return ok(res, { user, accessToken, refreshToken }, 'Login successful');
  },
  refresh: async (req, res) => {
    const { accessToken } = await authService.refresh(req.body.refreshToken);
    return ok(res, { accessToken }, 'Token refreshed');
  }
};
