import { motion } from "framer-motion";
import { GlassPanel } from "../components/ui/GlassPanel";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Icon } from "../components/layout/Icon";
import PricingCard from "../components/pricingCards";
import PricingTable from "../components/pricingTable";
import FaqTable from "../components/faqTable";

export default function PricingPage() {
  return (
    // Conteneur global pour s'assurer que le fond bleu nuit (#050C3A) et la police par défaut s'appliquent partout
    <div className="bg-background text-on-background min-h-screen font-sans antialiased overflow-x-hidden">
      
      {/* HEADER DE LA PAGE */}
      <section className="relative max-w-4xl mx-auto px-4 md:px-8 pt-32 md:pt-40 pb-16 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Badge haut de page avec votre vert émeraude d'action */}
          <div className="flex justify-center">
            <Badge className="bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full flex items-center gap-2 text-sm font-medium backdrop-blur-md">
              <Icon name="sell" className="text-[14px]" />
              Tarifs
            </Badge>
          </div>

          {/* Titre principal avec dégradé Vert Émeraude -> Bleu-Violet Indigo */}
          <h1 className="text-[44px] md:text-[64px] text-on-surface font-extrabold tracking-tight leading-[1.1]">
            Une formule pour{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary drop-shadow-[0_0_20px_rgba(140,143,240,0.3)]">
              chaque structure
            </span>
          </h1>

          {/* Description en texte secondaire (Gris-violet lavande #A4A7F5) */}
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Tarifs HT mensuels. Sans engagement, résiliable à tout moment.
          </p>
        </motion.div>
      </section>

      {/* COMPOSANTS DE GRILLE ET TABLEAUX */}
      {/* On les enveloppe dans des conteneurs sémantiques isolés si besoin de gérer le responsive */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 space-y-24 pb-20">
        
        {/* Cartes des offres */}
        <section>
          <PricingCard />
        </section>

        {/* Tableau comparatif des fonctionnalités */}
        <section className="border border-outline/30 rounded-3xl bg-surface-container/40 backdrop-blur-md p-1 overflow-hidden shadow-xl shadow-surface-container-lowest/50">
          <PricingTable />
        </section>

        {/* FAQ */}
        <section>
          <FaqTable />
        </section>

      </div>

      {/* SECTION CALL TO ACTION (CTA) EN BAS DE PAGE */}
      <section className="relative max-w-5xl mx-auto px-4 md:px-8 pb-32 text-center z-10">
        {/* GlassPanel personnalisé aux couleurs du thème */}
        <GlassPanel 
          variant="elevated" 
          className="p-10 md:p-16 relative overflow-hidden rounded-3xl bg-surface-container/40 border border-outline/50 backdrop-blur-xl shadow-2xl shadow-surface-container-lowest/80"
        >
          {/* Halo lumineux en arrière-plan (Vert émeraude, Bleu sombre, Indigo) */}
          <div className="absolute -inset-1 bg-linear-to-tr from-primary/15 via-tertiary/5 to-secondary/20 blur-3xl opacity-60 pointer-events-none" />
          
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h2 className="text-[32px] md:text-[44px] text-on-surface font-extrabold tracking-tight leading-tight">
              Une question sur les tarifs ?
            </h2>
            
            <p className="text-on-surface-variant text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Notre équipe répond sous 24h ouvrées et peut adapter une offre sur-mesure à votre contexte d'établissement.
            </p>
            
            <div className="pt-4 flex justify-center">
              {/* Le bouton principal utilise la couleur primaire (Vert Émeraude) */}
              <Button 
                to="/contact" 
                size="lg" 
                icon="mail" 
                iconPosition="left"
                className="bg-primary text-on-primary hover:bg-primary-container hover:text-white transition-all duration-300 shadow-[0_4px_20px_rgba(118,208,151,0.3)] hover:shadow-[0_6px_25px_rgba(140,143,240,0.4)] rounded-full px-8 py-4 font-semibold text-base"
              >
                Contacter l'équipe
              </Button>
            </div>
          </div>
        </GlassPanel>
      </section>
      
    </div>
  );
}