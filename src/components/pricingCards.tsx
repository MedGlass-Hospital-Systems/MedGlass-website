import { motion } from "framer-motion";
import { plans } from "../data/pricingData";
import { cn } from "../lib/utils/cn";
import { Icon } from "./layout/Icon";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { GlassPanel } from "./ui/GlassPanel";

export default function PricingCards() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 md:px-8 pb-20 z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
        {plans.map((p, i) => {
          const price = p.yearly;
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={cn(p.highlighted && "md:-mt-4 relative z-20")}
            >
              <GlassPanel
                variant={p.highlighted ? "elevated" : "default"}
                className={cn(
                  "relative h-full p-8 md:p-10 flex flex-col rounded-3xl transition-all duration-300 backdrop-blur-xl",
                  p.highlighted
                    ? "bg-surface-container/80 border-primary ring-1 ring-primary/20 shadow-[0_20px_50px_rgba(5,12,58,0.8)]"
                    : "bg-surface-container/40 border-outline/50 hover:border-secondary/40 hover:shadow-[0_8px_32px_rgba(3,6,28,0.4)]",
                )}
              >
                {/* Effet de lueur interne pour l'offre mise en avant */}
                {p.highlighted && (
                  <div className="absolute -inset-px bg-linear-to-b from-primary/10 to-transparent rounded-3xl pointer-events-none" />
                )}

                {/* Badge flottant "Le plus choisi" */}
                {p.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30">
                    <Badge className="bg-primary text-on-primary border border-primary-container shadow-lg shadow-primary/20 px-4 py-1 rounded-full flex items-center gap-1.5 text-xs font-semibold">
                      <Icon name="star" className="text-[14px]" filled />
                      Le plus choisi
                    </Badge>
                  </div>
                )}

                {/* Nom du Plan */}
                <h3 className={cn("text-[24px] font-extrabold mb-2 tracking-tight", p.highlighted ? "text-primary drop-shadow-[0_0_10px_rgba(118,208,151,0.2)]" : "text-on-surface")}>
                  {p.name}
                </h3>
                
                {/* Description du Plan */}
                <p className="text-on-surface-variant text-[15px] mb-8 min-h-11 leading-relaxed">
                  {p.desc}
                </p>

                {/* Zone de Prix */}
                <div className="mb-8">
                  {price === null ? (
                    <div className="text-[36px] md:text-[40px] font-extrabold tracking-tight leading-none text-on-surface">
                      Sur devis
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className={cn("font-extrabold tracking-tight leading-none text-on-surface", p.highlighted ? "text-[56px]" : "text-[46px]")}>
                        {price.toLocaleString("fr-FR")}
                      </span>
                      <span className="text-[24px] font-bold text-on-surface-variant">€</span>
                      <span className="text-[14px] text-on-surface-variant/80 ml-1.5 font-medium">
                        /mois <span className="text-[12px] opacity-70">· facturé annuellement</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Liste des Fonctionnalités */}
                <ul className="space-y-4 mb-10 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[15px]">
                      <span
                        className={cn(
                          "shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 border shadow-sm transition-colors",
                          p.highlighted 
                            ? "bg-primary text-on-primary border-primary-container" 
                            : "bg-primary/10 text-primary border-primary/20",
                        )}
                      >
                        <Icon name="check" className="text-[12px] stroke-3" />
                      </span>
                      <span className="text-on-surface-variant group-hover:text-on-surface transition-colors">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Bouton d'Action */}
                <Button
                  to="/contact"
                  variant={p.highlighted ? "primary" : "secondary"}
                  size="lg"
                  className={cn(
                    "w-full rounded-xl font-semibold transition-all duration-300",
                    p.highlighted 
                      ? "bg-primary text-on-primary hover:bg-primary-container hover:text-white shadow-[0_4px_20px_rgba(118,208,151,0.25)]" 
                      : "bg-surface-container-high/60 text-on-surface border border-outline/60 hover:bg-white/10"
                  )}
                  icon="arrow_forward"
                  iconPosition="right"
                >
                  {p.cta}
                </Button>
              </GlassPanel>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}