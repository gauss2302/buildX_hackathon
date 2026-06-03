import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/AnimatedSection";
import { prizes } from "@/lib/data";

export function Prizes() {
  return (
    <Section id="prizes" className="bg-surface">
      <Reveal>
        <RevealItem>
          <SectionHeader eyebrow="Призы" title="Что получает победитель" />
        </RevealItem>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <RevealItem>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-white via-white to-brand-soft p-8 sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-400/20 via-violet-400/20 to-amber-400/20 blur-3xl"
              />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                  <Star />
                  Главный приз
                </div>
                <h3 className="mt-5 text-balance text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
                  {prizes.main.title}
                </h3>
                <ul className="mt-6 space-y-3">
                  {prizes.main.items.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <Dot />
                      <span className="text-pretty text-[15px] leading-relaxed text-ink/85 sm:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealItem>

          <RevealItem>
            <div className="h-full rounded-3xl border border-border bg-white p-8 sm:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-muted px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                Возможны спецноминации
              </div>
              <ul className="mt-6 space-y-3">
                {prizes.special.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-surface-muted px-4 py-3"
                  >
                    <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Spark />
                    </span>
                    <span className="text-[15px] font-medium text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>
        </div>
      </Reveal>
    </Section>
  );
}

function Star() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
      <path d="M6 1l1.4 3 3.3.4-2.4 2.3.6 3.3L6 8.7 3.1 10l.6-3.3L1.3 4.4l3.3-.4L6 1Z" />
    </svg>
  );
}

function Spark() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M7 1v3M7 10v3M1 7h3M10 7h3M2.8 2.8 5 5M9 9l2.2 2.2M2.8 11.2 5 9M9 5l2.2-2.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Dot() {
  return (
    <span
      aria-hidden="true"
      className="mt-2.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand"
    />
  );
}
