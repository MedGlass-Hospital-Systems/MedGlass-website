import { motion } from "framer-motion";
import { GlassPanel } from "../components/ui/GlassPanel";
import { Icon } from "../components/layout/Icon";

export default function LegalNoticesPage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden font-sans">

      <div className="fixed inset-0 z-0 pointer-events-none bg-background">
        {/* Image de fond fixe */}
        <img 
          src="/mountain.webp" 
          alt="Fond spatial MedGlass" 
          className="absolute  object-cover w-full h-full"
        />
      </div>

      {/* ====================================================
        CONTENU PRINCIPAL (MENTIONS LÉGALES)
        ==================================================== 
      */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 pt-32 md:pt-40 pb-20 text-on-background">
        
        {/* En-tête */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 space-y-5 text-center md:text-left"
        >

          
          <h1 className="text-[44px] md:text-[60px] font-extrabold tracking-tight leading-[1.05] text-on-surface">
            Mentions{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary drop-shadow-[0_0_20px_rgba(140,143,240,0.3)]">
              Légales
            </span>
          </h1>
          
          <p className="text-on-surface-variant text-[16px] md:text-[18px]">
            En vigueur au {new Date().toLocaleDateString('fr-FR')}
          </p>
        </motion.div>

        {/* Panneau de contenu Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlassPanel className="p-6 sm:p-10 md:p-12 space-y-12 bg-surface-container/60 border border-outline/50 shadow-2xl backdrop-blur-xl rounded-3xl relative overflow-hidden">
            
            {/* Lueur d'ambiance discrète */}
            <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

            {/* 1. Éditeur du site */}
            <section className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-inner">
                  <Icon name="business" className="text-[22px]" filled />
                </div>
                <h2 className="text-[22px] font-bold text-on-surface tracking-tight">1. Éditeur du site</h2>
              </div>
              <div className="text-on-surface-variant text-[15px] md:text-[16px] leading-relaxed space-y-3 md:pl-15">
                <p>Le site <strong>medglass.fr</strong> (et l'application app.medglass.fr) est édité par la société :</p>
                <ul className="space-y-2 border-l border-outline/30 pl-4 py-1 text-on-surface/90">
                  <li><strong className="text-on-surface-variant">Raison sociale :</strong> MedGlass Hospital Systems</li>
                  <li><strong className="text-on-surface-variant">Capital social :</strong> 4 000 €</li>
                  <li><strong className="text-on-surface-variant">Siège social :</strong> 538 route de la Redonde, Campagne, France</li>
                  <li><strong className="text-on-surface-variant">RCS :</strong> Immatriculée au Registre du Commerce et des Sociétés de CAMPAGNE</li>
                  <li><strong className="text-on-surface-variant">Email :</strong> <a href="mailto:contact@medglass.fr" className="text-secondary hover:underline">contact@medglass.fr</a></li>
                  <li><strong className="text-on-surface-variant">Téléphone :</strong> 06 23 25 65 46</li>
                </ul>
              </div>
            </section>

            {/* 2. Directeur de la publication */}
            <section className="space-y-4 border-t border-outline/20 pt-8">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary shadow-inner">
                  <Icon name="person" className="text-[22px]" filled />
                </div>
                <h2 className="text-[22px] font-bold text-on-surface tracking-tight">2. Directeur de la publication</h2>
              </div>
              <div className="text-on-surface-variant text-[15px] md:text-[16px] leading-relaxed md:pl-15">
                <p>Le Directeur de la publication est <strong>Rémi Puigsech</strong>, en qualité de Président Fondateur de MedGlass Hospital Systems.</p>
              </div>
            </section>

            {/* 3. Hébergement */}
            <section className="space-y-4 border-t border-outline/20 pt-8">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary shadow-inner">
                  <Icon name="dns" className="text-[22px]" filled />
                </div>
                <h2 className="text-[22px] font-bold text-on-surface tracking-tight">3. Hébergement du site et de l'application</h2>
              </div>
              <div className="text-on-surface-variant text-[15px] md:text-[16px] leading-relaxed space-y-3 md:pl-15">
                <p>Afin de garantir la souveraineté nationale et la sécurité absolue des données, le site vitrine ainsi que l'application de planification MedGlass sont hébergés exclusivement en France par un <strong>Hébergeur de Données de Santé (HDS) certifié</strong>, conformément aux réglementations du Code de la Santé Publique.</p>
                <ul className="space-y-2 border-l border-outline/30 pl-4 py-1 text-on-surface/90">
                  <li><strong className="text-on-surface-variant">Hébergeur :</strong> GITHUB FRANCE / OVH Cloud Healthcare</li>
                  <li><strong className="text-on-surface-variant">Siège social :</strong> 37 Quai du Président Roosevelt, 92130 Issy-les-Moulineaux, France</li>
                </ul>
              </div>
            </section>

            {/* 4. Traitement des données et RGPD */}
            <section className="space-y-4 border-t border-outline/20 pt-8">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-success/10 border border-success/20 flex items-center justify-center text-success shadow-inner">
                  <Icon name="shield" className="text-[22px]" filled />
                </div>
                <h2 className="text-[22px] font-bold text-on-surface tracking-tight">4. Données personnelles et Confidentialité</h2>
              </div>
              <div className="text-on-surface-variant text-[15px] md:text-[16px] leading-relaxed space-y-4 md:pl-15">
                <p>
                  <strong className="text-on-surface">Nature des données traitées :</strong> La solution MedGlass est un outil d'automatisation de plannings strictement dédié à la gestion des ressources humaines médicales. À ce titre, le logiciel traite exclusivement des données administratives et professionnelles (noms, adresses emails professionnelles, postes, compétences clés et grilles horaires des praticiens et soignants). 
                </p>
                <p className="bg-primary/5 border border-primary/20 p-4 rounded-xl text-on-surface">
                  <strong className="text-primary">Aucune donnée de santé patient :</strong> MedGlass ne collecte, ne stocke et ne traite <u>aucune donnée médicale, dossier clinique ou information critique relative aux patients</u> des établissements de santé clients.
                </p>
                <p>
                  Conformément aux dispositions de la loi n° 78-17 du 6 janvier 1978 modifiée (Informatique et Libertés) et au Règlement Général sur la Protection des Données (<span className="text-primary font-medium">RGPD</span>), vous disposez d'un droit permanent d'accès, de rectification, de portabilité et d'effacement de vos informations professionnelles.
                </p>
                <p>
                  Pour exercer ces droits ou pour toute question relative au traitement sécurisé de vos données, vous pouvez contacter directement notre Délégué à la Protection des Données (DPO) à l'adresse e-mail dédiée : <a href="mailto:dpo@medglass.fr" className="text-secondary hover:underline font-medium">dpo@medglass.fr</a>.
                </p>
              </div>
            </section>

            {/* 5. Propriété Intellectuelle */}
            <section className="space-y-4 border-t border-outline/20 pt-8">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-warning/10 border border-warning/20 flex items-center justify-center text-warning shadow-inner">
                  <Icon name="copyright" className="text-[22px]" filled />
                </div>
                <h2 className="text-[22px] font-bold text-on-surface tracking-tight">5. Propriété intellectuelle</h2>
              </div>
              <div className="text-on-surface-variant text-[15px] md:text-[16px] leading-relaxed md:pl-15">
                <p>
                  La structure générale du site, l'identité de marque, ainsi que les algorithmes, codes, graphiques, maquettes, logos et textes le composant, sont la propriété exclusive de l'éditeur ou de ses partenaires. 
                </p>
                <p className="mt-3">
                  Toute représentation, reproduction ou exploitation partielle ou totale de l'écosystème applicatif MedGlass, par quelque procédé que ce soit, sans l'autorisation préalable écrite et expresse de la société MedGlass Hospital Systems est strictement interdite et est constitutive d'une contrefaçon sanctionnée par les articles L 335-2 et suivants du Code de la propriété intellectuelle.
                </p>
              </div>
            </section>

          </GlassPanel>
        </motion.div>
      </main>
    </div>
  );
}