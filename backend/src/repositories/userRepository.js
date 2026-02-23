import { User } from '../models/User.js';

export const userRepository = {
  create: (payload) => User.create(payload),
  findByEmailWithSecrets: (email) => User.findOne({ email }).select('+password +refreshTokens'),
  findById: (id) => User.findById(id),
  save: (user) => user.save()
};
