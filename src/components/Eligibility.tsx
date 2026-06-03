import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/AnimatedSection";
import { eligibility } from "@/lib/data";

export function Eligibility() {
  return (
    <Section id="eligibility" className="bg-surface-muted">
      <Reveal>
        <RevealItem>
          <SectionHeader
            eyebrow="Кто может участвовать"
            title="Условия допуска"
            lead="Хакатон открыт для всех команд внутри компании — от инженеров до бизнес-ролей."
          />
        </RevealItem>

        <RevealItem className="mt-10">
          <ul className="grid gap-3 md:grid-cols-2">
            {eligibility.map((item, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-2xl border border-border bg-white p-5 sm:p-6"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-ink text-xs font-semibold text-white"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-pretty text-[15px] leading-relaxed text-ink/85 sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </RevealItem>
      </Reveal>
    </Section>
  );
}
