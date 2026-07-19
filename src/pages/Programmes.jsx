import { useState, useMemo } from "react";
import { useSEO } from "../hooks/useSEO";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { NIVEAUX } from "../data/programmes";
import { useWhatsApp } from "../context/WhatsAppContext";

export default function Programmes() {
  useSEO(
  "Programmes et frais — LPU | Vers l'Inde",
  "Toutes les filières disponibles à Lovely Professional University (LPU) et leurs frais par semestre : diplômes, licences, masters et doctorats."
);

  const [search, setSearch] = useState("");
  const [niveauActif, setNiveauActif] = useState("Tous");
  const { openChooser } = useWhatsApp();

  const niveauxNoms = ["Tous", ...NIVEAUX.map((n) => n.niveau)];

  const resultats = useMemo(() => {
    const terme = search.trim().toLowerCase();
    return NIVEAUX.filter(
      (n) => niveauActif === "Tous" || n.niveau === niveauActif
    )
      .map((n) => ({
        ...n,
        domaines: n.domaines
          .map((d) => ({
            ...d,
            programmes: d.programmes.filter(([nom]) =>
              nom.toLowerCase().includes(terme)
            ),
          }))
          .filter((d) => d.programmes.length > 0),
      }))
      .filter((n) => n.domaines.length > 0);
  }, [search, niveauActif]);

  return (
    <>
      <PageHero
  crumb="Programmes"
  title="Programmes et frais à LPU, avec des bourses jusqu'à 60%"
  lede="Plus de 300 filières disponibles, du diplôme au doctorat. Cherchez votre filière ou parcourez par niveau."
/>

      <section>
        <div className="container">
          <div className="programmes-filtres">
            <input
              type="text"
              placeholder="Rechercher une filière (ex: informatique, gestion, design...)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="programmes-search"
            />
            <div className="programmes-tabs">
              {niveauxNoms.map((n) => (
                <button
                  key={n}
                  className={`programmes-tab ${
                    niveauActif === n ? "active" : ""
                  }`}
                  onClick={() => setNiveauActif(n)}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          {resultats.length === 0 && (
  <p style={{ marginTop: 32 }}>
    Aucune filière trouvée. Essayez un autre mot-clé, ou{" "}
    <button
      onClick={() =>
        openChooser(
          "Bonjour, je cherche une filière à LPU et j'ai besoin d'aide."
        )
      }
      style={{
        background: "none",
        border: "none",
        padding: 0,
        color: "var(--emerald-600)",
        textDecoration: "underline",
        cursor: "pointer",
        font: "inherit",
      }}
    >
      consultez directement un conseiller
    </button>{" "}
    pour vous assister. La brochure complète est aussi téléchargeable en bas
    de page.
  </p>
)}

          {resultats.map((n) => (
  <div key={n.niveau} className="programmes-niveau">
    <h2>{n.niveau}</h2>
    {n.domaines.map((d) => (
      <div key={d.nom} className="programmes-domaine">
        <h3>{d.nom}</h3>
        <div className="programmes-liste">
          {d.programmes.map(([nom, duree, frais], i) => (
            <div key={i} className="programmes-ligne">
              <span className="programmes-nom">{nom}</span>
              <span className="programmes-duree">{duree}</span>
              <span className="programmes-frais">
                {frais} $ / sem.
              </span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
))}
        </div>
      </section>

      <section className="cta-band">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>Besoin de la brochure complète ?</h2>
          <p>
            Téléchargez le document officiel LPU avec toutes les filières et
            tous les frais, à garder pour votre dossier.
          </p>
          
            <a  href="/docs/LPU-Programmes-Frais.pdf"
            download
            className="btn btn-primary btn-lg"
          >
            Télécharger la brochure (PDF)
          </a>
        </div>
      </section>
    </>
  );
}