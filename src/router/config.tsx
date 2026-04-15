import { RouteObject } from 'react-router-dom';
import HomePage from '@/pages/home/page';
import ReportPage from '@/pages/report/page';
import LoginPage from '@/pages/login/page';
import NotFound from '@/pages/NotFound';
import ProtectedRoute from '@/components/feature/ProtectedRoute';

const routes: RouteObject[] = [
  { path: '/login', element: <LoginPage /> },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/:reportId',
    element: (
      <ProtectedRoute>
        <ReportPage />
      </ProtectedRoute>
    ),
  },
  { path: '*', element: <NotFound /> },
];

export default routes;
