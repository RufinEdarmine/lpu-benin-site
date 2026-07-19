import { useState } from "react";
import { useSEO } from "../hooks/useSEO";
import PageHero from "../components/PageHero";

const faqs = [
   {
    q: "L'accompagnement est-il payant ?",
    a: "Non. En tant que conseiller officiel de LPU pour le Bénin, notre accompagnement est entièrement gratuit pour vous et votre famille : dossier, admission, visa, préparation au départ.",
   },
  {
    q: "Le campus est-il vraiment sécurisé ?",
    a: "Oui. L'accès aux résidences se fait par carte d'identification, l'ensemble du campus est sous vidéosurveillance, du personnel de sécurité est présent en permanence, et les résidences filles et garçons sont strictement séparées. En cas d'urgence, un centre médical est opérationnel 24h/24 avec service d'ambulance et un hôpital sur place. Si vous le souhaitez, le conseiller peut aussi vous mettre en contact avec un étudiant béninois déjà sur le campus pour un retour d'expérience direct."
  },
  {
    q: "Qu'est-ce que le FRRO ?",
    a: "Le FRRO (Foreigners Regional Registration Office) est le bureau officiel qui enregistre le séjour des étrangers en Inde. C'est une formalité administrative obligatoire, pas une option : si votre séjour dépasse 180 jours, vous devez vous inscrire en ligne sur le portail e-FRRO dans les 14 jours suivant votre arrivée. Le conseiller vous accompagne pas à pas pour que ce soit fait correctement et dans les temps."
  },
  {
    q: "Existe-t-il une assurance santé ?",
    a: "Oui. Chaque étudiant international bénéficie d'une couverture santé pouvant aller jusqu'à 2 000 $, qui prend en charge les frais médicaux en cas de maladie ou d'accident pendant les études. Les modalités précises (ce qui est couvert, comment l'activer) sont détaillées lors de l'admission."
  },
  {
    q: "Mon enfant restera-t-il facilement en contact avec nous ?",
    a: "Oui. Les résidences disposent d'une connexion internet, ce qui permet des appels vidéo réguliers avec la famille au Bénin. Le conseiller reste également joignable pendant toute la durée des études, pas seulement avant le départ, pour toute question ou besoin de réassurance."
  },
];

export default function Faq() {
  useSEO("FAQ — Du Bénin vers l'Inde", "Sécurité, visa, assurance, contact famille : toutes les réponses.");
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <>
      <PageHero title="Toutes vos questions, une vraie réponse." crumb="FAQ" />
      <section className="section">
        <div className="container">
          <div className="faq-list">
            {faqs.map((item, i) => (
              <div key={i} className={`faq-item ${openIndex === i ? "open" : ""}`}>
                <button className="faq-q" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                  {item.q}<span className="plus">+</span>
                </button>
                <div className="faq-a"><div className="faq-a-inner">{item.a}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}