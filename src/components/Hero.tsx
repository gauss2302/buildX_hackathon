"use client";

import { motion } from "motion/react";
import { event } from "@/lib/data";
import { ButtonLink } from "@/components/ui/Button";
import { AnimatedX } from "@/components/AnimatedX";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-white text-ink"
    >
      <div className="absolute inset-0 -z-10 hero-aurora" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 hero-grid-light" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto flex min-h-[88vh] w-full max-w-6xl flex-col justify-center px-5 pb-20 pt-28 sm:px-8 sm:pt-32 lg:min-h-[92vh]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.6, 0.35, 1] }}
        >
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-white/70 px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-muted backdrop-blur-sm sm:px-3 sm:text-xs sm:tracking-[0.16em]">
            <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
            <span className="truncate">Внутренний корпоративный хакатон</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.21, 0.6, 0.35, 1] }}
          className="text-balance mt-7 text-[2.5rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          Хакатон{" "}
          <span className="bg-gradient-to-r from-[color:var(--accent)] via-[color:var(--accent-pressed)] to-[color:var(--text-primary)] bg-clip-text text-transparent">
            Build<AnimatedX />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.21, 0.6, 0.35, 1] }}
          className="text-pretty mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          {event.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.21, 0.6, 0.35, 1] }}
          className="mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
        >
          {event.facts.map((f) => (
            <div
              key={f.label}
              className="rounded-2xl border border-border bg-white/80 p-4 backdrop-blur-sm"
            >
              <div className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {f.value}
              </div>
              <div className="mt-1 text-xs leading-snug text-muted sm:text-sm">
                {f.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: [0.21, 0.6, 0.35, 1] }}
          className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <ButtonLink href="#registration" size="lg" variant="primary">
            Зарегистрировать команду
            <Arrow />
          </ButtonLink>
          <ButtonLink href="#registration" size="lg" variant="secondary">
            Ищу команду
          </ButtonLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:gap-6"
        >
          <div className="flex items-center gap-2">
            <Dot />
            <span>{event.dates}</span>
          </div>
          <div className="flex items-center gap-2">
            <Dot />
            <span>{event.registrationDeadline}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10m0 0-4-4m4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Dot() {
  return <span className="h-1 w-1 rounded-full bg-border-strong" aria-hidden="true" />;
}
