import { useState } from 'react';
import { useI18n } from '../i18n/provider';

const Navbar = () => {
  const { setLang, t, lang } = useI18n();
  const [open, setOpen] = useState(false);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'hi' : 'en');
  };

  return (
    <nav className="w-full bg-[#F5F3EF] border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-green-700 text-white flex items-center justify-center rounded-full text-lg font-bold">
            🌱
          </div>
          <div>
            <h1 className="font-semibold text-lg">Aeros</h1>
            <p className="text-xs text-gray-500">SEEDS CO.</p>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-green-600">
            {t('nav.home')}
          </li>
          <li className="cursor-pointer hover:text-green-600">
            {t('nav.products')}
          </li>
          <li className="cursor-pointer hover:text-green-600">
            {t('nav.about')}
          </li>
          <li className="cursor-pointer hover:text-green-600">
            {t('nav.contact')}
          </li>
        </ul>

        {/* RIGHT SECTION */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-3 py-1 border rounded-full hover:bg-gray-100 transition"
          >
            <span className="material-symbols-outlined">language</span>
            <span className="text-sm font-medium">
              {lang === 'en' ? 'EN' : 'हिं'}
            </span>
          </button>

          {/* WhatsApp Button */}
          <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
            <span className="material-symbols-outlined">chat</span>
            {t('common.button.chatOnWhatsapp')}
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <span className="material-symbols-outlined">close</span>
            ) : (
              <span className="material-symbols-outlined">menu</span>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li>{t('nav.home')}</li>
            <li>{t('nav.products')}</li>
            <li>{t('nav.about')}</li>
            <li>{t('nav.contact')}</li>
          </ul>

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="w-full flex justify-center items-center gap-2 border py-2 rounded-lg"
          >
            <span className="material-symbols-outlined">language</span>
            {lang === 'en' ? 'Switch to Hindi' : 'Switch to English'}
          </button>

          {/* WhatsApp */}
          <button className="w-full flex justify-center items-center gap-2 bg-green-600 text-white py-2 rounded-lg">
            <span className="material-symbols-outlined">chat</span>
            {t('common.button.chatOnWhatsapp')}
          </button>
        </div>
      )}
    </nav>
  );
};

export { Navbar };
