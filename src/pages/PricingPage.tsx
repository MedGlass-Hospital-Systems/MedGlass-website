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
    <>
      {/* HEADER */}
      <section className="relative max-w-4xl mx-auto px-4 md:px-8 pt-20 md:pt-28 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <Badge tone="primary">
            <Icon name="sell" className="text-[14px]" />
            Tarifs
          </Badge>
          <h1 className="text-[44px] md:text-[60px] font-extrabold tracking-tight leading-[1.05]">
            Une formule pour <span className="text-gradient">chaque structure</span>
          </h1>
          <p className="text-on-surface-variant text-[18px]">
            Tarifs HT mensuels. Sans engagement, résiliable à tout moment.
          </p>
        </motion.div>
        </section>

      {/* Pricing Cards */}
      <PricingCard/>

      {/* COMPARISON TABLE */}
      <PricingTable/>

      {/* FAQ */}
      <FaqTable/>

      {/* CTA */}
      <section className="relative max-w-4xl mx-auto px-4 md:px-8 pb-24 text-center">
        <GlassPanel variant="elevated" className="p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -inset-1 bg-linear-to-tr from-primary/20 via-tertiary/15 to-secondary/15 blur-3xl opacity-40" />
          <div className="relative z-10 space-y-5">
            <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight leading-tight">
              Une question sur les tarifs ?
            </h2>
            <p className="text-on-surface-variant text-[17px] max-w-xl mx-auto">
              Notre équipe répond sous 24h ouvrées et peut adapter une offre à votre contexte.
            </p>
            <div className="pt-2">
              <Button to="/contact" size="lg" icon="mail" iconPosition="left">
                Contacter l'équipe
              </Button>
            </div>
          </div>
        </GlassPanel>
      </section>
    </>
  );
}
