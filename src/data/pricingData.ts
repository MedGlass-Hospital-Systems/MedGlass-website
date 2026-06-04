export const plans = [
  {
    name: "Service",
    desc: "Pour un service hospitalier unique",
    yearly: 150,
    features: [
      "Autant de soignants dans le service",
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
    yearly: 1400,
    features: [
      "Autant de service présent dans l'établissement",
      "Création de compétence",
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
      "SLA dédié",
      "Accompagnement projet",
      "Formation équipes",
    ],
    cta: "Nous contacter",
  },
];

export const comparisonRows: { label: string; values: (string | boolean)[] }[] = [
  { label: "Multi-services", values: [false, true, true] },
  { label: "Multi-établissements", values: [false, false, true] },
  { label: "Génération IA", values: [true, true, true] },
  { label: "Échange de gardes", values: [true, true, true] },
  { label: "Application mobile", values: [true, true, true] },
  { label: "Intégration SIH", values: [false, true, true] },
  { label: "Support client dédié", values: [false, true, true] },
];

export const faqs = [
  {
    q: "Y a-t-il une période d'engagement ?",
    a: "Oui. MedGlass est avec un engagement de 1 ans. Les résiliations se feront via votre espace et sera effective à la fin de votre contrat.",
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