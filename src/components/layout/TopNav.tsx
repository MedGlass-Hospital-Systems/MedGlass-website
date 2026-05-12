import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "./Icon";
import { cn } from "../../lib/utils/cn";

const links = [
  { to: "/features", label: "Fonctionnalités" },
  { to: "/pricing", label: "Tarifs" },
  { to: "/contact", label: "Contact" },
];

export function TopNav() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-nav shadow-[0_8px_32px_rgba(0,0,0,0.25)]" : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="px-5 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-primary/30 to-tertiary/20 border border-primary/30 flex items-center justify-center overflow-hidden">
            <Icon name="local_hospital" className="text-primary text-[20px] relative z-10" filled />
            <span className="absolute inset-0 bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </span>
          <span className="font-bold text-[18px] tracking-tight text-on-surface">
            Med<span className="text-primary">Glass</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.to || pathname?.startsWith(link.to + "/");
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "relative px-4 py-2 rounded-full text-[14px] transition-all duration-200",
                  active
                    ? "text-primary bg-primary/10"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-white/5",
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary glow-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="text-[14px] text-on-surface-variant hover:text-primary transition-colors px-3"
          >
            Connexion
          </Link>
          <a
            href="https://app.medglass.fr"
            className="px-5 py-2.5 rounded-full bg-primary text-on-primary font-label-caps text-[11px] tracking-[0.08em] uppercase hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 shadow-[0_4px_14px_rgba(173,198,255,0.39)] hover:shadow-[0_6px_24px_rgba(173,198,255,0.5)] flex items-center gap-1.5"
          >
            Démo gratuite
            <Icon name="arrow_forward" className="text-[16px]" />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 rounded-full glass-chip flex items-center justify-center text-on-surface"
          aria-label="Menu"
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden glass-nav overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="px-4 py-4 flex flex-col gap-1">
          {links.map((link) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "px-4 py-3 rounded-xl text-[15px]",
                  active ? "bg-primary/10 text-primary" : "text-on-surface-variant hover:bg-white/5",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-2 pt-3 border-t border-outline-variant/30 flex flex-col gap-2">
            <Link
              to="/login"
              className="px-4 py-3 rounded-xl text-[15px] text-on-surface-variant hover:bg-white/5"
            >
              Connexion
            </Link>
            <a
              href="https://app.medglass.fr"
              className="mx-4 mt-1 mb-2 px-4 py-3 rounded-full bg-primary text-on-primary text-[12px] font-label-caps tracking-[0.08em] uppercase text-center shadow-[0_4px_14px_rgba(173,198,255,0.39)]"
            >
              Démo gratuite
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
