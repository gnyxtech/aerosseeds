const CLIENT_WHATSAPP_NUMBER = '919329202018';

type WhatsAppOptions = {
  message: string;
};

export const sendWhatsAppMessage = ({ message }: WhatsAppOptions) => {
  if (!message) return;

  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${CLIENT_WHATSAPP_NUMBER}?text=${encodedMessage}`;

  window.open(url, '_blank');
};

export const buildMessage = (
  template: string,
  values: Record<string, string>
) => {
  let msg = template;

  Object.keys(values).forEach((key) => {
    msg = msg.replace(`{{${key}}}`, values[key]);
  });

  return msg;
};
