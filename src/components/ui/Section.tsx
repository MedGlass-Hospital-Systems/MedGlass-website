import { motion } from 'framer-motion';


// --- Animations ---
const fadeFromLeft = {
  hidden: { opacity: 0, x: -80, filter: "blur(8px)" },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      delay: i * 0.1, 
      ease: [0.22, 1, 0.36, 1] 
    },
  }),
};

const fadeFromRight = {
  hidden: { opacity: 0, x: 80, filter: "blur(8px)" },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      delay: i * 0.1, 
      ease: [0.22, 1, 0.36, 1] 
    },
  }),
};

// --- Composant réutilisable pour les sections ---
export default function FeatureSection({ title, description, imageSrc, imageAlt, reverse = false }){
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center max-w-7xl mx-auto px-4 md:px-8 py-[10vh]">
      <div className={`w-full flex flex-col gap-[15%] items-center ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        
        {/* Bloc Image */}
        <div className={`w-full md:w-1/2 relative flex justify-center ${reverse ? 'md:justify-start' : 'md:justify-end'}`}>
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={reverse ? fadeFromRight : fadeFromLeft}
            className="w-full max-w-xl"
          >
            <div className="relative aspect-video md:aspect-square overflow-hidden rounded-2xl border border-outline/30 shadow-2xl shadow-surface-bright/20 bg-surface-container-low">
              {/* Remplacez la balise <img> par votre image/gif final */}
              <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        {/* Bloc Texte (Glassmorphism) */}
        <div className={`w-full md:w-1/2 relative flex justify-center ${reverse ? 'md:justify-end' : 'md:justify-start'}`}>
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={reverse ? fadeFromLeft : fadeFromRight} 
            className="w-full max-w-xl"
          >
            <div className="h-full p-8 relative overflow-hidden group bg-surface-container/60 border border-outline rounded-3xl backdrop-blur-xl hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_-15px_rgba(118,208,151,0.3)]">
              <div className="relative z-10 flex flex-col items-start space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-on-surface flex items-center p-4 bg-surface-container-high border border-outline-variant rounded-2xl shadow-inner">
                  {title}
                </h2>
                <p className="text-lg md:text-xl leading-relaxed text-on-surface-variant text-left">
                  {description}
                </p>
                {/* Petit accent visuel pour lier avec votre couleur primaire */}
                <div className="h-1 w-20 bg-primary rounded-full mt-4 group-hover:w-32 transition-all duration-500"></div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};