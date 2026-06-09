import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/AnimatedSection";
import { schedule } from "@/lib/data";

export function Schedule() {
  return (
    <Section id="schedule" className="bg-surface">
      <Reveal>
        <RevealItem>
          <SectionHeader
            eyebrow="Программа"
            title="3 дня от заявки до питча"
            lead="Подготовительные этапы стартуют за две недели до основного спринта."
          />
        </RevealItem>

        <RevealItem className="mt-12">
          <ol className="relative space-y-6 sm:space-y-8">
            <span
              aria-hidden="true"
              className="absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-border via-border to-transparent"
            />
            {schedule.map((step, i) => (
              <li key={step.phase} className="relative flex gap-4 sm:gap-6">
                <div className="relative z-10 flex-shrink-0">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-xs font-semibold text-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="min-w-0 flex-1 pt-1 sm:grid sm:grid-cols-[220px_1fr] sm:gap-6 sm:items-baseline sm:pt-1.5">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                      {step.when}
                    </div>
                    <h3 className="mt-1 text-balance text-base font-semibold leading-snug tracking-tight text-ink sm:text-lg">
                      {step.phase}
                    </h3>
                  </div>
                  <p className="mt-2 text-pretty text-[15px] leading-relaxed text-muted sm:mt-0">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </RevealItem>

        <RevealItem className="mt-10">
          <p className="text-pretty text-sm text-muted">
            Формат (очный / гибридный), площадка и точное расписание подтверждаются за пару недель до старта.
          </p>
        </RevealItem>
      </Reveal>
    </Section>
  );
}
