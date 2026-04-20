// ----------------------------------------------------------------------

function path(root: string, subLink: string) {
  return `${root}${subLink}`;
}

const ROOTS_APP = '/app';
const ROOTS_DASHBOARD = '';

// ----------------------------------------------------------------------

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  app: path(ROOTS_APP, '/app'),
  home: path(ROOTS_DASHBOARD, '/'),
  products: path(ROOTS_DASHBOARD, '/products'),
  aboutUs: path(ROOTS_DASHBOARD, '/about-us'),
  contactUs: path(ROOTS_DASHBOARD, '/contact-us'),
};
