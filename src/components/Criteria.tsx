"use client";

import { motion } from "motion/react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/AnimatedSection";
import { criteria } from "@/lib/data";

export function Criteria() {
  return (
    <Section id="criteria" className="bg-surface-muted">
      <Reveal>
        <RevealItem>
          <SectionHeader
            eyebrow="Критерии оценки"
            title="По чему судят жюри"
            lead="Каждый критерий оценивается по шкале 1–10. Итог — взвешенная сумма; при равенстве решает председатель жюри."
          />
        </RevealItem>

        <RevealItem className="mt-12">
          <ul className="space-y-4">
            {criteria.map((c, i) => (
              <li
                key={c.title}
                className="grid grid-cols-1 gap-4 rounded-2xl border border-border bg-white p-5 sm:grid-cols-[1fr_180px] sm:items-center sm:p-6"
              >
                <div className="min-w-0">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      0{i + 1}
                    </span>
                    <h3 className="text-balance text-lg font-semibold leading-snug text-ink sm:text-xl">
                      {c.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted sm:text-[15px]">
                    {c.body}
                  </p>
                </div>

                <div className="sm:justify-self-end sm:w-full">
                  <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end sm:gap-2">
                    <div className="text-3xl font-semibold tabular-nums text-ink sm:text-4xl">
                      {c.weight}
                      <span className="text-muted text-xl sm:text-2xl">%</span>
                    </div>
                    <div className="h-1.5 w-32 overflow-hidden rounded-full bg-surface-muted sm:w-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${c.weight * (100 / 30)}%` }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{
                          duration: 0.8,
                          ease: [0.21, 0.6, 0.35, 1],
                          delay: 0.1 + i * 0.05,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-[color:var(--accent)] via-[color:var(--accent-pressed)] to-[color:var(--text-primary)]"
                      />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </RevealItem>
      </Reveal>
    </Section>
  );
}
