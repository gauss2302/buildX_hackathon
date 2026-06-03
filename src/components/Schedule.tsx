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
          <ol className="relative space-y-4 sm:space-y-0">
            <span
              aria-hidden="true"
              className="absolute left-[18px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-border via-border to-transparent sm:block"
            />
            {schedule.map((step, i) => (
              <li
                key={step.phase}
                className="relative sm:grid sm:grid-cols-[40px_240px_1fr] sm:gap-6 sm:items-start"
              >
                <div className="hidden sm:block relative">
                  <span className="absolute left-0 top-1.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-xs font-semibold text-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="sm:pt-2.5">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                    {step.when}
                  </div>
                  <h3 className="mt-1 text-balance text-base font-semibold leading-snug tracking-tight text-ink sm:text-lg">
                    {step.phase}
                  </h3>
                </div>

                <div className="mt-2 rounded-2xl border border-border bg-surface-muted p-5 sm:mt-0 sm:bg-transparent sm:border-0 sm:p-0 sm:pt-3">
                  <p className="text-pretty text-[15px] leading-relaxed text-muted">
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
