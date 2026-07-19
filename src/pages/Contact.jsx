import { useState } from "react";
import { useSEO } from "../hooks/useSEO";
import PageHero from "../components/PageHero";
import { sendToWhatsApp } from "../utils/sendToWhatsApp";

export default function Contact() {
  useSEO("Contact — LPU Bénin Conseil", "Contactez le conseiller officiel LPU au Bénin par WhatsApp, téléphone ou email.");
  const [form, setForm] = useState({ prenom: "", tel: "", message: "" });
  const waNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const email = import.meta.env.VITE_CONTACT_EMAIL;

  function handleSubmit(e) {
    e.preventDefault();
    sendToWhatsApp("Contact", { Prénom: form.prenom, Téléphone: form.tel, Message: form.message });
  }

  return (
    <>
      <PageHero title="Parlons de votre projet." lede="Comment nous joindre." crumb="Contact" />
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: 48, alignItems: "flex-start" }}>
            <div className="card">
              <h3>Nos coordonnées</h3>
              <ul style={{ marginTop: 16, color: "var(--ink-700)", lineHeight: 2 }}>
                <li>
                  <strong>Téléphone / WhatsApp :</strong>{" "}
                  <a href={`tel:+${waNumber}`}>+{waNumber}</a>
                </li>
                <li>
                  <strong>Email :</strong> <a href={`mailto:${email}`}>{email}</a>
                </li>
                <li><strong>Adresse :</strong> Cotonou, Bénin</li>
              </ul>
              
                <section className="btn btn-wa btn-block" style={{ marginTop: 20 }}>
                <a href={`https://wa.me/${waNumber}?text=${encodeURIComponent("Bonjour, je souhaite parler à un conseiller LPU.")}`}
                target="_blank" rel="noopener">
                Écrire sur WhatsApp
              </a>
              </section>
            </div>

            <form className="form-card" onSubmit={handleSubmit}>
              <h3>Message rapide</h3>
              <div className="field">
                <label htmlFor="prenom">Prénom &amp; nom</label>
                <input id="prenom" required value={form.prenom} onChange={(e) => setForm({ ...form, prenom: e.target.value })} />
              </div>
              <div className="field">
                <label htmlFor="tel">Téléphone / WhatsApp</label>
                <input id="tel" required value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })} />
              </div>
              <div className="field">
                <label htmlFor="message">Votre question</label>
                <textarea id="message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>
              <button className="btn btn-primary btn-block" type="submit">Envoyer sur WhatsApp</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}