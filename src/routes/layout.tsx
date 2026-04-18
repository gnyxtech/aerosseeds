import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Navbar } from '../components/nav';
import Footer from '../components/footer';

const Layout = () => {
  const location = useLocation();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const el = scrollRef.current;
    let start = el.scrollTop;
    let startTime: number;

    const duration = 500;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;

      const ease = 1 - Math.pow(1 - progress / duration, 3);

      el.scrollTop = start * (1 - ease);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [location.pathname]);

  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      {/* MAIN SCROLL AREA */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto mt-16">
        <Outlet />
        <Footer />
      </div>

      {/* FLOATING WHATSAPP BUTTON */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-green-600 hover:bg-green-700 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg">
          <span className="material-symbols-outlined">message</span>
        </button>
      </div>
    </div>
  );
};

export default Layout;
