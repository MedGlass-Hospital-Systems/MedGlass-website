import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 377;

export default function FramePage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const frameStateRef = useRef({ frame: 1 }); 

  // 1. Chargement des images
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

  // 2. Logique du Canvas et de GSAP
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Résolution fixe en Full HD
    canvas.width = 1920;
    canvas.height = 1080;

    // IMPORTANT : On remet la frame à 0 au cas où l'utilisateur revient sur la page
    frameStateRef.current.frame = 1;

   const render = () => {
      // Petite astuce de sécurité pour éviter de sortir de l'array
      let frameIndex = Math.round(frameStateRef.current.frame);
      if (frameIndex >= images.length) frameIndex = images.length - 1;
      const image = images[frameIndex];
      if (!image) return;
      // Si l'image n'est pas encore chargée (complete === false)
      if (!image.complete) {
        // On lui attache un événement : quand elle a fini de charger, elle relance "render"
        image.onload = render;
        return; 
      }

      // Une fois l'image chargée, on la dessine
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, 1920, 1080);
    };

    render();

    // L'UTILISATION DE GSAP.CONTEXT() EST LA CLÉ POUR REACT
    let ctx = gsap.context(() => {
      gsap.to(frameStateRef.current, {
        frame: TOTAL_FRAMES - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "90% bottom", 
          scrub: 1, 
        },
        onUpdate: render,
      });
    }, containerRef); // On limite le contexte à ce conteneur spécifique

    // Nettoyage propre au démontage (changement de page)
    return () => {
      ctx.revert(); // Annule proprement cette animation précise et son ScrollTrigger
    };
  }, [images]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[400vh] bg-black"
    >

      {/* Conteneur Sticky pour le Canvas */}
      <div className="sticky top-0 h-screen w-full z-0 overflow-hidden bg-black flex justify-center items-center">
        
        {/* Conteneur qui prend tout l'écran avec une limite de largeur pour les très grands écrans */}
        <div className="relative w-full h-full ">
          <canvas 
            ref={canvasRef} 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_40px_#000] md:shadow-[inset_0_0_150px_80px_#000]" />
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 2xl:w-64 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 2xl:w-64 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
        </div>
      </div>

      {/* Conteneur des textes superposés */}
      <div className="absolute top-0 left-0 w-full z-10 pointer-events-none">
        {/* Étape 1 */}
        <div className="h-screen flex items-center justify-center">
          
        </div>
    </div>

    </section>
  );
}