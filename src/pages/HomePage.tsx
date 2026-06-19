import { MeshGradient } from '@paper-design/shaders-react';
import { motion } from 'framer-motion';

export default function HomePage() {

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

  return (
    <>
      <section className="min-h-screen bg-neutral-950 text-neutral-50 pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center relative overflow-hidden">
        
        {/* Conteneur pour le fond Mesh Gradient */}
        <div className='absolute inset-0 z-0 h-full w-full'>
          <MeshGradient
            width={1920}
            height={1080}
            colors={["#050c38", "#8e91f0", "#4ab6e8"]}
            distortion={0.29}
            swirl={0}
            grainMixer={0.11}
            grainOverlay={0.22}
            speed={0.34}
            rotation={20}
            offsetX={0.18}
            // Assurez-vous que le composant MeshGradient s'adapte à son conteneur parent
            style={{ width: '100%', height: '100%' }} 
          />        
        </div>
        
        {/* Conteneur pour le contenu textuel et l'image */}
        <div className='flex flex-col md:flex-row md:ml-[17%] items-center relative z-10 gap-12'>
          {/* Partie description */}
          <div className="flex-1 max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6 leading-tight">
              L'innovation des Plannings <br className="hidden md:block" />
              <span className="text-sky-300">
                à l'ère du digital.
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-neutral-200 mb-12 leading-relaxed">
              Optimisez la gestion de vos établissements avec notre suite d'outils interconnectés. NexiVia, AegisPlan et DemeCare réinventent votre quotidien pour vous concentrer sur l'essentiel : l'humain.
            </p>
          </div>
          
          {/* Image des logos */}
          <div className="flex-1 flex justify-center">
            <img 
              src="/logos.png" 
              alt="Logos des différentes solutions" 
              className='brightness-90 max-w-xl md:max-w-3xl lg:max-w-5xl h-auto object-contain'
            />
          </div>
        </div>
      </section>
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-[25%] mx-auto px-4 md:px-8 py-[15vh] bg-background">
        
        {/* Bloc de Gauche : Le GIF */}
        <div className="w-full md:w-1/2 relative flex justify-center md:justify-end">
          <div className="hidden md:block absolute top-12" aria-hidden />
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={fadeFromLeft}
            className="w-full max-w-xl"
          >
            <img src="/automatisation.gif" alt="Animation automatisation" className='min-w-3xl w-full h-auto rounded-2xl object-cover' />
          </motion.div>
        </div>

        {/* Bloc de Droite : La Carte de Description */}
        <div className="w-full md:w-1/2 relative flex justify-center md:justify-start">
          <div className="hidden md:block absolute top-12" aria-hidden />
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={fadeFromRight} 
            className="w-full max-w-xl"
          >
            <div className="h-full p-7 relative overflow-hidden group bg-on-surface-variant/20 border-2 border-on-surface-variant/30 rounded-2xl backdrop-blur-lg hover:border-primary/50 transition-colors">
              <div className="relative z-10 space-y-5">
                {/* Changement de flex-col à items-start pour un alignement plus naturel du texte */}
                <div className="flex flex-col items-end justify-between">
                  <span className="text-4xl md:text-5xl font-bold rounded-2xl text-on-secondary border flex p-4 bg-white/5 border-white/10 mb-6">
                    Automatisation
                  </span>
                  <span className="text-[17px] leading-relaxed text-on-primary text-left tabular-nums">
                    Générez tous vos plannings selon les souhaits de vos praticiens et créez vos propres règles de générations. 
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </section>
    </>
  );
}