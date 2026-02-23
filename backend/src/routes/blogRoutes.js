import { Router } from 'express';
import { blogController } from '../controllers/blogController.js';
import { asyncHandler } from '../middleware/asyncHandler.js';
import { authenticate } from '../middleware/authMiddleware.js';
import { validate } from '../middleware/validate.js';
import { createBlogSchema, updateBlogSchema } from '../validators/blogValidator.js';

const router = Router();

router.get('/', asyncHandler(blogController.list));
router.get('/:slug', asyncHandler(blogController.detail));
router.post('/', authenticate, validate(createBlogSchema), asyncHandler(blogController.create));
router.patch('/:id', authenticate, validate(updateBlogSchema), asyncHandler(blogController.update));
router.delete('/:id', authenticate, asyncHandler(blogController.remove));
router.get('/:id/comments', asyncHandler(blogController.comments));
router.post('/:id/comments', authenticate, asyncHandler(blogController.addComment));

export default router;
