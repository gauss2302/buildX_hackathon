import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/AnimatedSection";
import { expectations } from "@/lib/data";

export function Expectations() {
  return (
    <Section id="expectations" className="bg-surface">
      <Reveal>
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <RevealItem>
            <SectionHeader
              eyebrow="Что ждём от проектов"
              title="Требования к MVP и питчу"
              lead="Допускаем разный уровень готовности — главное, чтобы идея и ценность были понятны жюри и пилотным заказчикам."
            />
          </RevealItem>

          <RevealItem>
            <ul className="space-y-5">
              {expectations.map((e, i) => (
                <li
                  key={i}
                  className="flex gap-4 rounded-2xl border border-border bg-surface-muted p-5 sm:p-6"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-ink text-xs font-semibold text-white"
                  >
                    {i + 1}
                  </span>
                  <span className="text-pretty text-[15px] leading-relaxed text-ink/85 sm:text-base">
                    {e}
                  </span>
                </li>
              ))}
            </ul>
          </RevealItem>
        </div>
      </Reveal>
    </Section>
  );
}
