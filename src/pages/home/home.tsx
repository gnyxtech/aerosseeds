import { useEffect, useState } from 'react';
import { useI18n } from '../../i18n/provider';

const HomePage = () => {
  const { setLang, t } = useI18n();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('lang')) {
      setShow(true);
    }
  }, []);

  return (
    <>
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="w-[320px] rounded-2xl bg-white p-6 shadow-xl text-center">
            <h2 className="text-xl font-semibold text-gray-800">
              Select Language
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Choose your preferred language
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <button
                className="w-full rounded-lg bg-blue-500 py-2 text-white font-medium hover:bg-blue-600 transition"
                onClick={() => {
                  setLang('en');
                  setShow(false);
                }}
              >
                English
              </button>

              <button
                className="w-full rounded-lg bg-green-500 py-2 text-white font-medium hover:bg-green-600 transition"
                onClick={() => {
                  setLang('hi');
                  setShow(false);
                }}
              >
                हिंदी
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="p-10 text-center">
        <h1 className="text-4xl font-bold text-blue-600">
          {t('home.hero.title')}
        </h1>

        <p className="mt-4 text-lg text-gray-600">{t('home.hero.subtitle')}</p>
      </section>
    </>
  );
};

export { HomePage };
