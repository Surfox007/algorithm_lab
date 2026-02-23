import { Link } from 'react-router-dom';

export function BlogCard({ blog }) {
  return (
    <article className="rounded border p-4">
      <Link to={`/blog/${blog.slug}`} className="text-xl font-semibold">
        {blog.title}
      </Link>
      <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{blog.excerpt}</p>
    </article>
  );
}
