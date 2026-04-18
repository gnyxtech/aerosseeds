import { useI18n } from '../i18n/provider';

const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="bg-secondary/10 text-[#1a2b1d] px-6 md:px-16 py-12">
      <div className="grid md:grid-cols-3 gap-10">
        {/* LEFT */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-700 text-white flex items-center justify-center rounded-full text-lg font-bold">
              <span className="material-symbols-outlined">psychiatry</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                {t('common.aerosSeeds')}
              </h2>
              <p className="text-xs tracking-widest">
                {t('footer.sownForTrust')}
              </p>
            </div>
          </div>

          <p className="text-sm leading-6 mb-6 max-w-md">
            {t('footer.description')}
          </p>

          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition">
            {t('common.button.chatOnWhatsapp')}
          </button>
        </div>

        {/* CENTER */}
        <div>
          <h3 className="font-semibold tracking-widest mb-4">
            {' '}
            {t('footer.headings.explore')}
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-green-700 cursor-pointer">
              All Products
            </li>
            <li className="hover:text-green-700 cursor-pointer">About Us</li>
            <li className="hover:text-green-700 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="font-semibold tracking-widest mb-4">
            {t('footer.headings.reachUs')}
          </h3>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined">call</span>
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined">mail</span>
              <span>hello@aerosseeds.in</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined">location_on</span>
              <span>{t('common.address')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-400 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>
          © {new Date().getFullYear()} {t('footer.copyright')}
        </p>
        <p className="mt-2 md:mt-0">{t('footer.createdBy')}</p>
      </div>
    </footer>
  );
};

export default Footer;
