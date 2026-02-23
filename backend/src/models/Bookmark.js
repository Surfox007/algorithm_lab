import mongoose from 'mongoose';

const bookmarkSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    blog: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true, index: true }
  },
  { timestamps: true }
);

bookmarkSchema.index({ user: 1, blog: 1 }, { unique: true });

export const Bookmark = mongoose.model('Bookmark', bookmarkSchema);
