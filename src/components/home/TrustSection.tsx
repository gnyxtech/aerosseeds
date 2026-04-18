const features = [
  {
    title: "Premium quality tested seeds",
    desc: "Every batch lab-checked for purity & germination above 95%.",
    icon: "verified_user"
  },
  {
    title: "High Yield",
    desc: "Field-proven hybrids built for Indian soil and climate.",
    icon: "trending_up"
  },
  {
    title: "Trusted by Farmers",
    desc: "Relying on proven field performance, quality-tested seeds trusted by thousands of farmers.",
    icon: "workspace_premium"
  },
  {
    title: "Affordable Pricing",
    desc: "High-quality seeds at fair prices, ensuring better value without compromising yield.",
    icon: "sell"
  },
];

export default function TrustSection() {
  return (
    <section className="w-full bg-secondary/25 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.3em] text-primary uppercase">
            Why Aeros
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-gray-900 md:text-4xl">
            Trust grown over generations
          </h2>

          <p className="mt-4 text-gray-600">
            We don’t just sell seeds — we stand behind every packet with science,
            support and a promise of quality you can taste in every harvest.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              {/* icon placeholder */}
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-primary">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                {item.desc}
              </p>

              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}