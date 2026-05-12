import { motion } from "framer-motion";
import { GlassPanel } from "../components/ui/GlassPanel";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Icon } from "../components/layout/Icon";

interface Feature {
  i: string;
  t: string;
  d: string;
  tone: "primary" | "secondary" | "tertiary";
  highlights: { i: string; l: string }[];
}

const features: Feature[] = [
  {
    i: "auto_fix",
    t: "Génération automatique par IA",
    d: "Un assistant IA propose un planning optimal en quelques secondes en respectant règles de service, contrats, compétences et préférences individuelles.",
    tone: "primary",
    highlights: [
      { i: "speed", l: "12 secondes en moyenne" },
      { i: "rule", l: "Règles métier respectées" },
      { i: "psychology", l: "Apprentissage continu" },
    ],
  },
  {
    i: "swap_horiz",
    t: "Échange de gardes",
    d: "Demandes d'échange et remplacements validés par le cadre. Traçabilité complète et notifications instantanées à l'équipe concernée.",
    tone: "secondary",
    highlights: [
      { i: "verified", l: "Validation hiérarchique" },
      { i: "notifications", l: "Notifications temps réel" },
      { i: "history", l: "Historique complet" },
    ],
  },
  {
    i: "event_busy",
    t: "Congés & absences",
    d: "Demandes de congés, RTT, formation, maladie. Validation hiérarchique et impact temps réel sur le planning du service.",
    tone: "tertiary",
    highlights: [
      { i: "fact_check", l: "Workflow de validation" },
      { i: "calendar_month", l: "Impact prévisionnel" },
      { i: "summarize", l: "Compteurs automatiques" },
    ],
  },
  {
    i: "warning",
    t: "Détection des conflits",
    d: "Repos non respectés, gardes consécutives, sous-effectif critique : l'application alerte avant publication et propose des correctifs.",
    tone: "primary",
    highlights: [
      { i: "shield", l: "Conformité Code du travail" },
      { i: "lightbulb", l: "Suggestions correctives" },
      { i: "priority_high", l: "Alertes priorisées" },
    ],
  },
  {
    i: "psychology",
    t: "Matrice de compétences",
    d: "Garantissez qu'un soignant qualifié est toujours présent : réa, bloc, néonat, urgences vitales, gardes de spécialité.",
    tone: "tertiary",
    highlights: [
      { i: "verified_user", l: "Habilitations vérifiées" },
      { i: "school", l: "Suivi formations" },
      { i: "diversity_3", l: "Mix de séniorité" },
    ],
  },
  {
    i: "schedule",
    t: "Compteurs d'heures",
    d: "Suivi temps réel des heures supplémentaires, du temps de travail effectif, du forfait jours et des récupérations.",
    tone: "secondary",
    highlights: [
      { i: "timer", l: "Calcul automatique" },
      { i: "balance", l: "Équité entre soignants" },
      { i: "download", l: "Export RH" },
    ],
  },
  {
    i: "groups",
    t: "Multi-services & sites",
    d: "Gérez plusieurs pôles, services et établissements depuis une seule plateforme avec droits d'accès granulaires.",
    tone: "primary",
    highlights: [
      { i: "domain", l: "Multi-établissements" },
      { i: "admin_panel_settings", l: "Droits granulaires" },
      { i: "hub", l: "Vue consolidée" },
    ],
  },
  {
    i: "phone_iphone",
    t: "Application mobile",
    d: "Vos soignants consultent leur planning, posent leurs congés et échangent leurs gardes depuis leur téléphone.",
    tone: "tertiary",
    highlights: [
      { i: "smartphone", l: "iOS & Android" },
      { i: "wifi_off", l: "Mode hors-ligne" },
      { i: "fingerprint", l: "FaceID / TouchID" },
    ],
  },
  {
    i: "lock",
    t: "Sécurité & conformité",
    d: "Hébergement de Données de Santé certifié, double authentification, chiffrement de bout en bout et journalisation.",
    tone: "secondary",
    highlights: [
      { i: "verified", l: "HDS certifié" },
      { i: "encrypted", l: "Chiffrement E2E" },
      { i: "policy", l: "Conformité RGPD" },
    ],
  },
];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                <GlassPanel className="group h-full p-7 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col">
                  <div className={`absolute -right-12 -top-12 w-44 h-44 rounded-full blur-3xl opacity-50 group-hover:opacity-90 transition-opacity ${tc.orb}`} />
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

      {/* CTA */}
      <section className="relative max-w-4xl mx-auto px-4 md:px-8 pb-24 text-center">
        <GlassPanel variant="elevated" className="p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 via-tertiary/15 to-secondary/15 blur-3xl opacity-40" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight leading-tight">
              Voir MedGlass <span className="text-gradient">sur votre service</span>
            </h2>
            <p className="text-on-surface-variant text-[17px] max-w-xl mx-auto">
              30 minutes pour comprendre ce que MedGlass change dans votre quotidien. Démo personnalisée, données fictives, zéro engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button to="/contact" size="lg" icon="arrow_forward" iconPosition="right">
                Réserver une démo
              </Button>
              <Button to="/pricing" variant="secondary" size="lg">
                Voir les tarifs
              </Button>
            </div>
          </div>
        </GlassPanel>
      </section>
    </>
  );
}
