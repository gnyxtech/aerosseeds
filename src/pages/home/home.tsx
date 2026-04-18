import { useEffect, useState } from 'react';
import { useI18n } from '../../i18n/provider';
import Hero from '../../components/home/Hero';
import FeaturedProducts from '../../components/home/FeaturedProducts';
import TrustSection from '../../components/home/TrustSection';

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

      <Hero/>
      <FeaturedProducts/>
      <TrustSection />
    </>
  );
};

export { HomePage };
