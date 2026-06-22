import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "./Icon";
import { cn } from "../../lib/utils/cn";

const links = [
  { to: "/pricing", label: "Tarifs" },
  { to: "/contact", label: "Contact" },
];

export function TopNav() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Déclenchement plus tardif pour bien voir la transition du glass
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        // Positionnement flottant type "Pill"
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl",
        "p-3 md:px-5 md:py-3 transition-all duration-300 rounded-3xl",
        // Effet Liquid Glass principal (adapté au fond bleu nuit)
        "bg-surface-container-low/30 backdrop-blur-md border border-outline/40",
        "shadow-[0_8px_32px_0_rgba(5,12,58,0.5)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]",
        // État au scroll (plus dense)
        scrolled && "bg-surface-container/50 border-outline/60 shadow-[0_8px_32px_0_rgba(3,6,28,0.8)] backdrop-blur-md"
      )}
    >
      <div className="flex h-full items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <span className="relative w-12 h-12 rounded-2xl flex items-center justify-center overflow-hidden bg-white/5 border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] backdrop-blur-md transition-transform group-hover:scale-105">
            <img src="/logo.webp" alt="MedGlass Logo" className="w-8 h-8 object-contain" />
          </span>
          <div className="flex items-center font-bold text-2xl tracking-tight">
            {/* Utilisation de secondary (Indigo) pour l'accentuation */}
            <span className="text-secondary drop-shadow-[0_0_8px_rgba(140,143,240,0.5)]">Med</span>
            <span className="text-on-surface">Glass</span>
          </div>
        </Link>

        {/* Navigation Bureau encapsulée dans une pilule en verre */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full">
          
          {/* Dropdown Solutions */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 px-5 py-2 rounded-full text-[17px] font-medium text-on-surface-variant hover:text-secondary hover:bg-white/10 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition-all duration-300">
              Solutions 
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
              </svg>
            </button>
            
            {/* Contenu du Dropdown (Liquid Glass) */}
            <div className="absolute top-full left-0 pt-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 w-48 z-50">
              <ul className="p-2 flex flex-col gap-1 bg-surface-container/60 backdrop-blur-xl border border-outline rounded-2xl shadow-[0_8px_32px_0_rgba(3,6,28,0.8)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
                <li>
                  <Link to="/solutions/nexivia" className="flex items-center w-full px-4 py-2.5 rounded-xl text-[14px] font-medium text-on-surface hover:text-secondary hover:bg-white/10 transition-colors">
                    NexiVia
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/aegisplan" className="flex items-center w-full px-4 py-2.5 rounded-xl text-[14px] font-medium text-on-surface hover:text-secondary hover:bg-white/10 transition-colors">
                    AegisPlan
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/demecare" className="flex items-center w-full px-4 py-2.5 rounded-xl text-[14px] font-medium text-on-surface hover:text-secondary hover:bg-white/10 transition-colors">
                    DemeCare
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Reste des liens classiques */}
          {links.map((link) => {
            const active = pathname === link.to || pathname?.startsWith(link.to + "/");
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "relative px-5 py-2 rounded-full text-[17px] font-medium transition-all duration-300",
                  active
                    // État actif utilisant le vert primaire avec une ombre verte
                    ? "text-on-primary bg-primary shadow-[0_0_15px_rgba(118,208,151,0.4)] border border-primary-container"
                    // État inactif
                    : "text-on-surface-variant hover:text-secondary hover:bg-white/10 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Call To Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="text-[17px] font-medium text-on-surface-variant hover:text-secondary hover:drop-shadow-[0_0_5px_rgba(140,143,240,0.5)] transition-all px-2"
          >
            Connexion
          </Link>
          <a
            href="https://app.medglass.fr"
            className={cn(
              "px-5 py-2.5 rounded-full font-label-caps text-[11px] tracking-[0.08em] uppercase flex items-center gap-1.5 transition-all duration-300",
              // Dégradé de la navbar utilisant Primary (Vert) vers Secondary (Indigo)
              "bg-gradient-to-r from-primary to-secondary text-on-primary",
              "border border-white/20 shadow-[0_4px_20px_rgba(118,208,151,0.3)]",
              "hover:shadow-[0_6px_25px_rgba(140,143,240,0.5)] hover:scale-105"
            )}
          >
            Démo gratuite
            <Icon name="arrow_forward" className="text-[16px]" />
          </a>
        </div>

        {/* Bouton Menu Mobile (Glass Chip) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-11 h-11 rounded-full flex items-center justify-center text-on-surface bg-white/5 border border-white/10 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:bg-white/10 transition-colors"
          aria-label="Menu"
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>

      {/* Tiroir Mobile "Liquid Glass" */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          open ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0",
        )}
      >
        <nav className="p-3 flex flex-col gap-1.5 rounded-2xl bg-surface-container-high/60 backdrop-blur-xl border border-outline/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
          {links.map((link) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all duration-200",
                  active 
                    // Variante active sur mobile (fond translucide vert)
                    ? "bg-primary/20 text-primary border border-primary/30" 
                    : "text-on-surface-variant hover:text-on-surface hover:bg-white/5 border border-transparent",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          
          {/* Séparateur vitré */}
          <div className="mt-2 pt-3 border-t border-outline flex flex-col gap-2">
            <Link
              to="/login"
              className="px-4 py-3 rounded-xl text-[15px] font-medium text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors"
            >
              Connexion
            </Link>
            <a
              href="https://app.medglass.fr"
              className="mt-1 mb-1 px-4 py-3.5 rounded-full bg-gradient-to-r from-primary to-secondary text-on-primary text-[12px] font-label-caps tracking-[0.08em] uppercase text-center shadow-[0_4px_15px_rgba(118,208,151,0.3)] border border-white/20"
            >
              Démo gratuite
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}