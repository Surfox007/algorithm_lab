import { useParams } from 'react-router-dom';
import { comments, featuredPosts } from '../../utils/dummyData';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = featuredPosts.find((item) => item.slug === slug) || featuredPosts[0];

  return (
    <article className="mx-auto max-w-3xl space-y-6">
      <header className="rounded-xl border bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm text-indigo-600 dark:text-indigo-300">{post.category}</p>
        <h1 className="mt-2 text-3xl font-bold">{post.title}</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">By {post.author.name} · {post.readTime}</p>
      </header>

      <section className="prose max-w-none rounded-xl border bg-white p-6 dark:prose-invert dark:border-slate-800 dark:bg-slate-900">
        <p>
          This is a fully designed placeholder article page with realistic structure: intro, core learnings, production tips,
          and actionable takeaways. Replace this with server-backed rich content from your editor pipeline.
        </p>
        <h3>Key Takeaways</h3>
        <ul>
          <li>Use modular architecture for scale.</li>
          <li>Design indexes based on query patterns.</li>
          <li>Instrument analytics for product decisions.</li>
        </ul>
      </section>

      <section className="rounded-xl border bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-xl font-semibold">Comments</h2>
        <div className="mt-4 space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="rounded border p-3 dark:border-slate-700">
              <p className="font-medium">{comment.author}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">{comment.text}</p>
              {comment.replies.length > 0 && (
                <div className="mt-2 pl-4 text-sm text-slate-500 dark:text-slate-400">
                  ↳ {comment.replies.join(', ')}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
