import { BrowserRouter } from 'react-router-dom';
import AOS from 'aos';

import { Router } from './routes';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
