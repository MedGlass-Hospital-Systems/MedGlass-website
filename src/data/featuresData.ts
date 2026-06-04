interface Feature {
  i: string;
  t: string;
  d: string;
  tone: "primary" | "secondary" | "tertiary";
  highlights: { i: string; l: string }[];
}


export const features: Feature[] = [
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