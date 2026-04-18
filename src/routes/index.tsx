import { useRoutes } from 'react-router-dom';

import Layout from './layout';
import { HomePage } from '../pages/home/home';
import { PATH_DASHBOARD } from './paths';
import { About } from '../pages/about/about';

// ----------------------------------------------------------------------

export function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: PATH_DASHBOARD.root, element: <HomePage /> },
        { path: PATH_DASHBOARD.home, element: <HomePage /> },
        { path: PATH_DASHBOARD.aboutUs, element: <About /> },
        { path: PATH_DASHBOARD.products, element: <About /> },
        { path: PATH_DASHBOARD.contact, element: <About /> },
      ],
    },
    // { path: "*", element: <Page404 /> },
  ]);
}
