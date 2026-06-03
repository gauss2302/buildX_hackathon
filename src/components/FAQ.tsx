import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/AnimatedSection";
import { faq } from "@/lib/data";

export function FAQ() {
  return (
    <Section id="faq" className="bg-surface">
      <Reveal>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <RevealItem>
            <SectionHeader
              eyebrow="FAQ"
              title="Частые вопросы"
              lead="Не нашли ответ — напишите в Оргкомитет, дополним этот блок."
            />
          </RevealItem>

          <RevealItem>
            <div className="divide-y divide-border rounded-2xl border border-border bg-white">
              {faq.map((item, i) => (
                <details
                  key={i}
                  className="group px-5 py-4 sm:px-6 sm:py-5 [&[open]>summary>span:last-child]:rotate-45"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-balance text-base font-medium text-ink hover:text-brand sm:text-lg [&::-webkit-details-marker]:hidden">
                    <span>{item.q}</span>
                    <span
                      aria-hidden="true"
                      className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-border text-muted transition-transform duration-200"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M7 1v12M1 7h12"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="mt-3 text-pretty text-[15px] leading-relaxed text-muted sm:text-base">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </RevealItem>
        </div>
      </Reveal>
    </Section>
  );
}
