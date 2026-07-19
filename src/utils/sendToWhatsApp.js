export function sendToWhatsApp(type, fields) {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER;
  const lines = [`Nouvelle demande — ${type}`];
  Object.entries(fields).forEach(([key, value]) => {
    if (value) lines.push(`${key} : ${value}`);
  });
  const url = `https://wa.me/${number}?text=${encodeURIComponent(lines.join("\n"))}`;
  window.open(url, "_blank", "noopener");
}