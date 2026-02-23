import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const recentDrafts = [
  { title: 'Optimizing Mongoose Aggregations', updated: '2 hours ago', status: 'Draft' },
  { title: 'API Versioning Strategies', updated: 'Yesterday', status: 'Scheduled' },
  { title: 'Observability for Node Apps', updated: '3 days ago', status: 'Published' }
];

export default function DashboardPage() {
  return (
    <section className="space-y-6">
      <div className="rounded-xl border bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-2xl font-semibold">Writer Dashboard</h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Create, auto-save, and publish polished content.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-xl border bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <p className="mb-2 text-sm font-medium">New Post</p>
          <ReactQuill theme="snow" placeholder="Write your next article..." />
        </div>

        <div className="rounded-xl border bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <h3 className="font-semibold">Recent Drafts</h3>
          <ul className="mt-3 space-y-3">
            {recentDrafts.map((draft) => (
              <li key={draft.title} className="rounded border p-3 text-sm dark:border-slate-700">
                <p className="font-medium">{draft.title}</p>
                <p className="text-slate-500">{draft.updated} · {draft.status}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
