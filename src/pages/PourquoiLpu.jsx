import { useSEO } from "../hooks/useSEO";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import StatCounter from "../components/StatCounter";
import { Link } from "react-router-dom";

export default function PourquoiLpu() {
  useSEO(
    "Pourquoi choisir LPU ? — LPU Bénin Conseil",
    "Découvrez ce qui distingue Lovely Professional University pour les étudiants africains."
  );
  const waNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  return (
    <>
      <PageHero
        title="Pourquoi Lovely Professional University est différente."
        lede="Ce n'est pas seulement une université indienne qui accepte des étudiants étrangers : c'est un campus construit autour de l'international."
        crumb="Pourquoi LPU"
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Diversité internationale</span>
            <h2>Une vraie communauté africaine, pas un accueil symbolique.</h2>
            <p className="lede">LPU accepte des candidats des 54 pays africains reconnus par l'université. En 2024, une cérémonie de remise de diplômes dédiée aux étudiants africains a réuni des lauréats de 27 nations différentes — vous n'arrivez pas seul.</p>
          </Reveal>
        </div>
      </section>

      <section className="stats-band">
        <div className="container">
          <div className="grid grid-3" style={{ textAlign: "center" }}>
            <StatCounter target={54} label="pays africains éligibles" />
            <StatCounter target={50} label="pays représentés sur le campus" />
            <StatCounter target={27} label="nations africaines diplômées en 2024" />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-100)" }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Infrastructures</span>
            <h2>Un campus conçu pour être autosuffisant.</h2>
            <p className="lede">Centre médical disponible 24h/24 avec service d'ambulance, hôpital, banques, distributeurs, supermarchés, plus de 300 kiosques alimentaires et installations sportives à tarif réduit. L'objectif : que la vie quotidienne se déroule en toute sécurité, sans dépendre du monde extérieur pour l'essentiel.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
  <div className="container">
    <Reveal>
      <span className="eyebrow">Filières</span>
      <h2>Un choix de programmes rarement égalé.</h2>
      <p className="lede">Ingénierie, gestion, sciences, santé, design, droit : la largeur de l'offre permet d'explorer plusieurs voies avant de se spécialiser.</p>
      <Link className="btn btn-primary" to="/programmes" style={{ marginTop: 16, display: "inline-flex" }}>Découvrir les programmes</Link>
    </Reveal>
  </div>
</section>

      <section className="section" style={{ background: "var(--navy-900)", color: "#fff" }}>
  <div className="container">
    <Reveal>
      <span className="eyebrow" style={{ background: "rgba(232,163,61,.16)", color: "var(--saffron-400)" }}>Reconnaissance</span>
      <h2 style={{ color: "#fff" }}>Un diplôme délivré par un établissement reconnu par l'UGC.</h2>
      <p className="lede" style={{ color: "rgba(255,255,255,.75)" }}>LPU est reconnu par l'University Grants Commission (UGC), l'autorité indienne de référence pour l'enseignement supérieur. Un conseiller reste disponible pour répondre à toute question sur votre projet professionnel.</p>
      <div className="hero-cta">
        <a className="btn btn-primary" href={`https://wa.me/${waNumber}?text=${encodeURIComponent("Bonjour, j'ai une question sur mon projet professionnel après LPU.")}`} target="_blank" rel="noopener">Parler à un conseiller</a>
      </div>
    </Reveal>
  </div>
</section>
    </>
  );
}