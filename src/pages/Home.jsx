import { useSEO } from "../hooks/useSEO";
import Reveal from "../components/Reveal";
import StatCounter from "../components/StatCounter";
import { Link } from "react-router-dom";

export default function Home() {
  useSEO(
    "LPU Bénin — Étudier à Lovely Professional University, accompagné depuis Cotonou",
    "Conseiller officiel des admissions LPU (Inde) au Bénin. Programmes, coûts, bourses, sécurité, logement."
  );
  const waNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const waMsg = encodeURIComponent("Bonjour, je souhaite parler à un conseiller LPU maintenant.");

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="hero-badges">
              <span className="hero-badge">🇧🇯 Conseiller officiel — Bénin</span>
              <span className="hero-badge">🎁Accompagnement 100% gratuit</span>
              <span className="hero-badge">🎓 54 pays africains représentés à LPU</span>
              <span className="hero-badge">💬 Réponse humaine sous 1h</span>
            </div>
            <h1>Étudier à Lovely Professional University, avec un accompagnement 100% gratuit à chaque étape depuis Cotonou.</h1>
            <p className="lede">Ingénierie, gestion, sciences, design, santé : rejoignez l'une des universités privées les plus internationales d'Inde, avec un conseiller béninois qui répond à vos questions et rassure vos parents.</p>
            <div className="hero-cta">
              <a className="btn btn-primary btn-lg" href={`https://wa.me/${waNumber}?text=${waMsg}`} target="_blank" rel="noopener">Parler à un conseiller maintenant</a>
              <Link className="btn btn-secondary btn-lg" to="/admission">Commencer mon admission</Link>
            </div>
            <div className="hero-stats">
              <StatCounter target={54} label="pays africains représentés à LPU" />
              <StatCounter target={60} suffix="%" label="de bourse possible via LPUIST" />
            </div>
          </div>
          <Reveal delay={2}>
  <div className="hero-visual">
    <a href="https://iviewd.com/lpu2/" target="_blank" rel="noopener noreferrer" className="ph-label tour-link">
      <span className="tour-play">▶</span>
      <span style={{ fontWeight: 600 }}>Visite virtuelle 360° du campus LPU</span>
      <small style={{ color: "rgba(255,255,255,.65)" }}>Ouvrir sur iviewd.com ↗</small>
    </a>
  </div>
</Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Pourquoi LPU</span>
          <h2>Une université pensée pour les étudiants internationaux.</h2>
          <p className="lede">LPU accueille des étudiants de plus de 50 pays, dont l'ensemble des 54 pays africains reconnus par l'université.</p>
          <div className="grid grid-3" style={{ marginTop: 48 }}>
            <Reveal as="div" className="card">
              <div className="card-icon">🌍</div>
              <h3>Une communauté africaine réelle</h3>
              <p>27 nationalités africaines représentées lors de la cérémonie ASU 2024 dédiée aux étudiants africains.</p>
            </Reveal>
            <Reveal as="div" className="card" delay={1}>
              <div className="card-icon">🏗️</div>
              <h3>Un campus quasi autonome</h3>
              <p>Hôpital, banques, plus de 300 kiosques alimentaires, installations sportives sur place.</p>
            </Reveal>
            <Reveal as="div" className="card" delay={2}>
              <div className="card-icon">🎓</div>
              <h3>Un large choix de filières</h3>
              <p>Ingénierie, gestion, sciences, design, santé, droit.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-100)" }}>
        <div className="container">
          <span className="eyebrow">Vos inquiétudes, nos réponses</span>
          <h2>Nous répondons directement — sans détour.</h2>
          <div className="reassure-grid" style={{ marginTop: 40 }}>
            {[
              ["Sécurité en Inde", "Campus sécurisé 24/7", "Accès contrôlé, vidéosurveillance, résidences séparées, centre médical permanent."],
              ["Logement", "Trois formules d'hébergement", "Dortoirs, chambres climatisées ou studios individuels, toujours sur le campus."],
              ["Restauration", "Une cuisine du monde, y compris africaine", "Mess indien varié et African Food Cafe sur le campus."],
              ["Visa & démarches", "Un accompagnement pas à pas", "Visa étudiant, ressources financières, inscription FRRO : nous préparons tout avec vous."],
            ].map(([q, h, p], i) => (
              <Reveal as="div" className="reassure-card" key={q} delay={i % 3}>
                <div className="q">{q}</div>
                <h3>{h}</h3>
                <p>{p}</p>
                <Link to="/faq">En savoir plus →</Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Prêt à donner à votre enfant un avenir international ?</h2>
            <p className="lede mx-auto">Parlez à un conseiller en quelques minutes, sans engagement.</p>
            <div className="hero-cta" style={{ justifyContent: "center" }}>
              <a className="btn btn-wa btn-lg" href={`https://wa.me/${waNumber}?text=${waMsg}`} target="_blank" rel="noopener">Parler à un conseiller sur WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}