import Joi from 'joi';

export const createBlogSchema = Joi.object({
  title: Joi.string().min(5).max(160).required(),
  excerpt: Joi.string().allow('', null),
  content: Joi.string().min(20).required(),
  status: Joi.string().valid('draft', 'published').default('draft'),
  categories: Joi.array().items(Joi.string()).default([]),
  tags: Joi.array().items(Joi.string()).default([])
});

export const updateBlogSchema = createBlogSchema.fork(['title', 'content'], (schema) => schema.optional());
