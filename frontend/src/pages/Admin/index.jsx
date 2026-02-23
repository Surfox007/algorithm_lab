const flaggedPosts = [
  { title: 'Clickbait in Tech Journalism', reports: 12, status: 'Under Review' },
  { title: 'Misleading Security Claims', reports: 7, status: 'Escalated' },
  { title: 'Spam Affiliate Post', reports: 19, status: 'Removed' }
];

export default function AdminPage() {
  return (
    <section className="space-y-6">
      <div className="rounded-xl border bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <h1 className="text-2xl font-semibold">Admin Panel</h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Moderation, user safety, and platform governance.</p>
      </div>

      <div className="rounded-xl border bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-4 text-lg font-semibold">Flagged Content Queue</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b text-left dark:border-slate-700">
                <th className="py-2">Post</th>
                <th className="py-2">Reports</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {flaggedPosts.map((item) => (
                <tr key={item.title} className="border-b dark:border-slate-800">
                  <td className="py-3">{item.title}</td>
                  <td className="py-3">{item.reports}</td>
                  <td className="py-3">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
