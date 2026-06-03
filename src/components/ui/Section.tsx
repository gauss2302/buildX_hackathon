import type { ReactNode } from "react";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div";
};

export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  as = "section",
}: Props) {
  const Tag = as;
  return (
    <Tag id={id} className={`scroll-mt-20 py-20 sm:py-28 ${className}`}>
      <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${containerClassName}`}>
        {children}
      </div>
    </Tag>
  );
}

type HeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, lead, align = "left" }: HeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          {eyebrow}
        </div>
      )}
      <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {lead && (
        <p className="mt-5 text-pretty text-base leading-relaxed text-muted sm:text-lg">
          {lead}
        </p>
      )}
    </div>
  );
}
