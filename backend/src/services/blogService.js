import slugify from 'slugify';
import { StatusCodes } from 'http-status-codes';
import { blogRepository } from '../repositories/blogRepository.js';
import { commentRepository } from '../repositories/commentRepository.js';
import { AppError } from '../utils/AppError.js';

export const blogService = {
  async create(userId, payload) {
    const slug = slugify(`${payload.title}-${Date.now()}`, { lower: true, strict: true });
    return blogRepository.create({ ...payload, slug, author: userId, publishedAt: payload.status === 'published' ? new Date() : null });
  },

  async list(params) {
    const page = Number(params.page || 1);
    const limit = Number(params.limit || 10);
    const skip = (page - 1) * limit;
    const sort = params.sort === 'trending' ? { likesCount: -1, viewsCount: -1 } : { createdAt: -1 };
    const filters = {
      ...(params.category && { categories: params.category }),
      ...(params.tag && { tags: params.tag })
    };

    const [items, total] = await Promise.all([
      blogRepository.searchPublished({ query: params.q, sort, skip, limit, filters }),
      blogRepository.countPublished(filters)
    ]);

    return { items, pagination: { page, limit, total, pages: Math.ceil(total / limit) } };
  },

  async detailBySlug(slug) {
    const blog = await blogRepository.findBySlug(slug);
    if (!blog) throw new AppError('Blog not found', StatusCodes.NOT_FOUND);
    await blogRepository.updateById(blog._id, { $inc: { viewsCount: 1 } });
    return blog;
  },

  async update(blogId, user, payload) {
    const blog = await blogRepository.findById(blogId);
    if (!blog) throw new AppError('Blog not found', StatusCodes.NOT_FOUND);
    if (String(blog.author) !== String(user.id) && user.role !== 'admin') throw new AppError('Forbidden', StatusCodes.FORBIDDEN);
    return blogRepository.updateById(blogId, payload);
  },

  async remove(blogId, user) {
    const blog = await blogRepository.findById(blogId);
    if (!blog) throw new AppError('Blog not found', StatusCodes.NOT_FOUND);
    if (String(blog.author) !== String(user.id) && user.role !== 'admin') throw new AppError('Forbidden', StatusCodes.FORBIDDEN);
    await blogRepository.deleteById(blogId);
  },

  async addComment(blogId, userId, content, parentComment = null) {
    return commentRepository.create({ blog: blogId, user: userId, content, parentComment });
  },

  async comments(blogId) {
    return commentRepository.listByBlog(blogId);
  }
};
