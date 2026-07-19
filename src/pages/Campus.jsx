import { useSEO } from "../hooks/useSEO";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

export default function Campus() {
  useSEO(
    "Le campus de LPU — Infrastructures et vie étudiante — LPU Bénin Conseil",
    "Visite virtuelle 360°, infrastructures et vie quotidienne sur le campus de Lovely Professional University."
  );

  return (
    <>
      <PageHero
        title="Un campus pensé comme une petite ville internationale."
        lede="Explorez-le vous-même, en visite virtuelle, avant même votre arrivée."
        crumb="Campus"
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Visite virtuelle 360°</span>
            <h2>Baladez-vous dans le campus depuis Cotonou.</h2>
          </Reveal>
          <Reveal delay={1}>
            <div style={{ background: "linear-gradient(135deg, var(--navy-800), var(--navy-600))", borderRadius: "var(--radius-lg)", padding: "48px 32px", textAlign: "center", color: "#fff", marginTop: 24 }}>
              <p style={{ color: "rgba(255,255,255,.8)", marginBottom: 20 }}>Explorez le campus de LPU en visite virtuelle 360°, réalisée par Golden Globe Technologies.</p>
              <a href="https://iviewd.com/lpu2/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                Ouvrir la visite virtuelle 360° ↗
              </a>
            </div>
          </Reveal>
          <p style={{ fontSize: 13, color: "var(--ink-500)", marginTop: 12 }}>
            Vous quittez le site LPU Bénin Conseil — la visite virtuelle s'ouvre sur iviewd.com.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-100)" }}>
        <div className="container">
          <Reveal><h2>Les infrastructures en un coup d'œil</h2></Reveal>
          <div className="grid grid-4" style={{ marginTop: 32 }}>
            <Reveal as="div" className="card"><div className="card-icon">🏥</div><h3>Santé</h3><p>Centre médical 24/7, ambulance, hôpital sur place.</p></Reveal>
            <Reveal as="div" className="card" delay={1}><div className="card-icon">🏦</div><h3>Services</h3><p>Banques, distributeurs, supermarchés, papeterie.</p></Reveal>
            <Reveal as="div" className="card" delay={2}><div className="card-icon">🏊</div><h3>Sport</h3><p>Piscine, terrains multisports, salle de tir, squash.</p></Reveal>
            <Reveal as="div" className="card" delay={3}><div className="card-icon">📚</div><h3>Académique</h3><p>Bibliothèque, laboratoires, amphithéâtres modernes.</p></Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal><h2>La vie de campus, au-delà de la salle de cours.</h2></Reveal>
          <div className="grid grid-3" style={{ marginTop: 32 }}>
            <Reveal as="div" className="card"><div className="card-icon">🏅</div><h3>Sport &amp; loisirs</h3><p>Piscine, terrains de basketball, volleyball, badminton, squash, salle de tir — à tarif subventionné pour les étudiants.</p></Reveal>
            <Reveal as="div" className="card" delay={1}><div className="card-icon">🎭</div><h3>Clubs &amp; culture</h3><p>Clubs académiques, artistiques et culturels, événements interculturels qui mettent en valeur la diversité de plus de 50 pays.</p></Reveal>
            <Reveal as="div" className="card" delay={2}><div className="card-icon">🤝</div><h3>Communauté africaine</h3><p>Associations et rassemblements d'étudiants africains, dont la cérémonie annuelle dédiée aux diplômés africains.</p></Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-100)" }}>
        <div className="container">
          <Reveal><h2>Une semaine type sur le campus</h2></Reveal>
          <div className="timeline" style={{ marginTop: 32, maxWidth: 720 }}>
            <div className="timeline-item"><h3>Lundi – Vendredi</h3><p>Cours, travaux pratiques, sessions en bibliothèque, pauses dans l'un des nombreux food-courts du campus.</p></div>
            <div className="timeline-item"><h3>Fin de journée</h3><p>Sport à tarif subventionné, clubs étudiants, temps libre entre amis venus du monde entier.</p></div>
            <div className="timeline-item"><h3>Week-end</h3><p>Événements culturels, temps de repos, appels vidéo avec la famille au Bénin, découverte de la région.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Envie d'en savoir plus sur le quotidien à LPU ?</h2>
            <p className="lede mx-auto">Un conseiller peut vous mettre en contact avec un étudiant déjà sur place.</p>

              <div className="btn btn-wa btn-lg"> 
              <a href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour, j'aimerais échanger avec un étudiant déjà présent à LPU.")}`}
              target="_blank" rel="noopener">
            
              Échanger avec un étudiant sur place
            </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}