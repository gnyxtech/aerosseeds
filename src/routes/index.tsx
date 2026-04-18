import { useRoutes } from 'react-router-dom';

import Layout from './layout';
import { HomePage } from '../pages/home/home';
import { PATH_DASHBOARD } from './paths';
import { About } from '../pages/about/about';
import Contact from './../pages/contact/contact';

// ----------------------------------------------------------------------

export function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: PATH_DASHBOARD.aboutUs, element: <About /> },
        { path: PATH_DASHBOARD.contactUs, element: <Contact /> },
      ],
    },
    // { path: "*", element: <Page404 /> },
  ]);
}
