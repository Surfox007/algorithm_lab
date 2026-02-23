import { StatusCodes } from 'http-status-codes';
import { blogService } from '../services/blogService.js';
import { ok } from '../utils/apiResponse.js';

export const blogController = {
  create: async (req, res) => ok(res, await blogService.create(req.user.id, req.body), 'Blog created', StatusCodes.CREATED),
  list: async (req, res) => ok(res, await blogService.list(req.query), 'Blogs fetched'),
  detail: async (req, res) => ok(res, await blogService.detailBySlug(req.params.slug), 'Blog fetched'),
  update: async (req, res) => ok(res, await blogService.update(req.params.id, req.user, req.body), 'Blog updated'),
  remove: async (req, res) => {
    await blogService.remove(req.params.id, req.user);
    return ok(res, null, 'Blog deleted');
  },
  addComment: async (req, res) =>
    ok(
      res,
      await blogService.addComment(req.params.id, req.user.id, req.body.content, req.body.parentComment),
      'Comment added',
      StatusCodes.CREATED
    ),
  comments: async (req, res) => ok(res, await blogService.comments(req.params.id), 'Comments fetched')
};
