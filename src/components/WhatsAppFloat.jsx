import { useWhatsApp } from "../context/WhatsAppContext";

export default function WhatsAppFloat({ message = "Bonjour, je souhaite parler à un conseiller LPU." }) {
  const { openChooser } = useWhatsApp();
  return (
    <button className="wa-float" aria-label="Contacter sur WhatsApp" onClick={() => openChooser(message)}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.41-1.35a9.83 9.83 0 0 0 4.63 1.17h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2z"/>
      </svg>
    </button>
  );
}