import { useState } from 'react';
import { useI18n } from '../../i18n/provider';

const Products = () => {
  const { t } = useI18n();
  const [search, setSearch] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = t('products.categories', {
    returnObjects: true,
  }) as string[];

  const products = t('products.products', {
    returnObjects: true,
  }) as Array<{
    title: string;
    subtitle: string;
    category: string;
    image: string;
  }>;

  const filteredProducts = products.filter((item) => {
    const matchesCategory = activeIndex === 0 || item.category === categories[activeIndex];

    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-[#e8dfcf] px-6 md:px-16 py-16">
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
      <div className="flex flex-wrap gap-4 mt-8">
        {categories.map((cat, idx) => (
          <button
            key={cat}
            onClick={() => {
              setActiveIndex(idx);
            }}
            className={`px-6 py-2 rounded-full border transition ${
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
            <div
              key={idx}
              className="group relative h-90 overflow-hidden rounded-3xl shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-contain bg-black/10 transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-0 p-5 text-white">
                <p className="text-[10px] tracking-widest text-white/70 uppercase">
                  {item.category}
                </p>

                <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>

                <button className="mt-3 rounded-full bg-primary px-4 py-1 text-xs text-white">
                  {t('common.button.enquireNow')}
                </button>
              </div>
            </div>
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
