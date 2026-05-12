import { cn } from "../../lib/utils/cn";
import type { ReactNode } from "react";

type Tone = "neutral" | "primary" | "success" | "warning" | "error" | "tertiary" | "secondary";

interface BadgeProps {
  tone?: Tone;
  children: ReactNode;
  className?: string;
}

const tones: Record<Tone, string> = {
  neutral: "bg-white/5 text-on-surface-variant border-white/10",
  primary: "bg-primary/15 text-primary border-primary/30",
  success: "bg-success/15 text-success border-success/40",
  warning: "bg-warning/15 text-warning border-warning/40",
  error: "bg-error/20 text-error border-error/30",
  tertiary: "bg-tertiary/15 text-tertiary border-tertiary/30",
  secondary: "bg-secondary/15 text-secondary border-secondary/30",
};

export function Badge({ tone = "neutral", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-label-caps tracking-[0.08em] uppercase backdrop-blur-md",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
