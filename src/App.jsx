import { HashRouter, Routes, Route } from "react-router-dom";
import { LangProvider } from "./i18n/LangContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import EnBanner from "./components/EnBanner";
import ScrollToTop from "./components/ScrollToTop";
import { WhatsAppProvider } from "./context/WhatsAppContext";
import Programmes from "./pages/Programmes";

import Home from "./pages/Home";
import Temoignages from "./pages/Temoignages";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Admission from "./pages/Admission";
import NotFound from "./pages/NotFound";
import PourquoiLpu from "./pages/PourquoiLpu";
import Campus from "./pages/Campus";

export default function App() {
  return (
    <LangProvider>
        <WhatsAppProvider>
      <HashRouter>
        <ScrollToTop />
        <EnBanner />
        <Header />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/temoignages" element={<Temoignages />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/pourquoi-lpu" element={<PourquoiLpu />} />
            <Route path="/programmes" element={<Programmes />} />
            <Route path="/campus" element={<Campus />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </HashRouter>
      </WhatsAppProvider>
    </LangProvider>
  );
}