import { useI18n } from '../../../i18n/provider';
import { motion } from 'framer-motion';
import { cardFade, fadeIn, staggerContainer } from '../../../utils/animation';

export default function TrustSection() {
  const { t } = useI18n();
  const features = t('home.trustSection.features', {
    returnObjects: true,
  }) as Array<{
    title: string;
    desc: string;
    icon: string;
  }>;
  return (
    <section className="w-full bg-secondary/25 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          {...fadeIn({ direction: 'left', delay: 0.2 })}
          className="max-w-2xl"
        >
          <p className="text-xs tracking-[0.3em] text-primary uppercase">
            {t('home.trustSection.heading')}
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-gray-900 md:text-4xl">
            {t('home.trustSection.subHeading')}
          </h2>

          <p className="mt-4 text-gray-600">
            {t('home.trustSection.description')}
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardFade}
              className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              {/* icon placeholder */}
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-primary">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
