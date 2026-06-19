export const steps = [
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

export const principles = [
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

export const features = [
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

export const personas = [
  { i: "medical_services", t: "Praticiens", d: "Gardes, astreintes, plages opératoires." },
  { i: "school", t: "Internes", d: "Maquettes, semestres, gardes obligatoires." },
  { i: "vaccines", t: "IDE & cadres", d: "Roulements, transmissions, encadrement." },
  { i: "support_agent", t: "DRH & directions", d: "Pilotage, conformité, prévisionnel." },
];

export const compliance = [
  "Hébergement HDS certifié",
  "Conformité RGPD documentée",
  "Authentification forte (MFA, SSO Pro Santé)",
  "Journalisation et traçabilité complète",
  "Sauvegardes chiffrées quotidiennes",
];