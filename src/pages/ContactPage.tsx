import { motion } from "framer-motion";
import { GlassPanel } from "../components/ui/GlassPanel";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Icon } from "../components/layout/Icon";


export default function ContactPage() {
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
            <Icon name="forum" className="text-[14px]" />
            Contact
          </Badge>
          <h1 className="text-[44px] md:text-[60px] font-extrabold tracking-tight leading-[1.05]">
            Parlons de votre <span className="text-gradient">organisation</span>
          </h1>
          <p className="text-on-surface-variant text-[20px] max-w-2xl mx-auto leading-relaxed">
            Démo, support technique, partenariats : notre équipe vous répond sous 24h ouvrées.
          </p>
        </motion.div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="mx-44 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <GlassPanel variant="elevated" className="p-8 md:p-10 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-primary/15 blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-[26px] font-bold mb-2">Envoyez-nous un message</h2>
                <p className="text-on-surface-variant text-[18px] mb-8">Réponse sous 24h ouvrées garantie.</p>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Field label="Nom complet" placeholder="Dr. Jeanne Dupont" />
                    <Field label="Établissement" placeholder="CHU de Bordeaux" />
                    <Field label="Email professionnel" type="email" placeholder="jeanne.dupont@hopital.fr" />
                    <Field label="Téléphone" type="tel" placeholder="+33 6 12 34 56 78" optional />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-label-caps tracking-[0.08em] uppercase text-on-surface-variant pl-1">
                      Sujet
                    </label>
                    <div className="relative">
                      <select
                        defaultValue=""
                        className="w-full glass-chip rounded-xl px-4 py-3.5 text-[15px] text-on-surface appearance-none cursor-pointer focus-ring transition-all"
                      >
                        <option value="" disabled className="bg-surface-container">Sélectionnez un sujet…</option>
                        <option value="demo" className="bg-surface-container">Démonstration / commercial</option>
                        <option value="support" className="bg-surface-container">Support technique</option>
                        <option value="partnership" className="bg-surface-container">Partenariat</option>
                        <option value="other" className="bg-surface-container">Autre</option>
                      </select>
                      <Icon name="expand_more" className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-label-caps tracking-[0.08em] uppercase text-on-surface-variant pl-1">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Décrivez votre service, vos enjeux, votre calendrier…"
                      className="w-full glass-chip rounded-xl px-4 py-3.5 text-[15px] text-on-surface placeholder:text-on-surface-variant/40 resize-none focus-ring transition-all"
                    />
                  </div>
                  <p className="text-on-surface-variant text-[18px] mb-8">Toutes les demandes sont envoyé à l'adresse contact@medglass.fr</p>

                  <div className="flex items-start gap-3 text-[13px] text-on-surface-variant">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="mt-1 w-4 h-4 rounded border-outline-variant bg-transparent text-primary focus-ring"
                    />
                    <span>
                      J'accepte que MedGlass utilise mes informations pour me recontacter. Aucune donnée n'est partagée avec un tiers.{" "}
                      <a href="/legal/privacy" className="text-primary hover:underline">Politique de confidentialité</a>.
                    </span>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <Button size="lg" icon="send" iconPosition="right">
                      Envoyer la demande
                    </Button>
                  </div>
                </form>
              </div>
            </GlassPanel>
          </motion.div>

          {/* SIDEBAR */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            

            
          </motion.div>
        </div>
      </section>
    </>
  );
}

interface FieldProps {
  label: string;
  placeholder: string;
  type?: string;
  optional?: boolean;
}

function Field({ label, placeholder, type = "text", optional }: FieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-[11px] font-label-caps tracking-[0.08em] uppercase text-on-surface-variant pl-1 flex justify-between">
        <span>{label}</span>
        {optional && <span className="text-on-surface-variant/50 normal-case tracking-normal">facultatif</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full glass-chip rounded-xl px-4 py-3.5 text-[15px] text-on-surface placeholder:text-on-surface-variant/40 focus-ring transition-all"
      />
    </div>
  );
}
