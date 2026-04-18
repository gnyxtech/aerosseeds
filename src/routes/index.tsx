import { useRoutes } from 'react-router-dom';

import Layout from './layout';
import { HomePage } from '../pages/home/home';
import { PATH_DASHBOARD } from './paths';
import { About } from '../pages/about/about';
import Contact from './../pages/contact/contact';
import NotFound from '../pages/404page/pageNotFound';
import { Products } from '../pages/product/products';

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
        { path: PATH_DASHBOARD.contactUs, element: <Contact /> },
        { path: PATH_DASHBOARD.products, element: <Products /> },
      ],
    },
    { path: '*', element: <NotFound /> },
  ]);
}
