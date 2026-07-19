import { Link } from "react-router-dom";

export default function Footer() {
  const waNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const email = import.meta.env.VITE_CONTACT_EMAIL;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ color: "#fff", marginBottom: 14 }}>
              <span className="brand-mark">VI</span><span>Du Bénin vers l'Inde</span>
              <p style={{ fontSize: "0.85rem", opacity: 0.8, marginTop: 4 }}>
                  Accompagnement gratuit — Conseiller officiel LPU
              </p>
            </div>
            <p style={{ color: "rgba(255,255,255,.6)", fontSize: ".9rem", maxWidth: 320 }}>
              Représentant officiel des admissions de Lovely Professional University (Inde) pour le Bénin.
            </p>
          </div>
          <div>
            <h4>Explorer</h4>
            <ul>
              <li><Link to="/pourquoi-lpu">Pourquoi LPU</Link></li>
              <li><Link to="/programmes">Programmes</Link></li>
              <li><Link to="/campus">Campus</Link></li>
            </ul>
          </div>
          <div>
            <h4>Accompagnement</h4>
            <ul>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/temoignages">Témoignages</Link></li>
              <li><Link to="/admission">Commencer mon admission</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener">WhatsApp</a></li>
              <li><a href={`mailto:${email}`}>Email</a></li>
              <li>Cotonou, Bénin</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Du Bénin vers l'Inde — Tous droits réservés.</span>
          <span style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.1rem", color: "var(--saffron-400)" }}>
  by Rufin
</span>
        </div>
      </div>
    </footer>
  );
}