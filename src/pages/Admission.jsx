import { useState } from "react";
import { useSEO } from "../hooks/useSEO";
import PageHero from "../components/PageHero";
import { sendToWhatsApp } from "../utils/sendToWhatsApp";

export default function Admission() {
  useSEO("Commencer mon admission à LPU — LPU Bénin Conseil", "Démarrez votre dossier d'admission à LPU.");
  const [form, setForm] = useState({ prenom: "", programme: "", niveau: "Baccalauréat obtenu / en cours", tel: "" });

  function handleSubmit(e) {
    e.preventDefault();
    sendToWhatsApp("Admission", {
      Prénom: form.prenom, "Programme envisagé": form.programme,
      "Niveau académique": form.niveau, Téléphone: form.tel,
    });
  }

  return (
    <>
      <PageHero title="Votre dossier d'admission, accompagné du premier au dernier document." crumb="Commencer son admission" />
      <section className="section">
        <div className="container">
          <form className="form-card" onSubmit={handleSubmit} style={{ maxWidth: 480 }}>
            <h3>Ouvrir mon dossier d'admission</h3>
            <div className="field">
              <label htmlFor="prenom">Prénom &amp; nom</label>
              <input id="prenom" required value={form.prenom} onChange={(e) => setForm({ ...form, prenom: e.target.value })} />
            </div>
            <div className="field">
              <label htmlFor="programme">Programme envisagé</label>
              <input id="programme" placeholder="Ex : Informatique, Gestion, Pharmacie…" value={form.programme} onChange={(e) => setForm({ ...form, programme: e.target.value })} />
            </div>
            <div className="field">
  <label htmlFor="niveau">Niveau académique actuel</label>
  <select id="niveau" value={form.niveau} onChange={(e) => setForm({ ...form, niveau: e.target.value })}>
    <option>Baccalauréat obtenu / en cours</option>
    <option>Licence en cours</option>
    <option>Licence obtenue</option>
    <option>Master obtenu / en cours</option>
  </select>
</div>
            <div className="field">
              <label htmlFor="tel">Téléphone / WhatsApp</label>
              <input id="tel" required value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })} />
            </div>
            <button className="btn btn-primary btn-block" type="submit">Démarrer mon admission sur WhatsApp</button>
          </form>
        </div>
      </section>
    </>
  );
}