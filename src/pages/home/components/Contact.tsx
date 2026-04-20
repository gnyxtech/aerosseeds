import { useI18n } from '../../../i18n/provider';
import { sendWhatsAppMessage } from '../../../utils/whatsapp';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../utils/animation';

function Contact() {
  const { t } = useI18n();
  const benefits = t('home.contact.benefits', {
    returnObjects: true,
  }) as string[];

  const handleWhatsapp = () => {
    const message = t('whatsapp.season');

    sendWhatsAppMessage({ message });
  };
  return (
    <section className="px-6 py-12 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          {...fadeIn({ direction: 'up', delay: 0.2 })}
          className="bg-primary rounded-[40px] md:rounded-[56px] p-10 md:p-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 relative overflow-hidden"
        >
          {/* Content Left */}
          <motion.div
            {...fadeIn({ direction: 'left', delay: 0.2 })}
            className="max-w-xl z-10"
          >
            <h2 className="text-white text-2xl sm:text-4xl  leading-[1.1] mb-6">
              {t('home.contact.heading')}
            </h2>
            <p className="text-white/80 sm:text-lg mb-10 leading-relaxed">
              {t('home.contact.subHeading')}
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-white">
                  <span className="material-symbols-outlined text-[#2BB673] text-[22px]">
                    check_circle
                  </span>
                  <span className="sm:text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Actions Right */}
          <motion.div
            {...fadeIn({ direction: 'right', delay: 0.2 })}
            className="flex flex-col items-center md:items-end w-full md:w-auto z-10"
          >
            <button
              className="bg-[#2BB673]  transition-all transform hover:-translate-y-1 text-white px-4 py-2 px-10 py-5 rounded-full flex items-center gap-3 text-sm md:text-xl font-semibold shadow-xl cursor-pointer"
              onClick={handleWhatsapp}
            >
              <span className="material-symbols-outlined">chat_bubble</span>
              {t('home.contact.rightButton')}
            </button>

            <div className="mt-8 text-center md:text-right">
              <p className="text-white/70 text-base flex items-center justify-center md:justify-end gap-2">
                {t('home.contact.rightText')}
                <span className="h-1 w-1 bg-white/40 rounded-full"></span>
                <span className="text-white font-medium">+91 98765 43210</span>
              </p>
            </div>
          </motion.div>

          {/* Subtle background decoration to mimic the image's lighting */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-white/5 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
