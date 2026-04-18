import { useI18n } from '../i18n/provider';

const Navbar = () => {
  const { setLang, t } = useI18n();

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <ul className="flex gap-6">
        <li className="cursor-pointer hover:text-blue-400">{t('nav.home')}</li>
        <li className="cursor-pointer hover:text-blue-400">{t('nav.about')}</li>
      </ul>

      <div className="flex gap-2">
        <button
          className="px-3 py-1 bg-blue-500 rounded"
          onClick={() => setLang('en')}
        >
          EN
        </button>
        <button
          className="px-3 py-1 bg-green-500 rounded"
          onClick={() => setLang('hi')}
        >
          HI
        </button>
      </div>
    </nav>
  );
};
export { Navbar };
