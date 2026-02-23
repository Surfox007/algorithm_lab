import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    excerpt: { type: String, trim: true },
    content: { type: String, required: true },
    coverImage: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    status: { type: String, enum: ['draft', 'published'], default: 'draft', index: true },
    categories: [{ type: String, index: true }],
    tags: [{ type: String, index: true }],
    viewsCount: { type: Number, default: 0 },
    likesCount: { type: Number, default: 0 },
    commentsCount: { type: Number, default: 0 },
    bookmarksCount: { type: Number, default: 0 },
    publishedAt: Date
  },
  { timestamps: true }
);

blogSchema.index({ title: 'text', excerpt: 'text', content: 'text', tags: 'text' });
blogSchema.index({ status: 1, createdAt: -1 });
blogSchema.index({ likesCount: -1, viewsCount: -1 });

export const Blog = mongoose.model('Blog', blogSchema);
