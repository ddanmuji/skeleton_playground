import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));
const SkeletonPage = lazy(() => import('./pages/SkeletonPage'));
const CarouselPage = lazy(() => import('./pages/CarouselPage'));

const RouterConfig = () => {
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/skeleton', element: <SkeletonPage /> },
    { path: '/carousel', element: <CarouselPage /> },
  ]);

  return routes;
};

export default RouterConfig;
