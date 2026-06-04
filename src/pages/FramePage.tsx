import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { GlassPanel } from "../components/ui/GlassPanel";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Icon } from "../components/layout/Icon";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 377;

// Data arrays from your HomePage
const steps = [
  { n: "01", i: "upload_file", t: "Importez votre service", d: "Équipes, contrats, règles de service, compétences. Nous reprenons vos données existantes (Excel, anciens outils) en 1 session.", tone: "primary" as const },
  { n: "02", i: "auto_fix", t: "L'IA propose un planning", d: "L'assistant génère un planning conforme à vos règles, respectant repos, compétences et préférences. Vous gardez la main sur chaque décision.", tone: "tertiary" as const },
  { n: "03", i: "phone_iphone", t: "Diffusez aux équipes", d: "Vos soignants consultent leur planning sur mobile, demandent leurs congés et échangent leurs gardes. Vous suivez tout depuis la console.", tone: "secondary" as const },
];

const features = [
  { i: "auto_fix", t: "Génération par IA", d: "L'assistant propose un planning optimal en quelques secondes en respectant règles de service, contrats et compétences.", span: "md:col-span-2", tone: "primary" as const },
  { i: "psychology", t: "Matrice de compétences", d: "Garantissez qu'un soignant qualifié est toujours présent.", span: "", tone: "tertiary" as const },
  { i: "swap_horiz", t: "Échange de gardes", d: "Demandes et remplacements validés par le cadre, traçabilité complète.", span: "", tone: "secondary" as const },
  { i: "warning", t: "Détection des conflits", d: "Repos non respectés, gardes consécutives, sous-effectif : l'application alerte avant publication.", span: "md:col-span-2", tone: "primary" as const },
];

const compliance = [
  "Hébergement HDS certifié",
  "Conformité RGPD documentée",
  "Journalisation et traçabilité complète",
  "Sauvegardes chiffrées quotidiennes",
];

export default function FramePage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const frameStateRef = useRef({ frame: 1 }); 

  // 1. Loading images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNumber = String(i).padStart(3, "0");
      img.src = `/frames/ezgif-frame-${frameNumber}.png`;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Animations for left and right reveals
const fadeFromLeft = {
  hidden: { opacity: 0, x: -80, filter: "blur(8px)" },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      delay: i * 0.1, 
      ease: [0.22, 1, 0.36, 1] as const 
    },
  }),
};

const fadeFromRight = {
  hidden: { opacity: 0, x: 80, filter: "blur(8px)" },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      delay: i * 0.1, 
      ease: [0.22, 1, 0.36, 1] as const 
    },
  }),
};

  // 2. Canvas & GSAP Logic
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.width = 1920;
    canvas.height = 1080;
    frameStateRef.current.frame = 1;

    const render = () => {
      let frameIndex = Math.round(frameStateRef.current.frame);
      if (frameIndex >= images.length) frameIndex = images.length - 1;
      const image = images[frameIndex];
      if (!image) return;
      if (!image.complete) {
        image.onload = render;
        return; 
      }
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, 1920, 1080);
    };

    render();

    let ctx = gsap.context(() => {
      gsap.to(frameStateRef.current, {
        frame: TOTAL_FRAMES - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom", // Syncs the total animation perfectly with the content height
          scrub: 1, 
        },
        onUpdate: render,
      });
    }, containerRef); 

    return () => {
      ctx.revert(); 
    };
  }, [images]);

  return (
    <section ref={containerRef} className="relative w-full bg-black">
      
      {/* BACKGROUND: Sticky Canvas */}
      <div className="sticky top-0 h-screen w-full z-0 overflow-hidden bg-black flex justify-center items-center">
        <div className="relative w-full h-full">
          <canvas 
            ref={canvasRef} 
            className="w-full h-full object-cover object-center"
          />
          {/* Vignettes for better text readability */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_120px_60px_#000] md:shadow-[inset_0_0_200px_100px_#000]" />
          <div className="absolute inset-0 bg-black/40 pointer-events-none" /> {/* Optional: global darken overlay */}
        </div>
      </div>

      {/* FOREGROUND: Scrolling Content */}
      <div className="relative z-10 w-full">
        
        {/* HERO */}
        <section className="relative flex items-center max-w-7xl mx-auto px-4 md:px-8 pb-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center w-full">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeFromLeft} className="space-y-7">
              <h1 className="text-[40px] sm:text-[56px] lg:text-[64px] leading-[1.05] font-extrabold tracking-tight text-white">
                La planification médicale,{" "}
                <span className="text-gradient">enfin sereine.</span>
              </h1>
              <p className="text-white/80 text-[18px] leading-relaxed max-w-xl">
                MedGlass automatise les plannings de gardes, astreintes et roulements pour les services hospitaliers. Conçu avec des praticiens, des cadres et des DRH d'établissements de santé français.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button to="/contact" size="lg" icon="arrow_forward" iconPosition="right">
                  Demander une démo
                </Button>
                <Button to="/features" variant="secondary" size="lg" icon="play_circle">
                  Voir les fonctionnalités
                </Button>
              </div>
              <div className="flex flex-wrap gap-5 pt-2 text-[13px] text-white/60">
                <span className="flex items-center gap-2">
                  Hébergement certifié HDS
                </span>
                <span className="flex items-center gap-2">
                  Conforme RGPD
                </span>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeFromRight}
              className="relative animate-float-tilt hidden lg:block"
            >
               <GlassPanel variant="elevated" className="relative p-3 rounded-2xl bg-black/20 backdrop-blur-md">
                 <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden h-64 flex items-center justify-center">
                    <span className="text-white/50 text-sm">Dashboard UI Preview</span>
                 </div>
               </GlassPanel>
            </motion.div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="relative min-h-[80vh] flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-8 py-[15vh]">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <Badge tone="primary">
              <Icon name="route" className="text-[14px]" />
              Comment ça marche
            </Badge>
            <h2 className="text-[36px] md:text-[44px] font-bold tracking-tight text-white">
              De vos plannings Excel à un système{" "}
              <span className="text-gradient">vivant</span>, en 3 étapes
            </h2>
            <p className="text-white/70 text-[17px]">
              Pas besoin de tout migrer d'un coup. On démarre par un service, on étend ensuite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
            <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-px bg-linear-to-r from-transparent via-white/20 to-transparent" aria-hidden />
            {steps.map((s, i) => (
              <motion.div 
                key={s.n} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }} 
                variants={i % 2 === 0 ? fadeFromLeft : fadeFromRight} 
                custom={i}
              >
                <GlassPanel className="h-full p-7 relative overflow-hidden group bg-black/40 backdrop-blur-lg hover:border-primary/50 transition-colors">
                  <div className="relative z-10 space-y-5">
                    <div className="flex items-center justify-between">
                      <span className={`w-14 h-14 rounded-2xl border flex items-center justify-center bg-white/5 border-white/10`}>
                        <Icon name={s.i} className="text-[26px] text-white" filled />
                      </span>
                      <span className="font-extrabold text-[40px] leading-none text-white/10 tabular-nums">
                        {s.n}
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-white">{s.t}</h3>
                    <p className="text-white/70 text-[15px] leading-relaxed">{s.d}</p>
                  </div>
                </GlassPanel>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FEATURES — BENTO */}
        <section id="fonctionnalites" className="relative min-h-[80vh] flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-8 py-[15vh]">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <Badge tone="tertiary">Fonctionnalités</Badge>
            <h2 className="text-[36px] md:text-[44px] font-bold tracking-tight text-white">
              Tout ce qu'il faut pour un planning hospitalier{" "}
              <span className="text-gradient">qui tient la route</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {features.map((f, i) => (
              <motion.div 
                key={f.t} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }} 
                variants={i % 2 === 0 ? fadeFromRight : fadeFromLeft} 
                custom={i} 
                className={f.span}
              >
                <GlassPanel className="group h-full p-7 bg-black/40 backdrop-blur-lg hover:border-primary/50 transition-colors relative overflow-hidden">
                  <div className="relative z-10 space-y-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/10 text-white">
                      <Icon name={f.i} className="text-[26px]" filled />
                    </div>
                    <h3 className="font-headline-md text-headline-md text-white">{f.t}</h3>
                    <p className="text-white/70 text-[15px] leading-relaxed">{f.d}</p>
                  </div>
                </GlassPanel>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECURITY */}
        <section id="securite" className="relative max-w-7xl mx-auto px-4 md:px-8 py-[15vh]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeFromLeft}>
            <GlassPanel variant="elevated" className="p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center bg-black/50 backdrop-blur-xl border-white/10">
              <div className="relative z-10 space-y-5">
                
                <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-white">
                  Vos données ne quittent jamais la France
                </h2>
                <ul className="space-y-3">
                  {compliance.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[15px] text-white/80">
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-4">
                {[
                  { label: "HDS", sub: "Hébergement Santé", icon: "health_and_safety" },
                  { label: "RGPD", sub: "Conformité", icon: "shield" },
                  { label: "ISO 27001", sub: "Sécurité", icon: "lock" },
                  { label: "ANSSI", sub: "Recommandations", icon: "verified_user" },
                ].map((c) => (
                  <div key={c.label} className="bg-black/35 border border-white/10 rounded-2xl aspect-square flex flex-col items-center justify-center text-center p-4 hover:bg-white/10 transition-colors group">
                    <Icon name={c.icon} className="text-primary scale-150 mb-4 group-hover:scale-200 transition-transform" filled />
                    <div className="font-bold text-white text-[20px]">{c.label}</div>
                    <div className="text-[15px] uppercase tracking-wider text-white/50 mt-1">{c.sub}</div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="mb-16 relative min-h-[50vh] flex flex-col justify-center max-w-4xl mx-auto px-4 md:px-8 py-[10vh] text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeFromRight}>
            <h2 className="text-[36px] md:text-[52px] font-extrabold tracking-tight mb-4 leading-tight text-white">
              Prêt à libérer <span className="text-gradient">du temps soignant</span> ?
            </h2>
            <p className="text-white/70 text-[18px] mb-9 max-w-xl mx-auto">
              Démonstration personnalisée sur votre service, sans engagement. Migration assistée depuis votre outil actuel.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button to="/contact" size="lg" icon="arrow_forward" iconPosition="right">
                Demander une démo
              </Button>
              <Button to="/pricing" variant="secondary" size="lg">
                Voir les tarifs
              </Button>
            </div>
          </motion.div>
        </section>

      </div>
    </section>
  );
}