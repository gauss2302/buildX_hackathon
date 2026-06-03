import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand " +
  "disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-white hover:bg-brand active:scale-[0.98] shadow-[0_1px_0_rgba(255,255,255,0.1)_inset]",
  secondary:
    "bg-white text-ink border border-border-strong hover:border-ink hover:bg-surface-muted active:scale-[0.98]",
  ghost: "bg-transparent text-ink hover:bg-surface-muted",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[15px]",
  lg: "h-14 px-7 text-base sm:text-lg",
};

function buttonClass(variant: Variant = "primary", size: Size = "md", className = "") {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

type ButtonLinkProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className">;

export function ButtonLink({
  variant,
  size,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <a className={buttonClass(variant, size, className)} {...rest}>
      {children}
    </a>
  );
}

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export function Button({
  variant,
  size,
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={buttonClass(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}
