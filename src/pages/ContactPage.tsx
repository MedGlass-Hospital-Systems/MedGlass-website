import { GlassPanel } from "../components/ui/GlassPanel";
import { Button } from "../components/ui/Button";
import { Icon } from "../components/layout/Icon";
import { Badge } from "../components/ui/Badge";

export default function ContactPage() {
  return (
    <section className="px-4 py-24 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16 md:mb-20">
        <Badge tone="primary" className="mb-4">Contact</Badge>
        <h1 className="text-[40px] md:text-[52px] font-bold tracking-tight mb-4">
          Parlons de votre <span className="text-gradient">organisation</span>
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          Que vous ayez besoin d'une assistance technique, d'une démonstration ou de renseignements commerciaux, notre équipe est là pour vous accompagner.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* Contact form — spans 2/3 on large screens */}
        <div className="lg:col-span-2">
          <GlassPanel className="p-8 lg:p-10 h-full border-t border-white/20">
            <h2 className="text-2xl font-bold mb-8">Envoyez-nous un message</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider pl-1">
                    Nom Complet
                  </label>
                  <input
                    type="text"
                    placeholder="Dr. Jeanne Dupont"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-body-base text-white placeholder:text-white/30 focus:bg-white/[0.05] focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider pl-1">
                    Établissement / Service
                  </label>
                  <input
                    type="text"
                    placeholder="CHU de Bordeaux"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-body-base text-white placeholder:text-white/30 focus:bg-white/[0.05] focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider pl-1">
                    Email Professionnel
                  </label>
                  <input
                    type="email"
                    placeholder="jeanne.dupont@hopital.fr"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-body-base text-white placeholder:text-white/30 focus:bg-white/[0.05] focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2 relative">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider pl-1">
                    Sujet
                  </label>
                  <select
                    defaultValue=""
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-body-base text-white focus:bg-white/[0.05] focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#0b1120] text-white/50">Sélectionnez un sujet...</option>
                    <option value="support" className="bg-[#0b1120]">Support Technique</option>
                    <option value="sales" className="bg-[#0b1120]">Ventes & Démonstration</option>
                    <option value="partnership" className="bg-[#0b1120]">Partenariat</option>
                  </select>
                  <Icon name="expand_more" className="absolute right-4 top-[42px] text-on-surface-variant pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider pl-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Comment pouvons-nous vous aider à optimiser vos plannings ?"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-body-base text-white placeholder:text-white/30 focus:bg-white/[0.05] focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <div className="flex justify-end pt-4">
                <Button size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 font-bold shadow-lg shadow-primary/20">
                  Envoyer la demande
                  <Icon name="send" className="text-[18px]" />
                </Button>
              </div>
            </form>
          </GlassPanel>
        </div>

        {/* Sidebar: contact info */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-primary/50 rounded-full"></span>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider text-sm">
                Contact direct
              </h3>
            </div>

            <div className="space-y-4">
              <GlassPanel className="p-5 flex items-start gap-4 hover:border-primary/30 transition-colors duration-300 group cursor-pointer">
                <div className="bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300 p-3 rounded-xl text-primary shrink-0 shadow-lg">
                  <Icon name="storefront" className="text-[24px]" />
                </div>
                <div>
                  <h4 className="font-bold text-body-lg mb-0.5 group-hover:text-primary transition-colors">Ventes & Démo</h4>
                  <a href="mailto:sales@medglass.fr" className="text-on-surface-variant text-body-sm">
                    sales@medglass.fr
                  </a>
                  <p className="text-xs text-on-surface-variant/70 mt-1">Lun-Ven, 9h - 18h</p>
                </div>
              </GlassPanel>

              <GlassPanel className="p-5 flex items-start gap-4 hover:border-primary/30 transition-colors duration-300 group cursor-pointer">
                <div className="bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300 p-3 rounded-xl text-primary shrink-0 shadow-lg">
                  <Icon name="headset_mic" className="text-[24px]" />
                </div>
                <div>
                  <h4 className="font-bold text-body-lg mb-0.5 group-hover:text-primary transition-colors">Support Technique</h4>
                  <a href="mailto:support@medglass.fr" className="text-on-surface-variant text-body-sm">
                    support@medglass.fr
                  </a>
                  <p className="text-xs text-on-surface-variant/70 mt-1">Priorité 24/7 (SLA)</p>
                </div>
              </GlassPanel>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-primary/50 rounded-full"></span>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider text-sm">
                Bureaux
              </h3>
            </div>

            <div className="space-y-4">
              <GlassPanel className="p-6 relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-primary uppercase tracking-wider mb-2">
                    <Icon name="location_on" className="text-[16px]" />
                    <span>Siège France</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Paris</h4>
                  <p className="text-body-sm text-on-surface-variant leading-relaxed">
                    Station F, 5 Parvis Alan Turing<br />
                    75013 Paris, France
                  </p>
                </div>
              </GlassPanel>

              <GlassPanel className="p-6 relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-tertiary/10 rounded-full blur-3xl group-hover:bg-tertiary/20 transition-colors duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-tertiary uppercase tracking-wider mb-2">
                    <Icon name="location_on" className="text-[16px]" />
                    <span>Hub Sud-Ouest</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Bordeaux</h4>
                  <p className="text-body-sm text-on-surface-variant leading-relaxed">
                    Cité Numérique<br />
                    2 Rue Marc Sangnier<br />
                    33130 Bègles, France
                  </p>
                </div>
              </GlassPanel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
