import { useNavigate } from 'react-router-dom';
import { useI18n } from '../../../i18n/provider';
import { sendWhatsAppMessage } from '../../../utils/whatsapp';
import { PATH_DASHBOARD } from '../../../routes/paths';

function Hero() {
  const { t } = useI18n();
  const navigate = useNavigate();

  const handleWhatsapp = () => {
    const message = t('whatsapp.hero');

    sendWhatsAppMessage({ message });
  };
  return (
    <section className="relative h-dvh w-full px-6 py-10 overflow-hidden flex items-center text-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source
          src="https://cdn.pixabay.com/video/2023/03/01/152740-803732906_large.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/40 z-[-1]"></div>
      <div className="sm:mx-auto max-w-7xl">
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-400 text-black bg-secondary px-4 py-1 text-sm">
            <span className="h-2 w-2 rounded-full bg-black"></span>
            {t('home.hero.leftBadge')}
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight flex flex-col md:text-5xl">
            <span className="text-white">{t('home.hero.title1')}</span>
            <span className="text-primary">{t('home.hero.title2')}</span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-white">
            {t('home.hero.description')}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <button
              className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-medium text-white hover:opacity-90 transition cursor-pointer"
              onClick={handleWhatsapp}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '14px' }}
              >
                chat
              </span>
              {t('common.button.chatOnWhatsapp')}
            </button>

            <button
              className="rounded-full flex items-center gap-2 bg-white px-5 py-3 font-medium text-gray-800 hover:bg-gray-50 transition cursor-pointer"
              onClick={() => navigate(PATH_DASHBOARD.products)}
            >
              {t('common.button.browseSeeds')}{' '}
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '14px' }}
              >
                line_end_arrow_notch
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="mt-10 flex max-sm:justify-between mx-auto justify-center gap-4 sm:gap-10 border-t w-fit border-gray-400 pt-6">
            <div>
              <p className="text-xl sm:text-2xl font-semibold text-white">
                50K+
              </p>
              <p className="text-sm text-gray-300">{t('home.hero.stat1')}</p>
            </div>
            <div>
              <p className="max-sm:text-xl text-2xl font-semibold text-white">
                95%+
              </p>
              <p className="text-sm text-gray-300">{t('home.hero.stat2')}</p>
            </div>
            <div>
              <p className="max-sm:text-xl text-2xl font-semibold text-white">
                120+
              </p>
              <p className="text-sm text-gray-300">{t('home.hero.stat3')}</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        {/* <div className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/assets/herobg.webp"
              alt="Seeds in hand"
              className="h-125 w-full object-cover"
            />

            <div className="absolute left-2 top-1 rounded-full bg-secondary px-3 py-1 text-sm  text-black shadow flex gap-2">
              <span className="material-symbols-outlined">psychiatry</span>
              {t('home.hero.rightBadge')}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Hero;
