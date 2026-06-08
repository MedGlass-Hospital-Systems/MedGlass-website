import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "../components/layout/Icon";

interface signingProps{
    setSign();
}

export default function SignUpForm( {setSign} ):signingProps{
    
    return(
        <section className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-350 md:min-h-250 flex flex-col md:flex-row rounded-3xl overflow-hidden glass-card-elevated shadow-2xl relative mx-auto"
      >


        {/* RIGHT SECTION - Form Container */}
        <div className="w-full md:w-[60%] bg-surface-container p-8 md:p-12 lg:p-16 flex flex-col justify-center items-center relative z-10">
          
          {/* Inner Wrapper to keep the form nicely contained */}
          <div className="w-full max-w-112.5">
            <div className="mb-8">
              <h1 className="text-[46px] font-bold text-on-surface tracking-tight mb-2">
                Bonjour !
              </h1>
              <p className="text-[18px] text-on-surface-variant">
                Ravi de vous voir sur NexiVia :)
              </p>
            </div>

            {/* Social / SSO Row */}
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://app.medglass.fr"
                className="flex-1 glass-chip rounded-full px-5 py-2.5 flex items-center justify-center gap-2.5 text-[13px] font-semibold text-on-surface hover:border-primary/40 transition-all focus-ring"
              >
                <Icon name="key" className="text-primary text-[18px]" filled />
                Pro Santé Connect
              </a>
              <button className="w-10.5 h-10.5 shrink-0 glass-chip rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/40 transition-all focus-ring">
                <Icon name="business" className="text-[18px]" />
              </button>
              <button className="w-10.5 h-10.5 shrink-0 glass-chip rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/40 transition-all focus-ring">
                <Icon name="shield" className="text-[18px]" />
              </button>
            </div>

            {/* Separator */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-outline-variant/30" />
              <span className="text-[12px] uppercase tracking-wider text-on-surface-variant/70">
                Ou
              </span>
              <div className="flex-1 h-px bg-outline-variant/30" />
            </div>

            {/* 2x2 Form Layout */}
            <form action="https://app.medglass.fr" className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[13px] text-on-surface-variant ml-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    placeholder="Dr. Dupont"
                    className="w-full bg-transparent border border-outline-variant/50 rounded-full px-5 py-2.5 text-[14px] text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary/60 focus-ring transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[13px] text-on-surface-variant ml-2">
                    Email pro
                  </label>
                  <input
                    type="email"
                    placeholder="nom@hopital.fr"
                    className="w-full bg-transparent border border-outline-variant/50 rounded-full px-5 py-2.5 text-[14px] text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary/60 focus-ring transition-all"
                  />
                </div>

                <div className="space-y-1.5 col-span-1 md:col-span-2">
                  <label className="text-[13px] text-on-surface-variant ml-2">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-transparent border border-outline-variant/50 rounded-full px-5 py-2.5 text-[14px] text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary/60 focus-ring transition-all"
                  />
                </div>

                <div className="space-y-1.5 col-span-1 md:col-span-2">
                  <label className="text-[13px] text-on-surface-variant ml-2">
                    Répéter mot de passe
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-transparent border border-outline-variant/50 rounded-full px-5 py-2.5 text-[14px] text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary/60 focus-ring transition-all"
                  />
                </div>
              </div>

              <label className="flex items-center gap-3 text-[12px] text-on-surface-variant mt-3 cursor-pointer group">
                <div className="relative flex items-center justify-center w-4.5 h-4.5">
                  <input
                    type="checkbox"
                    className="peer appearance-none w-full h-full rounded-full border border-outline-variant/60 bg-transparent checked:bg-primary/20 checked:border-primary focus-ring transition-all cursor-pointer"
                  />
                  <Icon
                    name="check"
                    className="absolute text-[12px] text-primary opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                  />
                </div>
                <span className="group-hover:text-on-surface transition-colors">
                  J'accepte les <Link to="/terms" className="text-primary hover:underline">CGU</Link> et la Politique de Confidentialité
                </span>
              </label>

              <div className="pt-4 flex flex-col justify-start">
                <button
                  type="submit"
                  className="w-full bg-primary-container/20 text-primary border border-primary/30 hover:bg-primary/20 hover:border-primary/50 px-12 py-3.5 rounded-full text-[14px] font-semibold transition-all focus-ring glow-primary"
                >
                  S'inscrire
                </button>
                <span className="group-hover:text-on-surface transition-colors mt-4 text-center">
                  Vous avez déjà un compte ? 
                <button onClick={setSign(true)}>Connectez vous</button>

                </span>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
    )
}