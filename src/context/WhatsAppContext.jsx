import { createContext, useContext, useState } from "react";

const WhatsAppContext = createContext(null);

const ADVISORS = [
  { number: import.meta.env.VITE_WHATSAPP_NUMBER_1, label: import.meta.env.VITE_WHATSAPP_LABEL_1 || "Conseiller" },
  { number: import.meta.env.VITE_WHATSAPP_NUMBER_2, label: import.meta.env.VITE_WHATSAPP_LABEL_2 || "" },
].filter((a) => a.number);

export function WhatsAppProvider({ children }) {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  function openChooser(msg = "Bonjour, je souhaite parler à un conseiller LPU.") {
    if (ADVISORS.length <= 1) {
      const num = ADVISORS[0]?.number;
      if (num) window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
      return;
    }
    setMessage(msg);
    setOpen(true);
  }

  function choose(number) {
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    setOpen(false);
  }

  return (
    <WhatsAppContext.Provider value={{ openChooser }}>
      {children}
      {open && (
        <div
          style={{ position: "fixed", inset: 0, background: "rgba(11,30,61,.55)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2000, padding: 24 }}
          onClick={() => setOpen(false)}
        >
          <div style={{ background: "#fff", borderRadius: "16px", padding: 32, maxWidth: 360, width: "100%" }} onClick={(e) => e.stopPropagation()}>
            <h3 style={{ marginBottom: 16 }}>Choisissez un conseiller</h3>
            {ADVISORS.map((a) => (
              <button key={a.number} className="btn btn-wa btn-block" style={{ marginBottom: 10 }} onClick={() => choose(a.number)}>
                {a.label}
              </button>
            ))}
            <button className="btn btn-ghost btn-block" onClick={() => setOpen(false)}>Annuler</button>
          </div>
        </div>
      )}
    </WhatsAppContext.Provider>
  );
}

export const useWhatsApp = () => useContext(WhatsAppContext);