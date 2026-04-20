import { useState } from 'react';
import { useI18n } from '../../i18n/provider';
import { handleEnquire } from '../../utils/whatsapp';
import { motion } from 'framer-motion';
import { cardFade } from '../../utils/animation';
// import { sendWhatsAppMessage } from '../../utils/whatsapp';

const Products = () => {
  const { t } = useI18n();
  const [search, setSearch] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const categories = t('products.categories', {
    returnObjects: true,
  }) as string[];

  const products = t('products.products', {
    returnObjects: true,
  }) as Array<{
    title: string;
    category: string;
    image: string;
    benefits: string[];
  }>;

  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      activeIndex === 0 || item.category === categories[activeIndex];

    const matchesSearch =
      item.title?.toLowerCase().includes(search.toLowerCase()) ||
      item.category?.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-secondary/10 px-6 md:px-16 py-16">
      {/* Heading */}
      <p className="text-primary/90 tracking-[4px] text-sm font-medium mb-3">
        {t('products.catalogue')}
      </p>

      <h1 className="text-5xl md:text-7xl  font-bold text-[#1a2b1d]">
        {t('products.heading')}
      </h1>

      <p className="text-gray-600 mt-4 max-w-2xl">{t('products.subHeading')}</p>

      {/* Search */}
      <div className="mt-8 max-w-2xl relative">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 z-40">
          search
        </span>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t('products.search')}
          className="w-full pl-12 pr-4 py-4 rounded-full bg-white/70 backdrop-blur-md border border-gray-300 outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 sm:gap-4 mt-8">
        {categories.map((cat, idx) => (
          <button
            key={cat}
            onClick={() => {
              setActiveIndex(idx);
            }}
            className={`max-sm:text-xs px-3 py-1 sm:px-6 sm:py-2 rounded-full border transition ${
              activeIndex === idx
                ? 'bg-primary text-white border-primary'
                : 'bg-white/60 text-gray-700 border-gray-300 hover:bg-green-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardFade}
              className={`group flex flex-col overflow-hidden rounded-3xl shadow-md border border-gray-300 bg-white ${
                !item.benefits || item.benefits.length === 0
                  ? 'justify-between'
                  : ''
              }`}
            >
              {/* Image */}
              <div className="h-60 bg-black/5 flex items-center justify-center p-4 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full object-contain transition-transform duration-500 group-hover:scale-115"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-5">
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
                      className="mt-2 text-xs text-gray-600 space-y-1 leading-relaxed overflow-hidden"
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
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No products found
          </p>
        )}
      </div>
    </section>
  );
};

export { Products };
