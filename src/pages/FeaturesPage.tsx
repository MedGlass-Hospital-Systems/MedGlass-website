import { motion } from "framer-motion";
import { GlassPanel } from "../components/ui/GlassPanel";
import { Badge } from "../components/ui/Badge";
import { Icon } from "../components/layout/Icon";
import { features } from "../data/featuresData";


const toneClasses = {
  primary: {
    icon: "bg-primary/15 text-primary",
    orb: "bg-primary/30",
    accent: "text-primary",
  },
  secondary: {
    icon: "bg-secondary/15 text-secondary",
    orb: "bg-secondary/30",
    accent: "text-secondary",
  },
  tertiary: {
    icon: "bg-tertiary/15 text-tertiary",
    orb: "bg-tertiary/30",
    accent: "text-tertiary",
  },
};

export default function FeaturesPage() {
  return (
    <>
      {/* HEADER */}
      <section className="relative max-w-4xl mx-auto px-4 md:px-8 pt-20 md:pt-28 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5"
        >
          <Badge tone="primary">
            <Icon name="dashboard" className="text-[14px]" />
            Fonctionnalités
          </Badge>
          <h1 className="text-[44px] md:text-[60px] font-extrabold tracking-tight leading-[1.05]">
            Une boîte à outils <span className="text-gradient">de précision</span><br />
            pour la santé moderne
          </h1>
          <p className="text-on-surface-variant text-[18px] max-w-2xl mx-auto leading-relaxed">
            Neuf modules conçus pour fluidifier les opérations, garantir la conformité et donner du pouvoir d'agir à vos équipes cliniques.
          </p>
        </motion.div>
      </section>

      {/* GRID */}
     <section className="relative max-w-7xl mx-auto px-4 md:px-8 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const tc = toneClasses[f.tone];
            return (
              <motion.div
                key={f.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                
                <GlassPanel className="isolate group h-full p-7 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col transform-gpu [-webkit-mask-image:linear-gradient(white,white)]">
                  
                  <div className={`absolute -right-24 -top-24 w-72 h-72 rounded-full blur-3xl opacity-50 group-hover:opacity-90 transition-opacity -z-10 ${tc.orb}`} />
                  
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className={`w-13 h-13 rounded-2xl flex items-center justify-center mb-5 ${tc.icon}`} style={{ width: 52, height: 52 }}>
                      <Icon name={f.i} className="text-[26px]" filled />
                    </div>
                    <h3 className="font-headline-md text-headline-md mb-3 text-on-surface">{f.t}</h3>
                    <p className="text-on-surface-variant text-[15px] mb-6 leading-relaxed">{f.d}</p>
                    <ul className="mt-auto pt-5 border-t border-outline-variant/30 space-y-2">
                      {f.highlights.map((h) => (
                        <li key={h.l} className="flex items-center gap-2 text-[13px] text-on-surface-variant">
                          <Icon name={h.i} className={`text-[16px] ${tc.accent}`} filled />
                          {h.l}
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassPanel>
              </motion.div>
            );
          })}
        </div>
      </section>

  
    </>
  );
}
