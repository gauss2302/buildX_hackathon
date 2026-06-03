import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/AnimatedSection";
import { aboutGoals } from "@/lib/data";

export function About() {
  return (
    <Section id="about" className="bg-surface">
      <Reveal>
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <RevealItem>
            <SectionHeader
              eyebrow="О хакатоне"
              title="Зачем мы это делаем"
              lead="Три дня, чтобы превратить рабочую гипотезу в прототип, который не стыдно показать пилотным заказчикам и коллегам."
            />
          </RevealItem>

          <RevealItem>
            <ul className="space-y-4">
              {aboutGoals.map((goal, i) => (
                <li key={i} className="flex gap-4">
                  <Check />
                  <span className="text-pretty text-base leading-relaxed text-ink/85 sm:text-lg">
                    {goal}
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

function Check() {
  return (
    <span
      aria-hidden="true"
      className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M3 7.5 5.8 10 11 4.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
