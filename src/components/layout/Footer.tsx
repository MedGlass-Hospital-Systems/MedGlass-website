import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full py-10 px-4 md:px-8 bg-background/70 backdrop-blur-[20px] border-t border-outline-variant/20 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-2 md:col-span-1">
          <div className="text-headline-md text-primary font-bold mb-2">MedGlass</div>
          <p className="text-body-sm text-on-surface-variant">
            La plateforme de planification dédiée aux établissements de santé.
          </p>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-on-surface mb-3">Produit</h4>
          <ul className="space-y-2 text-body-sm text-on-surface-variant">
            <li><Link to="/#fonctionnalites" className="hover:text-primary">Fonctionnalités</Link></li>
            <li><Link to="/pricing" className="hover:text-primary">Tarifs</Link></li>
            <li><Link to="/#securite" className="hover:text-primary">Sécurité & RGPD</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-on-surface mb-3">Ressources</h4>
          <ul className="space-y-2 text-body-sm text-on-surface-variant">
            <li><Link to="/help" className="hover:text-primary">Centre d'aide</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-on-surface mb-3">Légal</h4>
          <ul className="space-y-2 text-body-sm text-on-surface-variant">
            <li><Link to="/legal/privacy" className="hover:text-primary">Confidentialité</Link></li>
            <li><Link to="/legal/terms" className="hover:text-primary">CGU</Link></li>
            <li><Link to="/legal/security" className="hover:text-primary">Sécurité des données</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 pt-6 border-t border-white/5">
        <p className="text-body-sm text-on-surface-variant">
          © {new Date().getFullYear()} MedGlass Hospital Systems. Tous droits réservés.
        </p>
        <p className="text-body-sm text-on-surface-variant">
          Hébergement de données de santé certifié HDS · Conformité RGPD
        </p>
      </div>
    </footer>
  );
}
