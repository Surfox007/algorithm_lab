import { Link } from 'react-router-dom';

export function BlogCard({ blog }) {
  return (
    <article className="rounded-xl border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-2 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
        <span className="rounded-full bg-slate-100 px-2 py-1 dark:bg-slate-800">{blog.category || 'General'}</span>
        <span>{blog.readTime || '5 min read'}</span>
      </div>
      <Link to={`/blog/${blog.slug}`} className="text-xl font-semibold leading-tight hover:text-indigo-600 dark:hover:text-indigo-300">
        {blog.title}
      </Link>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{blog.excerpt}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
        <span>By {blog.author?.name || 'Unknown author'}</span>
        <span>👁 {blog.views || blog.viewsCount || 0} · ❤️ {blog.likes || blog.likesCount || 0}</span>
      </div>
    </article>
  );
}
