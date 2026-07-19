import { useLang } from "../i18n/LangContext";
import { useState } from "react";

export default function EnBanner() {
  const { lang } = useLang();
  const [closed, setClosed] = useState(false);
  if (lang !== "en" || closed) return null;
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1100, background: "#E8A33D", color: "#0B1E3D", textAlign: "center", padding: "10px 16px", fontSize: ".85rem", fontWeight: 600 }}>
      This page is still shown in French — full English translation is in progress.
      <button onClick={() => setClosed(true)} style={{ marginLeft: 10, background: "none", border: 0, fontWeight: 700, cursor: "pointer" }}>×</button>
    </div>
  );
}