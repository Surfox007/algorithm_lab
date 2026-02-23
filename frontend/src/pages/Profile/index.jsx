import { writerStats } from '../../utils/dummyData';

export default function ProfilePage() {
  return (
    <section className="space-y-6">
      <div className="rounded-xl border bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <h1 className="text-2xl font-semibold">Ava Johnson</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Senior Engineer • Distributed systems • Writing about scale and reliability.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-5">
        {Object.entries(writerStats).map(([key, value]) => (
          <div key={key} className="rounded-lg border bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs uppercase tracking-wide text-slate-500">{key}</p>
            <p className="mt-1 text-xl font-semibold">{value.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
