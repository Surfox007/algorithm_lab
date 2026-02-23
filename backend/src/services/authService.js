import { StatusCodes } from 'http-status-codes';
import { userRepository } from '../repositories/userRepository.js';
import { AppError } from '../utils/AppError.js';
import { signAccessToken, signRefreshToken, verifyRefreshToken } from '../utils/jwt.js';

export const authService = {
  async register(payload) {
    const existing = await userRepository.findByEmailWithSecrets(payload.email);
    if (existing) throw new AppError('Email already in use', StatusCodes.CONFLICT);
    const user = await userRepository.create(payload);
    return { user };
  },

  async login(email, password) {
    const user = await userRepository.findByEmailWithSecrets(email);
    if (!user) throw new AppError('Invalid credentials', StatusCodes.UNAUTHORIZED);

    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new AppError('Invalid credentials', StatusCodes.UNAUTHORIZED);

    const accessToken = signAccessToken({ sub: user._id, role: user.role });
    const refreshToken = signRefreshToken({ sub: user._id });

    user.refreshTokens.push(refreshToken);
    await userRepository.save(user);

    return { user, accessToken, refreshToken };
  },

  async refresh(token) {
    const payload = verifyRefreshToken(token);
    const user = await userRepository.findById(payload.sub).select('+refreshTokens');

    if (!user || !user.refreshTokens.includes(token)) {
      throw new AppError('Invalid refresh token', StatusCodes.UNAUTHORIZED);
    }

    const accessToken = signAccessToken({ sub: user._id, role: user.role });
    return { accessToken };
  }
};
