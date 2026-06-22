import { Link } from "react-router-dom";
import { Icon } from "./Icon";

const productLinks = [
  { to: "/NexiVia", label: "NexiVia" },
  { to: "/AegisPlan", label: "AegisPlan" },
  { to: "/DemeCare", label: "DemeCare" },
  { to: "/pricing", label: "Tarifs" },
  //{ to: "/#securite", label: "Sécurité & RGPD" },
];

const resourceLinks = [
  { to: "/contact", label: "Contact" },
  { to: "/contact", label: "Centre d'aide" },
  //{ to: "/contact", label: "Documentation" },
];

const legalLinks = [
  { to: "/legal", label: "Confidentialité" },
  { to: "/CGU", label: "CGU" },
];

const certifications = [
  { icon: "verified_user", label: "Hébergement HDS", to: "https://www.ovhcloud.com/fr/compliance/hds/" },
  { icon: "lock", label: "RGPD", to: "https://www.cnil.fr/fr/comprendre-le-rgpd/les-six-grands-principes-du-rgpd" },
  { icon: "shield", label: "ISO 27001", to: "https://www.ovhcloud.com/fr/compliance/iso-27001-27017-27018/" },
];

export function Footer() {
  return (
    <footer className="relative pt-20 pb-8 px-4 md:px-8 bg-background z-10 overflow-hidden">
      {/* Ligne de séparation supérieure avec un effet de lueur subtil */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-outline/80 to-transparent" />
      
      {/* Halo lumineux d'ambiance en arrière-plan */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 mb-16">
          
          {/* Colonne Marque & Description */}
          <div className="col-span-2 md:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <span className="relative w-12 h-12 rounded-2xl flex items-center justify-center overflow-hidden bg-surface-container/60 border border-outline/50 shadow-inner backdrop-blur-md transition-transform group-hover:scale-105">
                <img src="/logo.webp" alt="MedGlass Logo" className="w-8 h-8 object-contain" />
              </span>
              <span className="font-bold text-[22px] tracking-tight flex items-center">
                <span className="text-secondary drop-shadow-[0_0_8px_rgba(140,143,240,0.5)]">Med</span>
                <span className="text-on-surface">Glass</span>
              </span>
            </Link>
            
            <p className="text-[15px] text-on-surface-variant max-w-sm leading-relaxed">
              La plateforme de planification médicale qui libère du temps soignant. Conçue avec et pour les établissements de santé français.
            </p>
            
            {/* Certifications (Glass Chips) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {certifications.map((c) => (
                <a
                  key={c.label}
                  href={c.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface-container-high/40 border border-outline/40 backdrop-blur-md shadow-inner rounded-full px-4 py-2 flex items-center gap-2 text-[12px] font-medium text-on-surface-variant hover:text-on-surface hover:border-outline transition-colors"
                >
                  <Icon name={c.icon} className="text-success text-[16px]" filled />
                  {c.label}
                </a>
              ))}
            </div>
          </div>

          {/* Colonnes Liens */}
          <div>
            <h4 className="font-semibold text-[13px] tracking-wider uppercase text-on-surface mb-6">Produit</h4>
            <ul className="space-y-4">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-[15px] text-on-surface-variant hover:text-secondary hover:drop-shadow-[0_0_8px_rgba(140,143,240,0.5)] transition-all"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[13px] tracking-wider uppercase text-on-surface mb-6">Ressources</h4>
            <ul className="space-y-4">
              {resourceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-[15px] text-on-surface-variant hover:text-secondary hover:drop-shadow-[0_0_8px_rgba(140,143,240,0.5)] transition-all"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[13px] tracking-wider uppercase text-on-surface mb-6">Légal</h4>
            <ul className="space-y-4">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-[15px] text-on-surface-variant hover:text-secondary hover:drop-shadow-[0_0_8px_rgba(140,143,240,0.5)] transition-all"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Barre de pied de page (Copyright) */}
        <div className="pt-8 border-t border-outline/40 flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] text-on-surface-variant/80">
          <p>© {new Date().getFullYear()} MedGlass Hospital Systems</p>
          <p className="flex items-center gap-1.5">
            Conçu en France <Icon name="favorite" className="text-error text-[14px]" filled />
          </p>
        </div>
      </div>
    </footer>
  );
}