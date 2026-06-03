import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/AnimatedSection";
import { tracks } from "@/lib/data";
import type { ReactNode } from "react";

const icons: Record<string, ReactNode> = {
  telecom: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 14a8 8 0 0 1 16 0M7 14a5 5 0 0 1 10 0M10 14a2 2 0 0 1 4 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="18" r="1.4" fill="currentColor" />
    </svg>
  ),
  "cx-crm": (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 18v-1a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="6" y="6" width="12" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="9.5" cy="10.5" r="0.9" fill="currentColor" />
      <circle cx="14.5" cy="10.5" r="0.9" fill="currentColor" />
      <path d="M9 14.5h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  travel: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m3 14 7-2 4-7 1.5.5L13 12l5-1 1.5-2 1 .5L19 14l2 .5-1.5 1.7L4 18l-1-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  marketplaces: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16l-1.5 9.5a2 2 0 0 1-2 1.7H7.5a2 2 0 0 1-2-1.7L4 7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  media: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 9.5v5l4-2.5-4-2.5Z" fill="currentColor" />
    </svg>
  ),
};

export function Tracks() {
  return (
    <Section id="tracks" className="bg-surface-muted">
      <Reveal>
        <RevealItem>
          <SectionHeader
            eyebrow="Направления"
            title="6 индустрий, где мы ищем продукты"
            lead="Каждая команда выбирает одно направление в момент подачи заявки."
          />
        </RevealItem>

        <RevealItem className="mt-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tracks.map((t, i) => (
              <article
                key={t.id}
                className="group relative flex flex-col rounded-2xl border border-border bg-white p-6 transition-all hover:border-ink/30 hover:shadow-[0_8px_30px_-12px_rgba(11,11,20,0.18)]"
              >
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white [&>svg]:h-6 [&>svg]:w-6">
                    {icons[t.id]}
                  </div>
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-balance text-xl font-semibold leading-snug tracking-tight text-ink">
                  {t.title}
                </h3>
                <p className="mt-3 text-pretty text-[15px] leading-relaxed text-muted">
                  {t.body}
                </p>
              </article>
            ))}
          </div>
        </RevealItem>

        <RevealItem className="mt-8">
          <p className="text-pretty text-sm text-muted">
            Если есть сильное направление вне списка — напишите в Оргкомитет, перечень могут обновить до старта.
          </p>
        </RevealItem>
      </Reveal>
    </Section>
  );
}
