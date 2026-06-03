import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/Button";
import { event } from "@/lib/data";
import { formUrls } from "@/lib/env";

type TrackCardProps = {
  badge: string;
  title: string;
  body: string;
  bullets: string[];
  href: string;
  ctaLabel: string;
  primary: boolean;
  unavailable: boolean;
};

function TrackCard({
  badge,
  title,
  body,
  bullets,
  href,
  ctaLabel,
  primary,
  unavailable,
}: TrackCardProps) {
  const surface = primary
    ? "bg-gradient-to-br from-white via-white to-brand-soft border-border"
    : "bg-white border-border";
  const badgeStyles = primary
    ? "bg-white text-brand border-brand/15"
    : "bg-surface-muted text-muted border-border";

  return (
    <div className={`relative flex h-full flex-col rounded-3xl border p-7 sm:p-9 ${surface}`}>
      {primary && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br from-indigo-400/20 via-violet-400/20 to-amber-400/20 blur-3xl"
        />
      )}
      <div className="relative flex flex-1 flex-col">
        <div
          className={`inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${badgeStyles}`}
        >
          {badge}
        </div>
        <h3 className="mt-5 text-balance text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
          {title}
        </h3>
        <p className="mt-3 text-pretty text-[15px] leading-relaxed text-muted sm:text-base">
          {body}
        </p>

        <ul className="mt-6 space-y-3">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand"
              />
              <span className="text-pretty text-sm leading-relaxed text-ink/85 sm:text-[15px]">
                {b}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:mt-auto sm:pt-8">
          {unavailable ? (
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="inline-flex h-14 w-full items-center justify-center rounded-full border border-border bg-surface-muted px-7 text-base font-medium text-muted"
            >
              Ссылка появится скоро
            </button>
          ) : (
            <ButtonLink
              href={href}
              size="lg"
              variant={primary ? "primary" : "secondary"}
              className="w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ctaLabel}
              <Arrow />
            </ButtonLink>
          )}
          <p className="text-center text-xs text-muted">
            Откроется в новой вкладке (Google Forms)
          </p>
        </div>
      </div>
    </div>
  );
}

export function Registration() {
  const teamUnavailable = !formUrls.team;
  const soloUnavailable = !formUrls.solo;

  return (
    <Section id="registration" className="bg-surface-muted">
      <Reveal>
        <RevealItem>
          <SectionHeader
            eyebrow="Регистрация"
            title="Выберите дорожку"
            lead="Капитан подаёт заявку за команду. Если команды нет — оставьте контакт и роль, Оргкомитет соберёт пул и поможет найти своих."
          />
        </RevealItem>

        <RevealItem className="mt-12">
          <div className="grid gap-5 lg:grid-cols-2">
            <TrackCard
              badge="A · У нас есть команда"
              title="Зарегистрировать команду"
              body="Капитан заполняет заявку, указывает направление и состав (3–5 человек)."
              bullets={[
                "Название команды и направление",
                "Капитан + минимум 2 участника обязательны, ещё 2 — опциональны",
                "По каждому участнику: ФИО, подразделение, email, роль",
                "Согласие с Положением",
              ]}
              href={formUrls.team}
              ctaLabel="Открыть форму регистрации"
              primary
              unavailable={teamUnavailable}
            />
            <TrackCard
              badge="B · Я без команды"
              title="Ищу команду"
              body="Оставьте контакт, роль и интересные направления — попадёте в общий пул, где участники находят друг друга."
              bullets={[
                "ФИО, подразделение, email, Telegram",
                "Роль / специализация и навыки",
                "Интересные направления из 6",
                "Пара слов о себе (опционально)",
              ]}
              href={formUrls.solo}
              ctaLabel="Открыть форму поиска"
              primary={false}
              unavailable={soloUnavailable}
            />
          </div>
        </RevealItem>

        <RevealItem className="mt-8">
          <div className="rounded-2xl border border-border bg-white p-5 sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
              <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Info />
              </span>
              <div className="text-pretty text-sm leading-relaxed text-ink/80 sm:text-[15px]">
                <strong className="font-semibold text-ink">{event.registrationDeadline}.</strong>{" "}
                Финальные составы команд подтверждает Оргкомитет — после закрытия приёма заявок проверяется размер команды и отсутствие пересечений по людям.
              </div>
            </div>
          </div>
        </RevealItem>
      </Reveal>
    </Section>
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

function Info() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 6.5V10M7 4.2v.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
