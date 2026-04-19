import { useState } from 'react';
import { useI18n } from '../../i18n/provider';
import { buildMessage, sendWhatsAppMessage } from '../../utils/whatsapp';

function contact() {
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const { t } = useI18n();

  const handleWhatsapp = () => {
    const message = t('whatsapp.contactDirect');

    sendWhatsAppMessage({ message });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setError('');
    if (!form.name.trim()) {
      setError(t('error.nameRequired'));
      return;
    }

    if (!form.phone.trim()) {
      setError(t('error.phoneRequired'));
      return;
    }

    const template = t('whatsapp.contactForm');

    const finalMessage = buildMessage(template, {
      name: form.name,
      phone: form.phone,
      message: form.message,
    });

    sendWhatsAppMessage({ message: finalMessage });

    setForm({
      name: '',
      phone: '',
      message: '',
    });
  };

  return (
    <section className="bg-[#FAF9F1] min-h-screen py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">
            {t('contact.heading')}
          </p>
          <h1 className="text-5xl md:text-7xl  font-semibold text-[#1B261D] mb-6">
            {t('contact.subHeading')}
          </h1>
          <p className="text-[#4A4A4A] text-lg md:text-xl max-w-2xl leading-relaxed">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Form Card */}
          <div className="lg:col-span-7 bg-white rounded-4xl p-8 md:p-12 shadow-sm border border-gray-300">
            <form className="space-y-8" onSubmit={handleSubmit}>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold tracking-widest text-gray-500 uppercase ml-1">
                    {t('contact.form.name.heading')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder={t('contact.form.name.placeholder')}
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-2xl px-6 py-4 focus:ring-1 focus:ring-primary outline-none transition-all "
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold tracking-widest text-gray-500 uppercase ml-1">
                    {t('contact.form.phone.heading')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder={t('contact.form.phone.placeholder')}
                    className="w-full border border-gray-300 rounded-2xl px-6 py-4 focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold tracking-widest text-gray-500 uppercase ml-1">
                  {t('contact.form.message.heading')}
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t('contact.form.message.placeholder')}
                  className="w-full border border-gray-300  rounded-2xl px-6 py-4 focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-[#24b45d] hover:bg-[#1e964d] text-white px-8 py-4 rounded-full flex items-center gap-3 md:text-lg font-semibold transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <span className="material-symbols-outlined">chat_bubble</span>
                  {t('contact.form.submitButton')}
                </button>
                <p className="mt-6 text-sm text-gray-400">
                  {t('contact.form.infoText')}
                </p>
              </div>
            </form>
          </div>

          {/* Right: Quick Contact Card */}
          <div className="lg:col-span-5 bg-[#255e3b] rounded-4xl p-8 md:p-12 text-white">
            <h3 className="text-2xl font-medium mb-10">
              {t('contact.contactDetails.heading')}
            </h3>

            <div className="space-y-8">
              {/* Phone */}
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-[#E9B949]">
                  call
                </span>
                <div>
                  <p className="text-[11px] font-bold tracking-widest text-white/50 uppercase">
                    {t('contact.contactDetails.details.phone.heading')}
                  </p>
                  <p className="text-lg font-medium">
                    {t('contact.contactDetails.details.phone.value')}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-[#E9B949]">
                  mail
                </span>
                <div>
                  <p className="text-[11px] font-bold tracking-widest text-white/50 uppercase">
                    {t('contact.contactDetails.details.email.heading')}
                  </p>
                  <p className="text-lg font-medium">
                    {t('contact.contactDetails.details.email.value')}
                  </p>
                </div>
              </div>

              {/* Visit */}
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-[#E9B949]">
                  location_on
                </span>
                <div>
                  <p className="text-[11px] font-bold tracking-widest text-white/50 uppercase">
                    {t('contact.contactDetails.details.address.heading')}
                  </p>
                  <p className="text-lg font-medium leading-snug">
                    {t('contact.contactDetails.details.address.value')}
                  </p>
                </div>
              </div>
            </div>

            <button
              className="w-full mt-12 bg-[#2BB673] hover:bg-[#24a165] text-white py-4 rounded-2xl flex items-center justify-center gap-3 font-semibold transition-all shadow-lg cursor-pointer"
              onClick={handleWhatsapp}
            >
              <span className="material-symbols-outlined">chat_bubble</span>
              {t('contact.contactDetails.contactButton')}
            </button>
          </div>
        </div>

        <div className="w-full h-112.5 rounded-4xl overflow-hidden border border-gray-300 shadow-sm mt-24">
          <iframe
            title="Aeros Seeds Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7577312327435!2d78.37517!3d17.43575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzA4LjciTiA3OMKwMjInMzAuNiJF!5e0!3m2!1sen!2sin!4v1715600000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-20 contrast-[1.1]"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default contact;
