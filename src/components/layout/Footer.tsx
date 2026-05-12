import { Link } from "react-router-dom";
import { Icon } from "./Icon";

const productLinks = [
  { to: "/features", label: "Fonctionnalités" },
  { to: "/pricing", label: "Tarifs" },
  { to: "/#securite", label: "Sécurité & RGPD" },
];

const resourceLinks = [
  { to: "/contact", label: "Contact" },
  { to: "/contact", label: "Centre d'aide" },
  { to: "/contact", label: "Documentation" },
];

const legalLinks = [
  { to: "/legal/privacy", label: "Confidentialité" },
  { to: "/legal/terms", label: "CGU" },
  { to: "/legal/security", label: "Sécurité des données" },
];

const certifications = [
  { icon: "verified_user", label: "Hébergement HDS" },
  { icon: "lock", label: "RGPD" },
  { icon: "shield", label: "ISO 27001" },
];

export function Footer() {
  return (
    <footer className="relative mt-20 pt-16 pb-8 px-4 md:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-outline-variant/40 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/30 to-tertiary/20 border border-primary/30 flex items-center justify-center">
                <Icon name="local_hospital" className="text-primary text-[20px]" filled />
              </span>
              <span className="font-bold text-[18px] tracking-tight text-on-surface">
                Med<span className="text-primary">Glass</span>
              </span>
            </Link>
            <p className="text-body-sm text-on-surface-variant max-w-sm leading-relaxed">
              La plateforme de planification médicale qui libère du temps soignant. Conçue avec et pour les établissements de santé français.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {certifications.map((c) => (
                <div
                  key={c.label}
                  className="glass-chip rounded-full px-3 py-1.5 flex items-center gap-1.5 text-[11px] text-on-surface-variant"
                >
                  <Icon name={c.icon} className="text-success text-[14px]" filled />
                  {c.label}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-label-caps text-label-caps text-primary mb-4">Produit</h4>
            <ul className="space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-label-caps text-label-caps text-primary mb-4">Ressources</h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-label-caps text-label-caps text-primary mb-4">Légal</h4>
            <ul className="space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-on-surface-variant">
          <p>© {new Date().getFullYear()} MedGlass Hospital Systems · Conçu en France</p>
        </div>
      </div>
    </footer>
  );
}
