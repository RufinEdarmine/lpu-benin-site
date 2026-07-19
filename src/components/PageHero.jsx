import { Link } from "react-router-dom";

export default function PageHero({ title, lede, crumb }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="crumb"><Link to="/">Accueil</Link> / {crumb}</div>
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
      </div>
    </section>
  );
}