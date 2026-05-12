import { useState, useEffect } from "react";
import { Icon } from "./Icon";
import { cn } from "../../lib/utils/cn";
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: "/features", label: "Fonctionnalités" },
  { to: "/pricing", label: "Tarifs" },
  { to: "/contact", label: "Contact" },
];

export function TopNav() {
  const { pathname } = useLocation();

  // Initialise from OS preference
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ||
             window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Sync dark class on <html>
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-8 h-16 bg-background/70 backdrop-blur-[20px] border-b border-white/10 shadow-sm transition-colors duration-300">
      <div className="flex items-center gap-4">
        <button className="md:hidden text-primary" aria-label="Menu">
          <Icon name="menu" />
        </button>
        <Link to="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
            <Icon name="local_hospital" className="text-primary text-[20px]" filled />
          </span>
          <span className="text-headline-md font-bold text-primary tracking-tight">MedGlass</span>
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-8 h-full">
        {links.map((link) => {
          const active = pathname === link.to || pathname?.startsWith(link.to + "/");
          return (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "h-full flex items-center transition-colors duration-200 text-body-base",
                active
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary",
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsDark(!isDark)}
          className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors hover:bg-white/5"
          aria-label="Toggle theme"
        >
          <Icon name={isDark ? "light_mode" : "dark_mode"} />
        </button>
        <Link
          to="/login"
          className="hidden sm:flex px-4 py-2 rounded-full text-on-surface-variant hover:text-primary text-body-sm transition-colors"
        >
          Connexion
        </Link>
        <Link
          to="/login"
          className="px-4 py-2 rounded-full bg-primary text-on-primary font-label-caps text-label-caps hover:opacity-90 transition-opacity"
        >
          Démo gratuite
        </Link>
      </div>
    </header>
  );
}
