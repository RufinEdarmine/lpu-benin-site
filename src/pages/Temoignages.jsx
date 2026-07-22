import { useState, useEffect } from "react";
import { useSEO } from "../hooks/useSEO";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const photos = [
  { src: "/photos/photo 1.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 2.png", alt: "Photo à venir" },
  { src: "/photos/photo 3.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 4.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 5.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 6.png", alt: "Photo à venir" },
  { src: "/photos/photo 7.png", alt: "Photo à venir" },
  { src: "/photos/photo 8.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 9.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 10.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 11.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 12.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 13.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 14.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 15.png", alt: "Photo à venir" },
  { src: "/photos/photo 16.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 17.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 18.png", alt: "Photo à venir" },
  { src: "/photos/photo 19.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 20.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 21.png", alt: "Photo à venir" },
  { src: "/photos/photo 22.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 23.png", alt: "Photo à venir" },
  { src: "/photos/photo 24.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 25.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 26.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 27.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 28.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 29.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 30.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 31.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 32.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 33.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 34.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 35.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 36.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 38.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 39.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 40.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 41.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 42.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 43.png", alt: "Photo à venir" },
  { src: "/photos/photo 44.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 45.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 47.jpeg", alt: "Photo à venir" },
  { src: "/photos/photo 48.jpeg", alt: "Photo à venir" },
];

const studentTestimonials = [
  { name: "À compléter", role: "Étudiant béninois — LPU", youtubeId: null },
  { name: "À compléter", role: "Étudiant béninois — LPU", youtubeId: null },
  { name: "À compléter", role: "Étudiant béninois — LPU", youtubeId: null },
];
const parentTestimonials = [
  { name: "À compléter", role: "Parent d'étudiant", youtubeId: null },
];
const embassyTestimonials = [
  { name: "Ambassade du Bénin en Inde", role: "En cours de préparation", youtubeId: null },
];

function VideoCard({ name, role, youtubeId }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="testi-card" style={{ padding: 0, overflow: "hidden", flex: "0 0 320px" }}>
      <div style={{ position: "relative", aspectRatio: "16/9", background: "var(--navy-800)" }}>
        {youtubeId ? (
          playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
              title={name}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              aria-label={`Lire le témoignage de ${name}`}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", background: `url(https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg) center/cover`, border: 0, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <span style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(232,163,61,.92)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: "var(--navy-950)" }}>▶</span>
            </button>
          )
        ) : (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,.6)", fontSize: ".85rem", textAlign: "center", padding: 16 }}>
            Vidéo à venir
          </div>
        )}
      </div>
      <div style={{ padding: "16px 20px" }}>
        <div className="testi-name">{name}</div>
        <div className="testi-role">{role}</div>
      </div>
    </div>
  );
}

export default function Temoignages() {
  const [showAll, setShowAll] = useState(false);
  const visiblePhotos = showAll ? photos : photos.slice(0, 4);

  const [lightboxIndex, setLightboxIndex] = useState(null);
  const lightboxPhoto = lightboxIndex !== null ? visiblePhotos[lightboxIndex] : null;

  function showPrev(e) {
    e.stopPropagation();
    setLightboxIndex((i) => (i - 1 + visiblePhotos.length) % visiblePhotos.length);
  }
  function showNext(e) {
    e.stopPropagation();
    setLightboxIndex((i) => (i + 1) % visiblePhotos.length);
  }

  useEffect(() => {
    if (lightboxIndex === null) return;
    function handleKey(e) {
      if (e.key === "ArrowLeft") showPrev(e);
      if (e.key === "ArrowRight") showNext(e);
      if (e.key === "Escape") setLightboxIndex(null);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [lightboxIndex]);

  useSEO(
    "Témoignages d'étudiants et de parents — LPU Bénin Conseil",
    "Vidéos d'étudiants béninois et africains, de parents, et de l'ambassade du Bénin en Inde."
  );

  return (
    <>
      <PageHero title="Ce que disent réellement les familles." lede="Des mots plus convaincants que n'importe quel argumentaire — parce qu'ils viennent de gens qui ont vécu l'expérience." crumb="Témoignages" />

      <section className="section">
        <div className="container">
          <Reveal><span className="eyebrow">Étudiants</span><h2>Témoignages d'étudiants béninois et africains</h2></Reveal>
          <div className="testi-track" style={{ marginTop: 32 }}>
            {studentTestimonials.map((t, i) => <VideoCard key={i} {...t} />)}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-100)" }}>
        <div className="container">
          <Reveal><span className="eyebrow">Parents</span><h2>Témoignages de parents béninois</h2></Reveal>
          <div className="testi-track" style={{ marginTop: 32 }}>
            {parentTestimonials.map((t, i) => <VideoCard key={i} {...t} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal><span className="eyebrow">Institutionnel</span><h2>Ambassade du Bénin en Inde</h2></Reveal>
          <div className="testi-track" style={{ marginTop: 32 }}>
            {embassyTestimonials.map((t, i) => <VideoCard key={i} {...t} />)}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-100)" }}>
        <div className="container">
          <Reveal><span className="eyebrow">En images</span><h2>Quelques moments en photos</h2></Reveal>
          <div className="mini-gallery" style={{ marginTop: 32 }}>
            {visiblePhotos.map((p, i) =>
              p.src ? (
                <button
                  key={i}
                  className="ph-photo"
                  onClick={() => setLightboxIndex(i)}
                  aria-label={p.alt}
                >
                  <img src={p.src} alt={p.alt} loading="lazy" />
                </button>
              ) : (
                <div key={i} className="ph">
                  <span>{p.alt}</span>
                </div>
              )
            )}
          </div>
          {!showAll && photos.length > 4 && (
            <div style={{ textAlign: "center", marginTop: 24 }}>
              <button className="btn btn-secondary" onClick={() => setShowAll(true)}>
                Voir plus de photos ({photos.length - 4})
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="section" style={{ background: "var(--navy-900)", color: "#fff" }}>
        <div className="container text-center">
          <h2 style={{ color: "#fff" }}>Vous aussi, vous pourriez être notre prochain témoignage.</h2>
          <div className="btn btn-wa btn-lg">
            
              href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour, je souhaite parler à un conseiller LPU maintenant.")}`}
              target="_blank"
              rel="noopener"
            >
              Commencer votre propre parcours
            </a>
          </div>
        </div>
      </section>

      {lightboxPhoto && (
        <div className="lightbox" onClick={() => setLightboxIndex(null)}>
          <button className="lightbox-nav lightbox-prev" onClick={showPrev} aria-label="Photo précédente">
            ‹
          </button>
          <img
            src={lightboxPhoto.src}
            alt={lightboxPhoto.alt}
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox-nav lightbox-next" onClick={showNext} aria-label="Photo suivante">
            ›
          </button>
        </div>
      )}
    </>
  );
}