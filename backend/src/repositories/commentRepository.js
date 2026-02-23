import { Comment } from '../models/Comment.js';

export const commentRepository = {
  create: (payload) => Comment.create(payload),
  listByBlog: (blogId) =>
    Comment.find({ blog: blogId })
      .populate('user', 'name avatarUrl')
      .sort({ createdAt: -1 }),
  remove: (id) => Comment.findByIdAndDelete(id)
};
