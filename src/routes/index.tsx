import { useRoutes } from 'react-router-dom';

import Layout from './layout';
import { HomePage } from '../pages/home/home';

// ----------------------------------------------------------------------

export function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <HomePage /> },
        // { path: PATH_DASHBOARD.home, element: <Home /> },
      ],
    },
    // { path: "*", element: <Page404 /> },
  ]);
}
