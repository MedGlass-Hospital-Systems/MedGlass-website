import { cn } from "../../lib/utils/cn";
import type { HTMLAttributes } from "react";

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "chip";
}

const variants = {
  default: "glass-card",
  elevated: "glass-card-elevated",
  chip: "glass-chip",
};

export function GlassPanel({ className, variant = "default", ...props }: GlassPanelProps) {
  return (
    <div
      className={cn(variants[variant], "rounded-2xl", className)}
      {...props}
    />
  );
}
