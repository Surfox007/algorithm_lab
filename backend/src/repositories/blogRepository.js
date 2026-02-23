import { Blog } from '../models/Blog.js';

export const blogRepository = {
  create: (payload) => Blog.create(payload),
  findBySlug: (slug) => Blog.findOne({ slug }).populate('author', 'name avatarUrl'),
  findById: (id) => Blog.findById(id),
  updateById: (id, payload) => Blog.findByIdAndUpdate(id, payload, { new: true }),
  deleteById: (id) => Blog.findByIdAndDelete(id),
  searchPublished: ({ query, sort, skip, limit, filters }) => {
    const mongoQuery = { status: 'published', ...filters };
    if (query) mongoQuery.$text = { $search: query };
    return Blog.find(mongoQuery)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .populate('author', 'name avatarUrl');
  },
  countPublished: (filters = {}) => Blog.countDocuments({ status: 'published', ...filters })
};
