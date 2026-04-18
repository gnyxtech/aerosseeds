import { useI18n } from '../../../i18n/provider';

export default function Testimonials() {
  const { t } = useI18n();
  const testimonials = t('home.testimonials.testimonials', {
    returnObjects: true,
  }) as Array<{
    id: string;
    quote: string;
    name: string;
    location: string;
    image: string;
  }>;
  return (
    <section className=" w-full  py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs tracking-[0.3em] text-primary uppercase">
              {t('home.testimonials.heading')}
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-gray-900 md:text-4xl">
              {t('home.testimonials.subHeading')}
            </h2>
          </div>
          </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-10 rounded-4xl border border-secondary/50 shadow-xl flex flex-col justify-between transition-hover duration-300 hover:shadow-md"
            >
              <div>
                {/* Quote Icon */}
                <div className="text-[#E9B949] text-7xl font-serif leading-none">
                  “
                </div>
                <p className="text-[#4A4A4A] text-lg leading-relaxed mb-2">
                  "{item.quote}"
                </p>
              </div>

              {/* Divider */}
              <div className=" pt-6 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover grayscale-30"
                />
                <div>
                  <h4 className="text-[#1B261D] font-bold text-base leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
