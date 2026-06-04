import { motion } from "framer-motion";
import { plans } from "../data/pricingData";
import { cn } from "../lib/utils/cn";
import { Icon } from "./layout/Icon";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { GlassPanel } from "./ui/GlassPanel";

export default function PricingCards(){

    return (
    <section className="relative max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {plans.map((p, i) => {
            const price = p.yearly;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={cn(p.highlighted && "md:-mt-4")}
              >
                <GlassPanel
                  variant={p.highlighted ? "elevated" : "default"}
                  className={cn(
                    "relative h-full p-8 md:p-10 flex flex-col rounded-3xl transition-all duration-300",
                    p.highlighted
                      ? "border-primary/50 ring-1 ring-primary/30 glow-primary-strong"
                      : "hover:border-primary/30",
                  )}
                >
                  {p.highlighted && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <Badge tone="primary" className="shadow-lg shadow-primary/30">
                        <Icon name="star" className="text-[14px]" filled />
                        Le plus choisi
                      </Badge>
                    </div>
                  )}

                  <h3 className={cn("text-[22px] font-bold mb-1.5", p.highlighted ? "text-primary" : "text-on-surface")}>
                    {p.name}
                  </h3>
                  <p className="text-on-surface-variant text-[14px] mb-8 min-h-[44px]">{p.desc}</p>

                  <div className="mb-8">
                    {price === null ? (
                      <div className="text-[40px] font-extrabold tracking-tight leading-none">Sur devis</div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className={cn("font-extrabold tracking-tight leading-none", p.highlighted ? "text-[56px] text-on-surface" : "text-[44px] text-on-surface")}>
                          {price.toLocaleString("fr-FR")}
                        </span>
                        <span className="text-[24px] font-semibold text-on-surface-variant">€</span>
                        <span className="text-[14px] text-on-surface-variant ml-1">
                          /{"mois · annuel"}
                        </span>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-10 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[14px]">
                        <span
                          className={cn(
                            "shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                            p.highlighted ? "bg-primary text-on-primary" : "bg-primary/15 text-primary",
                          )}
                        >
                          <Icon name="check" className="text-[12px]" />
                        </span>
                        <span className="text-on-surface">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    to="/contact"
                    variant={p.highlighted ? "primary" : "secondary"}
                    size="lg"
                    className="w-full"
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
    )
}