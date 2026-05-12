export function AmbientBackground() {
  return (
    <div aria-hidden className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Slow drifting orbs */}
      <div className="absolute top-[-15%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-primary/25 blur-[140px] animate-orb-a will-change-transform" />
      <div className="absolute top-[35%] right-[-12%] w-[45vw] h-[45vw] rounded-full bg-secondary/20 blur-[140px] animate-orb-b will-change-transform" />
      <div className="absolute bottom-[-15%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-tertiary/15 blur-[160px] animate-orb-c will-change-transform" />

      {/* Rotating aurora conic gradient */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="w-[160vw] h-[160vw] animate-conic-spin will-change-transform">
          <div
            className="w-full h-full rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0%, rgba(173,198,255,0.10) 18%, transparent 36%, rgba(166,230,255,0.08) 54%, transparent 72%, rgba(194,193,255,0.10) 90%, transparent 100%)",
              filter: "blur(60px)",
              maskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
            }}
          />
        </div>
      </div>

      {/* Twinkling stars */}
      <div className="absolute inset-0 animate-twinkle">
        <svg className="w-full h-full opacity-50" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stars" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="30" r="0.6" fill="#adc6ff" />
              <circle cx="80" cy="70" r="0.5" fill="#a6e6ff" />
              <circle cx="50" cy="100" r="0.4" fill="#c2c1ff" />
              <circle cx="100" cy="20" r="0.5" fill="#dde2f0" />
              <circle cx="10" cy="90" r="0.3" fill="#adc6ff" />
              <circle cx="70" cy="40" r="0.4" fill="#a6e6ff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stars)" />
        </svg>
      </div>
    </div>
  );
}
