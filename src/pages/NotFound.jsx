import { Link } from "react-router-dom";

export default function NotFound() {
  const waNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  return (
    <section className="hero" style={{ paddingTop: 180, paddingBottom: 120 }}>
      <div className="container text-center">
        <span className="eyebrow">Erreur 404</span>
        <h1>Cette page n'existe pas — mais votre projet d'études, lui, est bien réel.</h1>
        <p className="lede mx-auto">Revenez à l'accueil, ou parlons directement de votre projet.</p>
        <div className="hero-cta" style={{ justifyContent: "center" }}>
          <Link className="btn btn-primary btn-lg" to="/">Retour à l'accueil</Link>
          <a className="btn btn-wa btn-lg" href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener">Parler à un conseiller</a>
        </div>
      </div>
    </section>
  );
}