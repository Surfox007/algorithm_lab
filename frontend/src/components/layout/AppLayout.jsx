import { Link, NavLink, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleDarkMode } from '../../features/ui/uiSlice';

const navItem = ({ isActive }) =>
  `rounded px-3 py-2 text-sm font-medium transition ${
    isActive ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900' : 'hover:bg-slate-100 dark:hover:bg-slate-800'
  }`;

export function AppLayout() {
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur dark:bg-slate-950/80 dark:border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="text-xl font-bold">InkForge</Link>
          <nav className="flex items-center gap-1">
            <NavLink to="/" className={navItem}>Home</NavLink>
            <NavLink to="/explore" className={navItem}>Explore</NavLink>
            <NavLink to="/dashboard" className={navItem}>Dashboard</NavLink>
            <NavLink to="/profile" className={navItem}>Profile</NavLink>
            <NavLink to="/admin" className={navItem}>Admin</NavLink>
            <button
              onClick={() => dispatch(toggleDarkMode())}
              className="ml-2 rounded border px-3 py-2 text-sm dark:border-slate-700"
            >
              Toggle Theme
            </button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>

      <footer className="border-t bg-white dark:bg-slate-950 dark:border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-6 text-sm text-slate-600 dark:text-slate-300">
          <p>© {new Date().getFullYear()} InkForge. Crafted for creators.</p>
          <div className="flex gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
