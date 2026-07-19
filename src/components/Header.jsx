import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../i18n/LangContext";
import { useWhatsApp } from "../context/WhatsAppContext";

export default function Header() {
  const { lang, setLang, t } = useLang();
  const { openChooser } = useWhatsApp();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const waNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container">
        <Link className="brand" to="/">
          <span className="brand-mark">VI</span>
          <span>Du Bénin vers l'Inde<small>Représentant officiel des admissions</small></span>
        </Link>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <Link to="/pourquoi-lpu" onClick={() => setOpen(false)}>{t.navWhy}</Link>
          <Link to="/programmes" onClick={() => setOpen(false)}>{t.navProgrammes}</Link>
          <Link to="/campus" onClick={() => setOpen(false)}>{t.navVie}</Link>
          <Link to="/temoignages" onClick={() => setOpen(false)}>{t.navTemoignages}</Link>
          <Link to="/faq" onClick={() => setOpen(false)}>{t.navFaq}</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>{t.navContact}</Link>
          <Link className="btn btn-primary" to="/admission" onClick={() => setOpen(false)}>{t.ctaRdv}</Link>
        </nav>

        <div className="nav-actions">
          <div className="lang-switch">
            <button className={lang === "fr" ? "active" : ""} onClick={() => setLang("fr")}>FR</button>
            <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
          </div>
          <button className="btn btn-primary" onClick={() => openChooser("Bonjour, je souhaite parler à un conseiller.")}>{t.ctaAdvisor}</button>
          <button className={`nav-toggle ${open ? "open" : ""}`} aria-label="Menu" onClick={() => setOpen(!open)}>
  <span></span><span></span><span></span>
</button>
        </div>
      </div>
      {open && <div className="nav-backdrop" onClick={() => setOpen(false)} />}
    </header>
  );
}