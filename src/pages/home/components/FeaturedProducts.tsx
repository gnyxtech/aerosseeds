import { useI18n } from '../../../i18n/provider';


export default function FeaturedProducts() {
  const { t } = useI18n();

  const products = t('home.featuredProducts.products', { returnObjects: true }) as Array<{
  title: string;
  subtitle: string;
  image: string;
}>;
  return (
    <section className="w-full px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs tracking-[0.3em] text-primary uppercase">
              {t('home.featuredProducts.heading')}
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-gray-900 md:text-4xl">
              {t('home.featuredProducts.subHeading')}
            </h2>
          </div>

          <button className="flex items-center gap-2 text-sm font-medium text-primary ">
            <span className="hover:underline">  {t('home.featuredProducts.allProducts')}</span>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '14px' }}
            >
              line_end_arrow_notch
            </span>
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="group relative h-90 overflow-hidden rounded-3xl shadow-md"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-contain bg-black/10 transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 p-5 text-white">
                <p className="text-[10px] tracking-widest text-white/70 uppercase">
                  {item.subtitle}
                </p>

                <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>

                <div className="mt-3 flex items-center gap-3">
                  <button className="rounded-full bg-primary px-3 py-2 text-xs font-medium text-white hover:opacity-90 transition flex items-center gap-2">
                    <span>{t('common.button.enquireNow')}</span>{' '}
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: '12px' }}
                    >
                      line_end_arrow_notch
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
