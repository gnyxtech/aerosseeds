import { useI18n } from "../../../i18n/provider";

export default function Process() {
    const { t } = useI18n();
      const steps = t('home.process.steps', {
        returnObjects: true,
      }) as Array<{
        id: string;
        title: string;
        description: string;
        image: string;
      }>;
  return (
    <section className="w-full  py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs tracking-[0.3em] text-primary uppercase">
              {t('home.process.heading')}
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-gray-900 md:text-4xl">
              {t('home.process.subHeading')}
            </h2>
          </div>

          <p className="text-gray-600 max-w-md">
              {t('home.process.description')}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-10 w-10 rounded-full bg-green-900 text-white flex items-center justify-center text-sm font-semibold">
                    {step.id}
                  </span>
                  <h3 className="text-xl font-semibold text-green-950">
                    {step.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};