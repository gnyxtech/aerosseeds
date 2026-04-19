import { useState } from 'react';
import { sendWhatsAppMessage } from '../../utils/whatsapp';
import { APP_IMAGE } from '../../constants/image';
import { useI18n } from '../../i18n/provider';

const FloatingActions = () => {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  const handleWhatsapp = () => {
    const message = t('whatsapp.floating');

    sendWhatsAppMessage({ message });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center gap-3 z-50">
      {/* ACTION BUTTONS */}
      <div
        className={`flex flex-col items-center gap-3 transition-all duration-300 ${
          open
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-5 pointer-events-none'
        }`}
      >
        {/* CALL */}
        <button
          onClick={() => window.open('tel:+919329202018')}
          className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg hover:scale-110 transition"
        >
          <span className="material-symbols-outlined">call</span>
        </button>

        {/* INSTAGRAM */}
        <button
          onClick={() => window.open('https://www.instagram.com/aeros_seeds')}
          className="w-14 h-14 rounded-full bg-green-400 flex items-center justify-center text-white shadow-lg hover:scale-110 transition p-3"
        >
          <img src={APP_IMAGE.instagramWhiteSVG} alt="instagram" />
        </button>

        {/* WHATSAPP */}
        <button
          onClick={handleWhatsapp}
          className="w-14 h-14 rounded-full bg-green-400 flex items-center justify-center text-white shadow-lg hover:scale-110 transition p-3"
        >
          <img src={APP_IMAGE.whatsappSVG} alt="whatsAPP" />
        </button>
      </div>

      {/* MAIN BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 ${
          open ? 'bg-black rotate-90' : 'bg-black'
        }`}
      >
        <span className="material-symbols-outlined">
          {open ? 'close' : 'message'}
        </span>
      </button>
    </div>
  );
};

export default FloatingActions;
