import { Link, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleDarkMode } from '../../features/ui/uiSlice';

export function AppLayout() {
  const dispatch = useDispatch();
  return (
    <div className="min-h-screen">
      <header className="border-b p-4 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/dashboard">Dashboard</Link>
        <button onClick={() => dispatch(toggleDarkMode())}>Toggle Theme</button>
      </header>
      <main className="mx-auto max-w-5xl p-4">
        <Outlet />
      </main>
    </div>
  );
}
