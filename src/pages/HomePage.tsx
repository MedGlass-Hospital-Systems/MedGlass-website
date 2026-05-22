import { motion } from "framer-motion";
import { GlassPanel } from "../components/ui/GlassPanel";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Icon } from "../components/layout/Icon";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const steps = [
  {
    n: "01",
    i: "upload_file",
    t: "Importez votre service",
    d: "Équipes, contrats, règles de service, compétences. Nous reprenons vos données existantes (Excel, anciens outils) en 1 session.",
    tone: "primary" as const,
  },
  {
    n: "02",
    i: "auto_fix",
    t: "L'IA propose un planning",
    d: "L'assistant génère un planning conforme à vos règles, respectant repos, compétences et préférences. Vous gardez la main sur chaque décision.",
    tone: "tertiary" as const,
  },
  {
    n: "03",
    i: "phone_iphone",
    t: "Diffusez aux équipes",
    d: "Vos soignants consultent leur planning sur mobile, demandent leurs congés et échangent leurs gardes. Vous suivez tout depuis la console.",
    tone: "secondary" as const,
  },
];

const principles = [
  {
    i: "groups",
    t: "Co-conçu avec des soignants",
    d: "Praticiens, cadres, IDE et DRH participent à chaque décision produit. Pas de design « pour les hôpitaux » sans les hôpitaux.",
  },
  {
    i: "rule",
    t: "Conformité par défaut",
    d: "Code du travail, conventions collectives, repos compensateurs : les règles métier sont natives, pas un module en option.",
  },
  {
    i: "lock",
    t: "Souveraineté française",
    d: "Hébergement HDS en France, données chiffrées de bout en bout, aucune dépendance à des services hors UE.",
  },
  {
    i: "support_agent",
    t: "Accompagnement humain",
    d: "Migration, formation, paramétrage : une équipe dédiée vous accompagne. Pas seulement un logiciel, un partenaire.",
  },
];

const features = [
  {
    i: "auto_fix",
    t: "Génération par IA",
    d: "L'assistant propose un planning optimal en quelques secondes en respectant règles de service, contrats et compétences.",
    span: "md:col-span-2",
    tone: "primary" as const,
  },
  {
    i: "psychology",
    t: "Matrice de compétences",
    d: "Garantissez qu'un soignant qualifié est toujours présent.",
    span: "",
    tone: "tertiary" as const,
  },
  {
    i: "swap_horiz",
    t: "Échange de gardes",
    d: "Demandes et remplacements validés par le cadre, traçabilité complète.",
    span: "",
    tone: "secondary" as const,
  },
  {
    i: "warning",
    t: "Détection des conflits",
    d: "Repos non respectés, gardes consécutives, sous-effectif : l'application alerte avant publication.",
    span: "md:col-span-2",
    tone: "primary" as const,
  },
];

const personas = [
  { i: "medical_services", t: "Praticiens", d: "Gardes, astreintes, plages opératoires." },
  { i: "school", t: "Internes", d: "Maquettes, semestres, gardes obligatoires." },
  { i: "vaccines", t: "IDE & cadres", d: "Roulements, transmissions, encadrement." },
  { i: "support_agent", t: "DRH & directions", d: "Pilotage, conformité, prévisionnel." },
];

const compliance = [
  "Hébergement HDS certifié",
  "Conformité RGPD documentée",
  "Authentification forte (MFA, SSO Pro Santé)",
  "Journalisation et traçabilité complète",
  "Sauvegardes chiffrées quotidiennes",
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-7">
            <h1 className="text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.05] font-extrabold tracking-tight text-on-surface">
              La planification médicale,{" "}
              <span className="text-gradient">enfin sereine.</span>
            </h1>
            <p className="text-on-surface-variant text-[18px] leading-relaxed max-w-xl">
              MedGlass automatise les plannings de gardes, astreintes et roulements pour les services hospitaliers. Conçu avec des praticiens, des cadres et des DRH d'établissements de santé français.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button to="/contact" size="lg" icon="arrow_forward" iconPosition="right">
                Demander une démo
              </Button>
              <Button to="/features" variant="secondary" size="lg" icon="play_circle">
                Voir les fonctionnalités
              </Button>
            </div>
            <div className="flex flex-wrap gap-5 pt-2 text-[13px] text-on-surface-variant">
              <span className="flex items-center gap-2">
                <Icon name="check_circle" className="text-success text-[18px]" filled />
                <a href="https://www.ovhcloud.com/fr/compliance/hds/"> Herbergement certifié HDS</a>
              </span>
              <span className="flex items-center gap-2">
                <Icon name="check_circle" className="text-success text-[18px]" filled />
                <a href="https://www.cnil.fr/fr/comprendre-le-rgpd/les-six-grands-principes-du-rgpd">Conforme RGPD</a>
              </span>
              <span className="flex items-center gap-2">
                <Icon name="check_circle" className="text-success text-[18px]" filled />
                <a href="https://www.ovhcloud.com/fr/compliance/iso-27001-27017-27018/">Sans engagement</a>
              </span>
            </div>
          </motion.div>

          {/* Hero visual — Bento dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative animate-float-tilt"
          >
            <div className="absolute -inset-8 bg-linear-to-tr from-primary/20 via-tertiary/15 to-secondary/20 blur-3xl rounded-full opacity-70 animate-pulse-glow" />
            <GlassPanel variant="elevated" className="relative p-3 rounded-2xl">
              <div className="rounded-2xl bg-surface-container-low/50 border border-outline-variant/30 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-outline-variant/30">
                  <span className="w-2.5 h-2.5 rounded-full bg-error/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-warning/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-success/60" />
                  <span className="ml-2 text-[11px] text-on-surface-variant font-mono">app.medglass.fr/planning</span>
                </div>

                <div className="p-4 grid grid-cols-3 gap-3">
                  <div className="col-span-3 glass-chip rounded-xl p-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[12px] font-semibold text-on-surface">Capacité du service</span>
                      <Icon name="insights" className="text-primary text-[18px]" />
                    </div>
                    <div className="h-20 relative overflow-hidden rounded-lg bg-linear-to-b from-primary/10 to-transparent">
                      <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                        <defs>
                          <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#adc6ff" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#adc6ff" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path d="M0,22 C15,22 25,8 40,12 C55,16 65,4 80,10 L100,8 L100,30 L0,30 Z" fill="url(#grad)" />
                        <path d="M0,22 C15,22 25,8 40,12 C55,16 65,4 80,10 L100,8" stroke="#adc6ff" strokeWidth="1.5" fill="none" />
                      </svg>
                    </div>
                  </div>

                  <div className="glass-chip rounded-xl p-4 flex flex-col gap-2">
                    <Icon name="psychology" className="text-tertiary text-[22px]" filled />
                    <span className="text-[10px] uppercase tracking-wider text-on-surface-variant">Compétences</span>
                    <span className="text-[24px] font-bold text-tertiary leading-none">94<span className="text-[14px]">%</span></span>
                  </div>

                  <div className="glass-chip rounded-xl p-4 flex flex-col gap-2">
                    <Icon name="group" className="text-secondary text-[22px]" filled />
                    <span className="text-[10px] uppercase tracking-wider text-on-surface-variant">Effectif</span>
                    <span className="text-[16px] font-bold text-secondary leading-tight">Optimal</span>
                  </div>

                  <div className="glass-chip rounded-xl p-4 flex flex-col gap-2">
                    <Icon name="notifications_active" className="text-warning text-[22px]" filled />
                    <span className="text-[10px] uppercase tracking-wider text-on-surface-variant">Alertes</span>
                    <span className="text-[24px] font-bold text-warning leading-none">3</span>
                  </div>

                  <div className="col-span-3 glass-chip rounded-xl p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[11px] text-on-surface-variant">Sem. 21 · Mai</span>
                      <span className="text-[10px] text-primary">+14 gardes</span>
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {Array.from({ length: 28 }).map((_, i) => {
                        const filled = i % 4 !== 0;
                        const tone = i % 5 === 0 ? "bg-tertiary/30 border-tertiary/40" : "bg-primary/20 border-primary/30";
                        return (
                          <div
                            key={i}
                            className={`h-6 rounded ${filled ? `${tone} border` : "bg-white/3 border border-white/5"}`}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </GlassPanel>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-4 -left-6 glass-card-elevated rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl"
            >
              <span className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center">
                <Icon name="check_circle" className="text-success text-[22px]" filled />
              </span>
              <div>
                <div className="text-[12px] font-semibold text-on-surface">Planning validé</div>
                <div className="text-[10px] text-on-surface-variant">il y a 2 min</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="absolute -bottom-5 -right-4 glass-card-elevated rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl"
            >
              <span className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Icon name="auto_awesome" className="text-primary text-[22px]" filled />
              </span>
              <div>
                <div className="text-[12px] font-semibold text-on-surface">IA · Génération</div>
                <div className="text-[10px] text-on-surface-variant">12s · 0 conflit</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <Badge tone="primary">
            <Icon name="route" className="text-[14px]" />
            Comment ça marche
          </Badge>
          <h2 className="text-[36px] md:text-[44px] font-bold tracking-tight">
            De vos plannings Excel à un système{" "}
            <span className="text-gradient">vivant</span>, en 3 étapes
          </h2>
          <p className="text-on-surface-variant text-[17px]">
            Pas besoin de tout migrer d'un coup. On démarre par un service, on étend ensuite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-px bg-linear-to-r from-transparent via-outline-variant/50 to-transparent" aria-hidden />

          {steps.map((s, i) => {
            const tone =
              s.tone === "primary"
                ? "bg-primary/15 text-primary border-primary/30"
                : s.tone === "tertiary"
                ? "bg-tertiary/15 text-tertiary border-tertiary/30"
                : "bg-secondary/15 text-secondary border-secondary/30";
            const orb =
              s.tone === "primary"
                ? "bg-primary/25"
                : s.tone === "tertiary"
                ? "bg-tertiary/25"
                : "bg-secondary/25";
            return (
              <motion.div
                key={s.n}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className="relative"
              >
                <GlassPanel className="h-full p-7 relative overflow-hidden group hover:border-primary/30 transition-colors">
                  <div className={`absolute -right-12 -top-12 w-40 h-40 rounded-full blur-3xl opacity-50 group-hover:opacity-90 transition-opacity ${orb}`} />
                  <div className="relative z-10 space-y-5">
                    <div className="flex items-center justify-between">
                      <span className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${tone}`}>
                        <Icon name={s.i} className="text-[26px]" filled />
                      </span>
                      <span className="font-extrabold text-[40px] leading-none text-on-surface-variant/20 tabular-nums">
                        {s.n}
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface">{s.t}</h3>
                    <p className="text-on-surface-variant text-[15px] leading-relaxed">{s.d}</p>
                  </div>
                </GlassPanel>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* OUR APPROACH / PRINCIPLES */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-24 space-y-5">
            <Badge tone="tertiary">
              <Icon name="favorite" className="text-[14px]" filled />
              Notre approche
            </Badge>
            <h2 className="text-[36px] md:text-[44px] font-bold tracking-tight leading-[1.1]">
              Un produit{" "}
              <span className="text-gradient">construit avec</span>{" "}
              celles et ceux qui l'utilisent
            </h2>
            <p className="text-on-surface-variant text-[17px] leading-relaxed">
              MedGlass est un projet jeune, lancé en 2026 avec un parti pris clair : pas de feature inutile, pas de modèle propriétaire fermé, pas de dépendances hors France. Chaque ligne de code répond à un besoin remonté du terrain.
            </p>
            <div className="pt-2">
              <Button to="/contact" variant="secondary" size="md" icon="forum" iconPosition="left">
                Participez à la conception
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {principles.map((p, i) => (
              <motion.div
                key={p.t}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
              >
                <GlassPanel className="p-6 h-full hover:border-primary/30 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-4">
                    <Icon name={p.i} className="text-[24px]" filled />
                  </div>
                  <h3 className="font-semibold text-[17px] mb-2 text-on-surface leading-snug">{p.t}</h3>
                  <p className="text-[14px] text-on-surface-variant leading-relaxed">{p.d}</p>
                </GlassPanel>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES — BENTO */}
      <section id="fonctionnalites" className="relative max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <Badge tone="tertiary">Fonctionnalités</Badge>
          <h2 className="text-[36px] md:text-[44px] font-bold tracking-tight">
            Tout ce qu'il faut pour un planning hospitalier{" "}
            <span className="text-gradient">qui tient la route</span>
          </h2>
          <p className="text-on-surface-variant text-[17px]">
            Pensé pour les services 24/7, multi-sites, multi-conventions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.t}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={i}
              className={f.span}
            >
              <GlassPanel className="group h-full p-7 hover:border-primary/40 transition-colors relative overflow-hidden">
                <div
                  className={`absolute -right-12 -top-12 w-40 h-40 rounded-full blur-3xl opacity-50 group-hover:opacity-90 transition-opacity ${
                    f.tone === "primary"
                      ? "bg-primary/30"
                      : f.tone === "tertiary"
                      ? "bg-tertiary/30"
                      : "bg-secondary/30"
                  }`}
                />
                <div className="relative z-10 space-y-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      f.tone === "primary"
                        ? "bg-primary/15 text-primary"
                        : f.tone === "tertiary"
                        ? "bg-tertiary/15 text-tertiary"
                        : "bg-secondary/15 text-secondary"
                    }`}
                  >
                    <Icon name={f.i} className="text-[26px]" filled />
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">{f.t}</h3>
                  <p className="text-on-surface-variant text-[15px] leading-relaxed">{f.d}</p>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button to="/features" variant="ghost" size="md" icon="arrow_forward" iconPosition="right">
            Toutes les fonctionnalités
          </Button>
        </div>
      </section>

      {/* PERSONAS */}
      <section id="metiers" className="relative max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <Badge tone="secondary">Pour qui ?</Badge>
          <h2 className="text-[36px] md:text-[44px] font-bold tracking-tight">
            Conçu pour <span className="text-gradient">tous les métiers</span> de l'hôpital
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {personas.map((p, i) => (
            <motion.div
              key={p.t}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={i}
            >
              <GlassPanel className="p-6 h-full hover:-translate-y-1 hover:border-primary/30 transition-all">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Icon name={p.i} className="text-[24px]" filled />
                </div>
                <h3 className="font-semibold text-[18px] mb-1.5 text-on-surface">{p.t}</h3>
                <p className="text-[14px] text-on-surface-variant">{p.d}</p>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECURITY */}
      <section id="securite" className="relative max-w-7xl mx-auto px-4 md:px-8 py-20">
        <GlassPanel variant="elevated" className="p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center overflow-hidden relative">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-success/15 blur-3xl" />
          <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative z-10 space-y-5">
            <Badge tone="success">
              <Icon name="verified" className="text-[14px]" filled />
              Sécurité & conformité
            </Badge>
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight">
              Vos données patients ne quittent jamais la France
            </h2>
            <p className="text-on-surface-variant text-[17px]">
              MedGlass est hébergé chez un Hébergeur de Données de Santé (HDS) certifié, en conformité avec le RGPD. Toutes les communications sont chiffrées de bout en bout.
            </p>
            <ul className="space-y-3">
              {compliance.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[15px]">
                  <Icon name="check_circle" className="text-success text-[20px] mt-0.5" filled />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 grid grid-cols-2 gap-4">
            {[
              { label: "HDS", sub: "Hébergement Données Santé", icon: "health_and_safety" },
              { label: "RGPD", sub: "Conformité européenne", icon: "shield" },
              { label: "ISO 27001", sub: "Sécurité de l'information", icon: "lock" },
              { label: "ANSSI", sub: "Recommandations", icon: "verified_user" },
            ].map((c) => (
              <div
                key={c.label}
                className="glass-card rounded-2xl aspect-square flex flex-col items-center justify-center text-center p-4 hover:border-primary/40 transition-colors group"
              >
                <Icon name={c.icon} className="text-primary text-[28px] mb-2 group-hover:scale-110 transition-transform" filled />
                <div className="font-bold text-on-surface text-[18px]">{c.label}</div>
                <div className="text-[10px] uppercase tracking-wider text-on-surface-variant mt-1">{c.sub}</div>
              </div>
            ))}
          </div>
        </GlassPanel>
      </section>

      {/* CTA */}
      <section className="relative max-w-4xl mx-auto px-4 md:px-8 py-24 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-[36px] md:text-[52px] font-extrabold tracking-tight mb-4 leading-tight">
            Prêt à libérer <span className="text-gradient">du temps soignant</span> ?
          </h2>
          <p className="text-on-surface-variant text-[18px] mb-9 max-w-xl mx-auto">
            Démonstration personnalisée sur votre service, sans engagement. Migration assistée depuis votre outil actuel.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button to="/contact" size="lg" icon="arrow_forward" iconPosition="right">
              Demander une démo
            </Button>
            <Button to="/pricing" variant="secondary" size="lg">
              Voir les tarifs
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
