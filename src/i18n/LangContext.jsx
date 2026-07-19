import { createContext, useContext, useState, useEffect } from "react";
import { strings } from "./strings";

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState(localStorage.getItem("lpu_lang") || "fr");
  useEffect(() => {
    localStorage.setItem("lpu_lang", lang);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);
  const t = strings[lang];
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);