import { APP_IMAGE } from '../../constants/image';
import { useI18n } from '../../i18n/provider';

const About = () => {
  const { t } = useI18n();

  const whatWeStandFor = t('about.whatWeStandFor', {
    returnObjects: true,
  });

  return (
    <div>
      {/* hero */}
      <section className="bg-[#f5f3ef] py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* text */}
          <div>
            <p className="text-green-700 uppercase tracking-widest text-sm mb-4">
              {t('about.hero.our-story')}
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#1f2d1f] mb-6">
              {t('about.hero.title')}
            </h1>

            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              {t('about.hero.para-1')}
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              {t('about.hero.para-2')}
            </p>
          </div>

          {/* image */}
          <div className="w-full">
            <img
              src={APP_IMAGE.owner}
              alt="Farmer"
              className="w-full h-[500px] object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* what we stand for*/}
      <section className="bg-[#e9dfcf] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-[#1f2d1f] mb-12">
            {t('about.whatWeStandFor.title')}
          </h2>

          {/* Cards */}
          <div className="grid md:grid-cols-4 gap-6">
            {whatWeStandFor.boxes.map((item: any, i: number) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition"
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <h3 className="text-lg font-semibold text-[#1f2d1f] mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* image section */}

      <section className="bg-[#f5f3ef] py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-center">
          {/* LEFT BIG IMAGE */}
          <div className="md:col-span-2 overflow-hidden rounded-3xl">
            <img
              src={APP_IMAGE.factory}
              alt="Factory"
              className="w-full h-[260px] sm:h-[320px] md:h-[500px] object-cover transition duration-500 ease-in-out hover:scale-105"
            />
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:col-span-1 overflow-hidden rounded-3xl">
            <img
              src={APP_IMAGE.farm}
              alt="Farm"
              className="w-full h-[260px] sm:h-[320px] md:h-[500px] object-cover transition duration-500 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* our vision */}

      <section className="bg-[#e9dfcf] py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* VISION */}
          <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            {/* top accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-green-400"></div>

            {/* icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-100 mb-6">
              <span className="material-symbols-outlined text-green-700 text-[28px]">
                visibility
              </span>
            </div>

            {/* title */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#1f2d1f] mb-4">
              {t('about.ourVision.title')}
            </h2>

            {/* text */}
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {t('about.ourVision.para')}
            </p>

            {/* glow */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-green-100 rounded-full blur-2xl opacity-30"></div>
          </div>

          {/* MISSION */}
          <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            {/* top accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-green-400"></div>

            {/* icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-yellow-100 mb-6">
              <span className="material-symbols-outlined text-yellow-600 text-[28px]">
                track_changes
              </span>
            </div>

            {/* title */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#1f2d1f] mb-4">
              {t('about.ourMission.title')}
            </h2>

            {/* text */}
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {t('about.ourMission.para')}
            </p>

            {/* glow */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-yellow-100 rounded-full blur-2xl opacity-30"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { About };
