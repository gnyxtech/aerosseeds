import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Navbar } from '../components/nav';

const Layout = () => {
  const location = useLocation();
  const mainBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mainBoxRef.current) {
      mainBoxRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
