import { useState } from 'react';
import { useI18n } from '../i18n/provider';
import { useNavigate, useLocation } from 'react-router-dom';
import { PATH_DASHBOARD } from '../routes/paths';
import { APP_IMAGE } from './../constants/image';
import { sendWhatsAppMessage } from '../utils/whatsapp';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setLang, t, lang } = useI18n();

  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: 'home', path: PATH_DASHBOARD.home },
    { name: 'products', path: PATH_DASHBOARD.products },
    { name: 'about', path: PATH_DASHBOARD.aboutUs },
    { name: 'contact', path: PATH_DASHBOARD.contactUs },
  ];

  const toggleLang = () => {
    setLang(lang === 'en' ? 'hi' : 'en');
  };

  const handleWhatsapp = () => {
    const message = t('whatsapp.navbar');

    sendWhatsAppMessage({ message });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-gray-200 h-16">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* LOGO */}
        <div
          onClick={() => navigate(PATH_DASHBOARD.home)}
          className="flex items-center cursor-pointer"
        >
          <img src={APP_IMAGE.logo} className="h-6" alt="" />
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium relative">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <li
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`relative cursor-pointer transition duration-300
                  ${isActive ? 'text-green-600' : 'hover:text-green-600'}
                `}
              >
                {t(`nav.${item.name}`)}

                {/* Apple underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-green-600 transition-all duration-300
                    ${isActive ? 'w-full' : 'w-0 hover:w-full'}
                  `}
                ></span>
              </li>
            );
          })}
        </ul>

        {/* RIGHT SECTION */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-3 py-1 border rounded-full hover:bg-gray-100 transition"
          >
            {/* <span className="material-symbols-outlined">language</span> */}
            <img
              src={
                lang === 'en' ? '/assets/svgs/uk.svg' : '/assets/svgs/india.svg'
              }
              alt={lang === 'en' ? 'English' : 'Hindi'}
              className="h-5 w-5"
            />

            <span className="text-sm font-medium">
              {lang === 'en' ? 'English' : 'हिंदी'}
            </span>
          </button>

          {/* WhatsApp */}
          <button
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition shadow-sm hover:shadow-md cursor-pointer"
            onClick={handleWhatsapp}
          >
            <span className="material-symbols-outlined">chat</span>
            {t('common.button.chatOnWhatsapp')}
          </button>
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-3 py-1 border rounded-full hover:bg-gray-100 transition"
          >
            {/* <span className="material-symbols-outlined">language</span> */}
            <img
              src={
                lang === 'en' ? '/assets/svgs/uk.svg' : '/assets/svgs/india.svg'
              }
              alt={lang === 'en' ? 'English' : 'Hindi'}
              className="h-5 w-5"
            />

            <span className="text-sm font-medium">
              {lang === 'en' ? 'English' : 'हिंदी'}
            </span>
          </button>

          <button onClick={() => setOpen(!open)}>
            <span className="material-symbols-outlined">
              {open ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <li
                  key={item.name}
                  onClick={() => {
                    navigate(item.path);
                    setOpen(false);
                  }}
                  className={`cursor-pointer px-2 py-2 rounded transition
                    ${isActive ? 'bg-green-100 text-green-600' : 'hover:bg-gray-100'}
                  `}
                >
                  {t(`nav.${item.name}`)}
                </li>
              );
            })}
          </ul>

          <button
            className="w-full flex justify-center items-center gap-2 bg-green-600 text-white py-2 rounded-lg cursor-pointer"
            onClick={handleWhatsapp}
          >
            <span className="material-symbols-outlined">chat</span>
            {t('common.button.chatOnWhatsapp')}
          </button>
        </div>
      )}
    </nav>
  );
};

export { Navbar };
