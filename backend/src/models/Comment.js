import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    blog: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true, index: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    parentComment: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment', default: null, index: true },
    content: { type: String, required: true, trim: true },
    likesCount: { type: Number, default: 0 }
  },
  { timestamps: true }
);

commentSchema.index({ blog: 1, createdAt: -1 });

export const Comment = mongoose.model('Comment', commentSchema);
