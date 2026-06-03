import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/AnimatedSection";
import { teamRules } from "@/lib/data";

export function Teams() {
  return (
    <Section id="teams" className="bg-surface">
      <Reveal>
        <RevealItem>
          <SectionHeader
            eyebrow="Команды"
            title="Как собирается команда"
            lead="Лучшие проекты получаются, когда в команде есть и продукт, и инженерия, и взгляд со стороны бизнеса."
          />
        </RevealItem>

        <RevealItem className="mt-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teamRules.map((rule) => (
              <div
                key={rule.title}
                className="group rounded-2xl border border-border bg-white p-6 transition-all hover:border-ink/30 hover:shadow-[0_4px_20px_-8px_rgba(11,11,20,0.12)]"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.12em] text-brand">
                  {rule.title}
                </div>
                <p className="mt-3 text-pretty text-[15px] leading-relaxed text-ink/80 sm:text-base">
                  {rule.body}
                </p>
              </div>
            ))}
          </div>
        </RevealItem>
      </Reveal>
    </Section>
  );
}
