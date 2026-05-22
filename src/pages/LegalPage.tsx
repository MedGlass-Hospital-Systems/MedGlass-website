
import { GlassPanel } from "../components/ui/GlassPanel";
import { Badge } from "../components/ui/Badge";
import { Icon } from "../components/layout/Icon";

export default function LegalNoticesPage() {
  return (
    <div className="relative max-w-4xl mx-auto px-4 md:px-8 pt-24 pb-20">
      {/* En-tête */}
      <div className="mb-12 space-y-4">
        <Badge tone="secondary">Légal</Badge>
        <h1 className="text-[36px] md:text-[44px] font-bold tracking-tight text-on-surface">
          Mentions <span className="text-gradient">Légales</span>
        </h1>
        <p className="text-on-surface-variant text-[17px]">
          En vigueur au {new Date().toLocaleDateString('fr-FR')}
        </p>
      </div>

      <GlassPanel className="p-8 md:p-12 space-y-10">
        
        {/* 1. Éditeur du site */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Icon name="business" className="text-[22px]" filled />
            </div>
            <h2 className="text-[22px] font-bold text-on-surface">1. Éditeur du site</h2>
          </div>
          <div className="text-on-surface-variant text-[15px] leading-relaxed space-y-2 pl-13">
            <p>Le site <strong>medglass.fr</strong> (et l'application app.medglass.fr) est édité par la société :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Raison sociale :</strong> [Nom de votre société, ex: MEDGLASS SAS]</li>
              <li><strong>Capital social :</strong> [Montant] €</li>
              <li><strong>Siège social :</strong> [Votre adresse complète]</li>
              <li><strong>RCS :</strong> Immatriculée au Registre du Commerce et des Sociétés de [Ville] sous le numéro [Numéro SIREN]</li>
              <li><strong>N° de TVA Intracommunautaire :</strong> [Numéro de TVA]</li>
              <li><strong>Email :</strong> contact@medglass.fr</li>
              <li><strong>Téléphone :</strong> [Votre numéro de téléphone]</li>
            </ul>
          </div>
        </section>

        {/* 2. Directeur de la publication */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary">
              <Icon name="person" className="text-[22px]" filled />
            </div>
            <h2 className="text-[22px] font-bold text-on-surface">2. Directeur de la publication</h2>
          </div>
          <div className="text-on-surface-variant text-[15px] leading-relaxed pl-13">
            <p>Le Directeur de la publication est <strong>[Prénom Nom du dirigeant ou responsable]</strong>, en qualité de [Fonction, ex: Président].</p>
          </div>
        </section>

        {/* 3. Hébergement */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
              <Icon name="dns" className="text-[22px]" filled />
            </div>
            <h2 className="text-[22px] font-bold text-on-surface">3. Hébergement du site et de l'application</h2>
          </div>
          <div className="text-on-surface-variant text-[15px] leading-relaxed space-y-2 pl-13">
            <p>Afin de garantir la souveraineté et la sécurité des données, le site vitrine ainsi que l'application de planification MedGlass sont hébergés exclusivement en France par un <strong>Hébergeur de Données de Santé (HDS) certifié</strong>.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Hébergeur :</strong> [Nom de l'hébergeur, ex: OVH Healthcare / Scaleway / Outscale]</li>
              <li><strong>Siège social de l'hébergeur :</strong> [Adresse de l'hébergeur]</li>
              <li><strong>Contact hébergeur :</strong> [Téléphone ou site web de l'hébergeur]</li>
            </ul>
          </div>
        </section>

        {/* 4. Traitement des données et RGPD */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center text-success">
              <Icon name="shield" className="text-[22px]" filled />
            </div>
            <h2 className="text-[22px] font-bold text-on-surface">4. Données personnelles et Confidentialité</h2>
          </div>
          <div className="text-on-surface-variant text-[15px] leading-relaxed space-y-4 pl-13">
            <p>
              <strong>Nature des données traitées :</strong> La solution MedGlass est un outil de planification strictement dédié à la gestion des ressources humaines médicales. À ce titre, le logiciel traite uniquement des données administratives et RH (noms, adresses, postes, compétences et horaires des médecins et soignants). 
              <br/><br/>
              <strong>Aucune donnée de santé :</strong> MedGlass ne collecte, ne stocke et ne traite <u>aucune donnée médicale, clinique ou critique relative aux patients</u>.
            </p>
            <p>
              Conformément aux dispositions de la loi n° 78-17 du 6 janvier 1978 modifiée, relative à l'informatique, aux fichiers et aux libertés, et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de portabilité et d'effacement de vos données personnelles.
            </p>
            <p>
              Pour exercer ces droits ou pour toute question sur le traitement de vos données, vous pouvez contacter notre Délégué à la Protection des Données (DPO) à l'adresse suivante : <strong>dpo@medglass.fr</strong> ou par courrier à l'adresse du siège social.
            </p>
          </div>
        </section>

        {/* 5. Propriété Intellectuelle */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center text-warning">
              <Icon name="copyright" className="text-[22px]" filled />
            </div>
            <h2 className="text-[22px] font-bold text-on-surface">5. Propriété intellectuelle</h2>
          </div>
          <div className="text-on-surface-variant text-[15px] leading-relaxed pl-13">
            <p>
              La structure générale du site, ainsi que les textes, graphiques, images, sons et vidéos la composant, sont la propriété de l'éditeur ou de ses partenaires. Toute représentation et/ou reproduction et/ou exploitation partielle ou totale de ce site ou de l'application MedGlass, par quelque procédé que ce soit, sans l'autorisation préalable et par écrit de la société est strictement interdite et serait susceptible de constituer une contrefaçon au sens des articles L 335-2 et suivants du Code de la propriété intellectuelle.
            </p>
          </div>
        </section>

      </GlassPanel>
    </div>
  );
}