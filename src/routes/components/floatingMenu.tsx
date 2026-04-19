import { useState } from 'react';
import { sendWhatsAppMessage } from '../../utils/whatsapp';

const FloatingActions = ({ t }: any) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const actions = [
    {
      icon: 'call',
      label: 'Call',
      onClick: () => window.open('tel:+919329202018'),
    },
    {
      icon: 'chat',
      label: 'WhatsApp',
      onClick: () => sendWhatsAppMessage({ message: t('whatsapp.floating') }),
    },
    {
      icon: 'photo_camera',
      label: 'Instagram',
      onClick: () => window.open('https://instagram.com', '_blank'),
    },
    {
      icon: 'thumb_up',
      label: 'Facebook',
      onClick: () => window.open('https://facebook.com', '_blank'),
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">
      {/* OPTIONS */}
      <div
        className={`flex flex-col items-end gap-3 transition-all duration-300 ${
          open
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-5 pointer-events-none'
        }`}
      >
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            className="flex items-center gap-2 bg-white text-black px-3 py-2 rounded-full shadow-md hover:scale-105 transition"
          >
            <span className="material-symbols-outlined">{action.icon}</span>
            <span className="text-sm">{action.label}</span>
          </button>
        ))}
      </div>

      {/* MAIN BUTTON */}
      <button
        onClick={toggleMenu}
        className="bg-green-600 hover:bg-green-700 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-transform duration-300"
      >
        <span
          className={`material-symbols-outlined transition-transform duration-300 ${
            open ? 'rotate-45' : 'rotate-0'
          }`}
        >
          add
        </span>
      </button>
    </div>
  );
};

export default FloatingActions;
