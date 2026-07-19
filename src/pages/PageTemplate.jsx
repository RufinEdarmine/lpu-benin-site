import { useSEO } from "../hooks/useSEO";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

export default function PageTemplate() {
  useSEO("Titre de la page — LPU Bénin Conseil", "Meta description de la page.");
  return (
    <>
      <PageHero title="Titre H1 de la page" lede="Phrase d'accroche." crumb="Nom dans le fil d'ariane" />
      <section className="section">
        <div className="container">
          <Reveal as="h2">Titre de section</Reveal>
          <div className="grid grid-3">
            <div className="card"><h3>…</h3><p>…</p></div>
          </div>
        </div>
      </section>
    </>
  );
}