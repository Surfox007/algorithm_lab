import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from '../components/layout/AppLayout';
import { Skeleton } from '../components/ui/Skeleton';
import { ProtectedRoute } from './ProtectedRoute';

const LandingPage = lazy(() => import('../pages/Landing'));
const ExplorePage = lazy(() => import('../pages/Explore'));
const BlogDetailPage = lazy(() => import('../pages/BlogDetail'));
const ProfilePage = lazy(() => import('../pages/Profile'));
const DashboardPage = lazy(() => import('../pages/Dashboard'));
const AdminPage = lazy(() => import('../pages/Admin'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'explore', element: <ExplorePage /> },
      { path: 'blog/:slug', element: <BlogDetailPage /> },
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        )
      },
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        )
      },
      {
        path: 'admin',
        element: (
          <ProtectedRoute roles={['admin']}>
            <AdminPage />
          </ProtectedRoute>
        )
      }
    ]
  }
]);

export function AppRouter() {
  return (
    <Suspense fallback={<Skeleton />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
