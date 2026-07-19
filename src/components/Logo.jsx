export default function Logo({ className = "" }) {
  return (
    <svg viewBox="0 0 240 300" className={`brand-logo ${className}`.trim()} role="img" aria-label="Vers l'Inde">
      <rect x="20" y="10" width="200" height="200" rx="40" fill="#0B1E3D" />
      <text x="120" y="145" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700" fontSize="90" fill="#E8A33D">VI</text>
      <line x1="70" y1="230" x2="110" y2="230" stroke="#E8A33D" strokeWidth="1.5" opacity="0.6" />
      <text x="120" y="270" textAnchor="middle" fontFamily="'Dancing Script', cursive" fontSize="40" fill="#E8A33D">by Rufin</text>
    </svg>
  );
}