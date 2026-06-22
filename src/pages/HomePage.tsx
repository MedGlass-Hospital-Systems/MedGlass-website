import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MeshGradient } from "@paper-design/shaders-react";
import FeatureSection from "../components/ui/Section";


gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 239;

// --- Page Principale ---
export default function HomePage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const frameStateRef = useRef({ frame: 1 }); 

  // 1. Loading images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNumber = String(i).padStart(1, "0");
      img.src = `/homeFrames/home${frameNumber}.webp`;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

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
    <div className="bg-background text-on-background min-h-screen">
      
      <section className="min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center relative overflow-hidden">
        {/* Fond Mesh Gradient */}
        <div className='absolute inset-0 z-0 h-full w-full opacity-80'>
          <MeshGradient
            width={1920}
            height={1080}
            colors={["#050c3a", "#8c8ff0", "#060e46"]} // Couleurs adaptées à la nouvelle palette
            distortion={0.29}
            swirl={0}
            grainMixer={0.11}
            grainOverlay={0.22}
            speed={0.45}
            rotation={20}
            offsetX={0.18}
            style={{ width: '100%', height: '100%' }} 
          />        
        </div>
        
        {/* Contenu Hero */}
        <div className='flex flex-col md:flex-row md:ml-[10%] xl:ml-[15%] items-center relative z-10 gap-12'>
          <div className="flex-1 max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-tight text-on-surface">
              L'innovation des Plannings <br className="hidden lg:block" />
              <span className="text-secondary drop-shadow-[0_0_15px_rgba(140,143,240,0.4)]">
                à l'ère du digital.
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-on-surface-variant mb-12 leading-relaxed max-w-2xl">
              Optimisez la gestion de vos établissements avec notre suite d'outils interconnectés. NexiVia, AegisPlan et DemeCare réinventent votre quotidien pour vous concentrer sur l'essentiel : l'humain.
            </p>
          </div>
          
          <div className="flex-1 flex justify-center">
            <img 
              src="/logos.webp" 
              alt="Logos des différentes solutions" 
              className='brightness-110 max-w-xl md:max-w-2xl lg:max-w-4xl h-auto object-contain drop-shadow-2xl'
            />
          </div>
        </div>
      </section>

      {/* SECTIONS DE FONCTIONNALITÉS */}
      <div ref={containerRef} className="relative z-10">
        {/* BACKGROUND: Sticky Canvas */}
        <div className="sticky top-0 h-screen w-full z-0 overflow-hidden bg-black flex justify-center items-center">
          <div className="relative w-full h-full">
            <canvas 
              ref={canvasRef} 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <FeatureSection 
          title="Automatisation"
          description="Générez tous vos plannings selon les souhaits de vos praticiens et créez vos propres règles de générations grâce à notre moteur intelligent."
          imageSrc="/automatisation.gif"
          imageAlt="Animation automatisation"
          reverse={false} // Image à gauche
        />

        <FeatureSection 
          title="Communication"
          description="Facilitez les échanges au sein de vos équipes. Notre système de notifications et de messagerie sécurisée centralise toutes les informations cruciales en temps réel."
          imageSrc="/communication.gif" 
          imageAlt="Interface de communication"
          reverse={true} // Image à droite
        />

        <FeatureSection 
          title="Gestion Globale"
          description="Pilotez vos établissements depuis une interface unique. Suivez les présences, anticipez les besoins et analysez vos performances d'un seul coup d'œil."
          imageSrc="/gestion.gif" 
          imageAlt="Tableau de bord de gestion"
          reverse={false} // Image à gauche
        />

        <FeatureSection 
          title="Sécurité Maximale"
          description="Vos données sont sensibles, notre infrastructure est blindée. Profitez d'un environnement conforme aux normes de santé les plus strictes pour une tranquillité d'esprit totale."
          imageSrc="/securite.gif" 
          imageAlt="Illustration sécurité des données"
          reverse={true} // Image à droite
        />

      </div>
    </div>
  );
}