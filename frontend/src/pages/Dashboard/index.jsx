import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function DashboardPage() {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-semibold">Writer Dashboard</h2>
      <ReactQuill theme="snow" />
    </section>
  );
}
