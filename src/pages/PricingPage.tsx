import { GlassPanel } from "../components/ui/GlassPanel";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Icon } from "../components/layout/Icon";

const plans = [
  {
    name: "Service",
    price: "490",
    desc: "Pour un service hospitalier unique",
    features: ["Jusqu'à 30 soignants", "Génération IA", "Échange de gardes", "Support email"],
    cta: "Démarrer",
  },
  {
    name: "Établissement",
    price: "1 990",
    desc: "Multi-services, sites uniques",
    features: ["Jusqu'à 300 soignants", "Multi-services", "Compétences avancées", "Support prioritaire", "Intégration SIH"],
    highlighted: true,
    cta: "Choisir",
  },
  {
    name: "Groupe",
    price: "Sur devis",
    desc: "GHT, multi-établissements",
    features: ["Soignants illimités", "Multi-sites", "SSO Pro Santé", "SLA dédié", "Accompagnement"],
    cta: "Nous contacter",
  },
];

export default function PricingPage() {
  return (
    <section className="px-4 py-24 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16 md:mb-24">
        <Badge tone="primary" className="mb-4">Tarifs</Badge>
        <h1 className="text-[40px] md:text-[52px] font-bold tracking-tight mb-4">
          Une formule pour <span className="text-gradient">chaque structure</span>
        </h1>
        <p className="text-on-surface-variant text-lg">Tarifs HT mensuels. Sans engagement, résiliable à tout moment.</p>
      </div>

      {/* Augmentation de l'écart (gap) entre les cartes pour mieux les isoler */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto items-center">
        {plans.map((p) => (
          <GlassPanel
            key={p.name}
            className={`
              relative flex flex-col p-8 lg:p-10 transition-all duration-500 rounded-3xl
              ${p.highlighted 
                /* STYLE CARTE CENTRALE (EXTRÊME) */
                ? "border-2 border-primary bg-gradient-to-b from-primary/20 to-transparent shadow-[0_0_60px_-15px] shadow-primary/50 ring-4 ring-primary/20 lg:-translate-y-6 lg:scale-110 z-20" 
                
                /* STYLE CARTES LATÉRALES (ASSOMBRIES) */
                : "border border-white/5 bg-white/[0.01] opacity-60 hover:opacity-100 hover:border-white/20 lg:scale-95 z-0"
              }
            `}
          >
            {/* Badge flottant XXL pour la carte centrale */}
            {p.highlighted && (
              <div className="absolute -top-5 left-0 right-0 flex justify-center z-30">
                <Badge tone="primary" className="px-6 py-2 shadow-xl shadow-primary/30 border border-primary text-sm font-bold tracking-wide uppercase">
                  Le plus choisi
                </Badge>
              </div>
            )}
            
            <h3 className={`text-[24px] font-bold mb-2 ${p.highlighted ? "text-primary" : ""}`}>
              {p.name}
            </h3>
            
            <p className="text-body-base text-on-surface-variant mb-6 min-h-[48px]">{p.desc}</p>
            
            <div className="mb-8 flex items-baseline gap-1">
              {p.price === "Sur devis" ? (
                <span className="text-4xl lg:text-[40px] font-extrabold tracking-tight">Sur devis</span>
              ) : (
                <>
                  <span className={`font-extrabold tracking-tight ${p.highlighted ? "text-[56px] text-white" : "text-[44px]"}`}>
                    {p.price}
                  </span>
                  <span className="text-2xl font-medium text-on-surface-variant">€</span>
                  <span className="text-body-sm text-on-surface-variant ml-1">/mois</span>
                </>
              )}
            </div>

            {/* Séparateur ajusté selon la carte */}
            <hr className={`border-t mb-8 ${p.highlighted ? "border-primary/30" : "border-white/10"}`} />

            <ul className="space-y-4 mb-10 flex-1">
              {p.features.map((f) => (
                <li key={f} className={`flex items-start gap-3 text-body-base ${p.highlighted ? "font-medium" : ""}`}>
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${p.highlighted ? "bg-primary text-white shadow-lg shadow-primary/40" : "bg-primary/10 text-primary"}`}>
                    <Icon name="check" className="text-[14px]" />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              to="/contact" 
              variant={p.highlighted ? "primary" : "secondary"} 
              size="lg"
              className={`w-full font-bold ${p.highlighted ? "shadow-lg shadow-primary/40 text-lg py-6" : ""}`}
            >
              {p.cta}
            </Button>
          </GlassPanel>
        ))}
      </div>
    </section>
  );
}