import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));
const SkeletonPage = lazy(() => import('./pages/SkeletonPage'));

const RouterConfig = () => {
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/skeleton', element: <SkeletonPage /> },
  ]);

  return routes;
};

export default RouterConfig;
