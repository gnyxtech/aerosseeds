import { useI18n } from '../../../i18n/provider';

function Hero() {
  const { t } = useI18n();
  return (
    <section className="w-full  px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-400 text-black bg-secondary px-4 py-1 text-sm">
            <span className="h-2 w-2 rounded-full bg-black"></span>
            {t('home.hero.leftBadge')}
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight flex flex-col md:text-5xl">
            <span className="">{t('home.hero.title1')}</span>
            <span className="text-primary">{t('home.hero.title2')}</span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-gray-600">
            {t('home.hero.description')}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white hover:opacity-90 transition">
              <span className="material-symbols-outlined">chat</span>
              {t('common.button.chatOnWhatsapp')}
            </button>

            <button className="rounded-full flex items-center gap-2 border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-800 hover:bg-gray-50 transition">
              {t('common.button.browseSeeds')}{' '}
              <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>
                line_end_arrow_notch
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-10 border-t border-gray-200 pt-6">
            <div>
              <p className="text-2xl font-semibold text-gray-900">50K+</p>
              <p className="text-sm text-gray-500">{t('home.hero.stat1')}</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-gray-900">95%+</p>
              <p className="text-sm text-gray-500">{t('home.hero.stat2')}</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-gray-900">120+</p>
              <p className="text-sm text-gray-500">{t('home.hero.stat3')}</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/assets/herobg.webp"
              alt="Seeds in hand"
              className="h-125 w-full object-cover"
            />

            {/* Top badge */}
            <div className="absolute left-2 top-1 rounded-full bg-secondary px-3 py-1 text-sm  text-black shadow flex gap-2">
              <span className="material-symbols-outlined">psychiatry</span>
              {t('home.hero.rightBadge')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
