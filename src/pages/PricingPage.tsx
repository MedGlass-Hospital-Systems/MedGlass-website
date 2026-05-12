import { motion } from "framer-motion";
import { useState } from "react";
import { GlassPanel } from "../components/ui/GlassPanel";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Icon } from "../components/layout/Icon";
import { cn } from "../lib/utils/cn";

type Cycle = "monthly" | "yearly";

const plans = [
  {
    name: "Service",
    desc: "Pour un service hospitalier unique",
    monthly: 490,
    yearly: 392,
    features: [
      "Jusqu'à 30 soignants",
      "Génération IA",
      "Échange de gardes",
      "Application mobile",
      "Support email",
    ],
    cta: "Démarrer",
  },
  {
    name: "Établissement",
    desc: "Multi-services, sites uniques",
    monthly: 1990,
    yearly: 1592,
    features: [
      "Jusqu'à 300 soignants",
      "Multi-services illimités",
      "Compétences avancées",
      "Intégration SIH",
      "Support prioritaire",
      "Compteurs RH",
    ],
    highlighted: true,
    cta: "Choisir",
  },
  {
    name: "Groupe",
    desc: "GHT, multi-établissements",
    monthly: null,
    yearly: null,
    features: [
      "Soignants illimités",
      "Multi-sites & GHT",
      "SSO Pro Santé",
      "SLA dédié",
      "Accompagnement projet",
      "Formation équipes",
    ],
    cta: "Nous contacter",
  },
];

const comparisonRows: { label: string; values: (string | boolean)[] }[] = [
  { label: "Soignants inclus", values: ["30", "300", "Illimité"] },
  { label: "Multi-services", values: [false, true, true] },
  { label: "Multi-établissements", values: [false, false, true] },
  { label: "Génération IA", values: [true, true, true] },
  { label: "Échange de gardes", values: [true, true, true] },
  { label: "Application mobile", values: [true, true, true] },
  { label: "Intégration SIH", values: [false, true, true] },
  { label: "SSO Pro Santé Connect", values: [false, false, true] },
  { label: "Support", values: ["Email", "Prioritaire", "SLA dédié"] },
];

const faqs = [
  {
    q: "Y a-t-il une période d'engagement ?",
    a: "Non. MedGlass est sans engagement, vous pouvez résilier à tout moment. Nous offrons 14 jours d'essai gratuit sur l'offre Service.",
  },
  {
    q: "Comment se passe la migration depuis notre outil actuel ?",
    a: "Nous prenons en charge l'import de vos données (équipes, contrats, plannings en cours) et formons votre équipe en 1 à 3 sessions selon la taille du service.",
  },
  {
    q: "Les données sont-elles vraiment hébergées en France ?",
    a: "Oui, 100 %. Notre hébergeur est certifié HDS (Hébergeur de Données de Santé) et tous les serveurs sont localisés en France métropolitaine.",
  },
  {
    q: "Quels modes de paiement acceptez-vous ?",
    a: "Prélèvement SEPA, virement bancaire ou bon de commande administratif pour les établissements publics. Facturation mensuelle ou annuelle.",
  },
];

export default function PricingPage() {
  const [cycle, setCycle] = useState<Cycle>("monthly");

  return (
    <>
      {/* HEADER */}
      <section className="relative max-w-4xl mx-auto px-4 md:px-8 pt-20 md:pt-28 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <Badge tone="primary">
            <Icon name="sell" className="text-[14px]" />
            Tarifs
          </Badge>
          <h1 className="text-[44px] md:text-[60px] font-extrabold tracking-tight leading-[1.05]">
            Une formule pour <span className="text-gradient">chaque structure</span>
          </h1>
          <p className="text-on-surface-variant text-[18px]">
            Tarifs HT mensuels. Sans engagement, résiliable à tout moment.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <div className="mt-10 inline-flex items-center glass-card rounded-full p-1.5">
          <button
            onClick={() => setCycle("monthly")}
            className={cn(
              "px-5 py-2 rounded-full text-[13px] font-semibold transition-all",
              cycle === "monthly" ? "bg-primary text-on-primary" : "text-on-surface-variant hover:text-on-surface",
            )}
          >
            Mensuel
          </button>
          <button
            onClick={() => setCycle("yearly")}
            className={cn(
              "px-5 py-2 rounded-full text-[13px] font-semibold transition-all flex items-center gap-2",
              cycle === "yearly" ? "bg-primary text-on-primary" : "text-on-surface-variant hover:text-on-surface",
            )}
          >
            Annuel
            <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-success/30 text-success">
              -20%
            </span>
          </button>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {plans.map((p, i) => {
            const price = cycle === "monthly" ? p.monthly : p.yearly;
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
                          /{cycle === "monthly" ? "mois" : "mois · annuel"}
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

      {/* COMPARISON TABLE */}
      <section className="relative max-w-6xl mx-auto px-4 md:px-8 pb-24">
        <div className="text-center mb-10 space-y-3">
          <Badge tone="secondary">Comparaison</Badge>
          <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight">
            Qu'est-ce qui change entre les offres ?
          </h2>
        </div>
        <GlassPanel className="p-2 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-outline-variant/30">
                  <th className="text-left p-4 text-[12px] font-label-caps tracking-[0.08em] uppercase text-on-surface-variant">Fonctionnalité</th>
                  {plans.map((p) => (
                    <th key={p.name} className={cn("p-4 text-[13px] font-bold", p.highlighted ? "text-primary" : "text-on-surface")}>
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={row.label}
                    className={cn(
                      "border-b border-outline-variant/20 last:border-0",
                      idx % 2 === 1 && "bg-white/[0.015]",
                    )}
                  >
                    <td className="p-4 text-[14px] text-on-surface-variant">{row.label}</td>
                    {row.values.map((v, j) => (
                      <td key={j} className="p-4 text-center">
                        {typeof v === "boolean" ? (
                          v ? (
                            <Icon name="check_circle" className="text-success text-[20px]" filled />
                          ) : (
                            <Icon name="remove" className="text-on-surface-variant/40 text-[20px]" />
                          )
                        ) : (
                          <span className="text-[14px] font-semibold text-on-surface">{v}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassPanel>
      </section>

      {/* FAQ */}
      <section className="relative max-w-3xl mx-auto px-4 md:px-8 pb-24">
        <div className="text-center mb-10 space-y-3">
          <Badge tone="tertiary">FAQ</Badge>
          <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight">Questions fréquentes</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.details
              key={f.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group glass-card rounded-2xl px-6 py-5 cursor-pointer transition-colors hover:border-primary/30 [&[open]>summary>.icon]:rotate-45"
            >
              <summary className="flex justify-between items-center gap-4 list-none">
                <span className="font-semibold text-[16px] text-on-surface">{f.q}</span>
                <span className="icon shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-transform duration-300">
                  <Icon name="add" className="text-[18px]" />
                </span>
              </summary>
              <p className="mt-4 text-[15px] text-on-surface-variant leading-relaxed">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative max-w-4xl mx-auto px-4 md:px-8 pb-24 text-center">
        <GlassPanel variant="elevated" className="p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 via-tertiary/15 to-secondary/15 blur-3xl opacity-40" />
          <div className="relative z-10 space-y-5">
            <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight leading-tight">
              Une question sur les tarifs ?
            </h2>
            <p className="text-on-surface-variant text-[17px] max-w-xl mx-auto">
              Notre équipe répond sous 24h ouvrées et peut adapter une offre à votre contexte.
            </p>
            <div className="pt-2">
              <Button to="/contact" size="lg" icon="mail" iconPosition="left">
                Contacter l'équipe
              </Button>
            </div>
          </div>
        </GlassPanel>
      </section>
    </>
  );
}
