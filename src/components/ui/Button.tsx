import { Link } from "react-router-dom";
import { cn } from "../../lib/utils/cn";
import { Icon } from "../layout/Icon";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  icon?: string;
  iconPosition?: "left" | "right";
  children?: ReactNode;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container shadow-[0_4px_14px_0_rgba(173,198,255,0.39)] hover:shadow-[0_6px_24px_rgba(173,198,255,0.45)]",
  secondary:
    "glass-card-elevated text-primary hover:bg-surface-container-high/60",
  ghost:
    "text-on-surface-variant hover:text-primary hover:bg-white/5",
  outline:
    "border border-outline-variant text-on-surface hover:border-primary hover:text-primary",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-[12px] font-label-caps tracking-[0.08em] uppercase",
  md: "px-5 py-2.5 text-[12px] font-label-caps tracking-[0.08em] uppercase",
  lg: "px-7 py-3.5 text-[13px] font-label-caps tracking-[0.08em] uppercase",
};

const iconSize: Record<Size, string> = {
  sm: "text-[16px]",
  md: "text-[18px]",
  lg: "text-[20px]",
};

interface LinkProps extends BaseProps, Omit<React.ComponentProps<typeof Link>, keyof BaseProps | "to"> {
  to: string;
}
interface ButtonElProps extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> {
  to?: never;
}

export function Button(props: LinkProps | ButtonElProps) {
  const {
    variant = "primary",
    size = "md",
    icon,
    iconPosition = "left",
    className,
    children,
    ...rest
  } = props;

  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 focus-ring whitespace-nowrap font-semibold",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  const content = (
    <>
      {icon && iconPosition === "left" && <Icon name={icon} className={iconSize[size]} />}
      {children}
      {icon && iconPosition === "right" && <Icon name={icon} className={iconSize[size]} />}
    </>
  );

  if ("to" in props && props.to) {
    return (
      <Link className={cls} to={props.to} {...(rest as Omit<React.ComponentProps<typeof Link>, "to" | "className">)}>
        {content}
      </Link>
    );
  }
  return (
    <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
