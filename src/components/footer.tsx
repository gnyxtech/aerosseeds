import { useNavigate } from 'react-router-dom';
import { useI18n } from '../i18n/provider';
import { PATH_DASHBOARD } from '../routes/paths';
import { APP_IMAGE } from '../constants/image';
import { sendWhatsAppMessage } from '../utils/whatsapp';

const Footer = () => {
  const { t } = useI18n();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'products', path: PATH_DASHBOARD.products },
    { name: 'about', path: PATH_DASHBOARD.aboutUs },
    { name: 'contact', path: PATH_DASHBOARD.contactUs },
  ];

  const handleWhatsapp = () => {
    const message = t('whatsapp.footer');

    sendWhatsAppMessage({ message });
  };

  return (
    <footer className="bg-secondary/10  text-[#1a2b1d] px-6 py-12 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={APP_IMAGE.logo} className="h-6" alt="" />
            </div>

            <p className="text-sm leading-6 mb-6 max-w-md">
              {t('footer.description')}
            </p>

            {/* <button
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition cursor-pointer"
              onClick={handleWhatsapp}
            >
              {t('common.button.chatOnWhatsapp')}
            </button> */}
            <div className="flex items-center gap-4 mb-6 text-primary">
              <a href="https://www.instagram.com/aeros_seeds" target="_blank">
                {' '}
                <img
                  src="/assets/svgs/instagram.svg"
                  className="w-6 text-primary"
                  alt=""
                />
              </a>
              {/* <a href="https://www.instagram.com/aeros_seeds" target='_blank'> <img src="/assets/svgs/facebook.svg" className='w-6 text-primary' alt="" /></a> */}
            </div>
          </div>

          {/* CENTER */}
          <div className="md:ml-30">
            <h3 className="font-semibold tracking-widest mb-4">
              {' '}
              {t('footer.headings.explore')}
            </h3>

            <ul className="space-y-3 text-sm">
              {navLinks.map((item) => {
                return (
                  <li
                    key={item.name}
                    onClick={() => navigate(item.path)}
                    className="hover:text-green-700 cursor-pointer"
                  >
                    {t(`nav.${item.name}`)}
                  </li>
                );
              })}
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
      </div>
    </footer>
  );
};

export default Footer;
