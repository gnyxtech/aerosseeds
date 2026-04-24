import { motion } from 'framer-motion';
import { useI18n } from '../../../i18n/provider';
import { PATH_DASHBOARD } from '../../../routes/paths';
import { useNavigate } from 'react-router-dom';
import { handleEnquire } from '../../../utils/whatsapp';
import { useState } from 'react';
import { cardFade, fadeIn, staggerContainer } from '../../../utils/animation';

export default function FeaturedProducts() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const products = t('home.featuredProducts.products', {
    returnObjects: true,
  }) as Array<{
    title: string;
    category: string;
    image: string;
    benefits: string[];
  }>;
  return (
    <section className="w-full px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <motion.div {...fadeIn({ direction: 'left', delay: 0.2 })}>
            <p className="text-xs tracking-[0.3em] text-primary uppercase">
              {t('home.featuredProducts.heading')}
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-gray-900 md:text-4xl">
              {t('home.featuredProducts.subHeading')}
            </h2>
          </motion.div>

          <button
            className="flex items-center gap-2 text-sm font-medium text-primary cursor-pointer"
            onClick={() => navigate(PATH_DASHBOARD.products)}
          >
            <span className="hover:underline">
              {' '}
              {t('home.featuredProducts.allProducts')}
            </span>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '14px' }}
            >
              line_end_arrow_notch
            </span>
          </button>
        </div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardFade}
              className="group flex flex-col overflow-hidden rounded-3xl shadow-md border border-gray-300 bg-white"
            >
              {/* Image */}
              <div className="h-80 sm:h-60 bg-black/5 flex items-center justify-center  overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full object-contain transition-transform duration-500 group-hover:scale-115"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1 sm:gap-2 p-5">
                {/* Title */}
                <div>
                  <p className="text-[10px] tracking-widest text-primary uppercase">
                    {item.category}
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>

                {/* Benefits */}
                {item.benefits && (
                  <div>
                    <motion.ul
                      initial={false}
                      animate={{
                        height: expandedIndex === idx ? 'auto' : '60px',
                        opacity: expandedIndex === idx ? 1 : 0.9,
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="text-xs text-gray-600 sm:space-y-1 leading-relaxed overflow-hidden"
                    >
                      {item.benefits.map((b, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </motion.ul>

                    {item.benefits.length > 2 && (
                      <button
                        onClick={() =>
                          setExpandedIndex(expandedIndex === idx ? null : idx)
                        }
                        className="text-xs text-primary mt-1 font-medium"
                      >
                        {expandedIndex === idx ? t('common.products.viewLess') : t('common.products.viewMore')}
                      </button>
                    )}
                  </div>
                )}

                {/* CTA */}
                <button
                  className="rounded-full bg-primary px-3 py-3 text-xs font-medium text-white hover:scale-105 transition flex items-center justify-center gap-2 cursor-pointer"
                  onClick={() => handleEnquire(item, t)}
                >
                  <span>{t('common.button.enquireNow')}</span>
                  <span className="material-symbols-outlined text-[12px]">
                    line_end_arrow_notch
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
