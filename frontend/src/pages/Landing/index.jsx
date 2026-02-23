import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BlogCard } from '../../components/blog/BlogCard';
import { featuredPosts } from '../../utils/dummyData';

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>InkForge | Modern Blogging Platform</title>
        <meta name="description" content="A modern platform for engineers, creators, and writers." />
      </Helmet>

      <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
            Trusted by 12,000+ writers
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">Build Your Audience with Stories that Matter</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Publish technical articles, track analytics, grow followers, and manage your entire writing workflow in one place.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/explore" className="rounded bg-slate-900 px-4 py-2 text-white dark:bg-slate-100 dark:text-slate-900">Start Reading</Link>
            <Link to="/dashboard" className="rounded border px-4 py-2 dark:border-slate-700">Start Writing</Link>
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-lg font-semibold">Platform Highlights</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li>• Rich text editor with draft auto-save</li>
            <li>• Nested comments and community interaction</li>
            <li>• SEO-ready posts with clean slug URLs</li>
            <li>• Writer analytics for views, likes, and engagement</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured Articles</h2>
          <Link to="/explore" className="text-sm text-indigo-600 dark:text-indigo-300">View all</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <BlogCard key={post._id} blog={post} />
          ))}
        </div>
      </section>
    </>
  );
}
