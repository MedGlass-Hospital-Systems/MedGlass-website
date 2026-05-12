import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GlassPanel } from "../components/ui/GlassPanel";
import { Button } from "../components/ui/Button";
import { Icon } from "../components/layout/Icon";

export default function LoginPage() {
  return (
    <section className="relative max-w-md mx-auto px-4 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/15 via-tertiary/10 to-secondary/15 blur-3xl rounded-full opacity-60" />

          <GlassPanel variant="elevated" className="relative p-8 md:p-10">
            <div className="text-center mb-8 space-y-3">
              <div className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-tertiary/20 border border-primary/30 items-center justify-center mb-2">
                <Icon name="local_hospital" className="text-primary text-[28px]" filled />
              </div>
              <h1 className="text-[28px] font-bold tracking-tight">Bon retour parmi nous</h1>
              <p className="text-on-surface-variant text-[14px]">
                Accédez à votre espace MedGlass
              </p>
            </div>

            {/* SSO first */}
            <a
              href="https://app.medglass.fr"
              className="w-full glass-card rounded-full px-5 py-3.5 flex items-center justify-center gap-2.5 text-[14px] font-semibold text-on-surface hover:border-primary/40 transition-all focus-ring mb-3"
            >
              <Icon name="key" className="text-primary text-[20px]" filled />
              Continuer avec Pro Santé Connect
            </a>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-outline-variant/30" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 text-[12px] uppercase tracking-wider text-on-surface-variant bg-transparent">
                  ou par email
                </span>
              </div>
            </div>

            <form action="https://app.medglass.fr" className="space-y-4">
              <div className="space-y-2">
                <label className="text-[11px] font-label-caps tracking-[0.08em] uppercase text-on-surface-variant pl-1">
                  Email professionnel
                </label>
                <div className="relative">
                  <Icon name="mail" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" />
                  <input
                    type="email"
                    required
                    placeholder="jeanne.dupont@hopital.fr"
                    className="w-full glass-chip rounded-xl pl-11 pr-4 py-3.5 text-[15px] text-on-surface placeholder:text-on-surface-variant/40 focus-ring transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center pl-1">
                  <label className="text-[11px] font-label-caps tracking-[0.08em] uppercase text-on-surface-variant">
                    Mot de passe
                  </label>
                  <Link to="/contact" className="text-[12px] text-primary hover:underline">
                    Oublié ?
                  </Link>
                </div>
                <div className="relative">
                  <Icon name="lock" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••••"
                    className="w-full glass-chip rounded-xl pl-11 pr-4 py-3.5 text-[15px] text-on-surface placeholder:text-on-surface-variant/40 focus-ring transition-all"
                  />
                </div>
              </div>

              <label className="flex items-center gap-2.5 text-[13px] text-on-surface-variant cursor-pointer pt-1">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-outline-variant bg-transparent text-primary focus-ring"
                />
                Se souvenir de moi pendant 30 jours
              </label>

              <Button className="w-full mt-2" size="lg" icon="arrow_forward" iconPosition="right">
                Se connecter
              </Button>
            </form>

            <p className="text-center text-[14px] text-on-surface-variant mt-8">
              Pas encore de compte ?{" "}
              <Link to="/contact" className="text-primary font-semibold hover:underline">
                Demander une démo
              </Link>
            </p>
          </GlassPanel>
        </div>

        {/* Security badges */}
        <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
          {[
            { i: "verified_user", l: "Hébergement HDS" },
            { i: "lock", l: "Chiffrement E2E" },
            { i: "shield", l: "RGPD" },
          ].map((b) => (
            <div key={b.l} className="flex items-center gap-1.5 text-[12px] text-on-surface-variant">
              <Icon name={b.i} className="text-success text-[14px]" filled />
              {b.l}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
