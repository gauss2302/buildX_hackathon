import { orgContact, nav } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface-muted text-ink">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-ink">
            <Logo />
            <span>BuildX</span>
          </div>
          <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted">
            Внутренний корпоративный хакатон. Регистрируясь, участник подтверждает, что прочитал Положение о хакатоне и согласен с правилами; внутренние данные и сервисы конфиденциальны.
          </p>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            Оргкомитет
          </div>
          <ul className="mt-4 space-y-2 text-sm text-ink/85">
            <li>{orgContact.channel}</li>
            <li>
              <a
                href={orgContact.policyLink}
                className="inline-flex items-center gap-1.5 text-ink underline-offset-4 hover:underline"
              >
                {orgContact.policyLabel}
                <Arrow />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            Разделы
          </div>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-ink/85">
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:text-brand">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-2 px-5 py-6 text-xs text-muted sm:flex-row sm:items-center sm:px-8">
          <div>© {year} BuildX. Внутренний документ.</div>
          <div>Сделано Оргкомитетом BuildX.</div>
        </div>
      </div>
    </footer>
  );
}

function Logo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      className="text-ink"
    >
      <rect width="28" height="28" rx="8" fill="currentColor" />
      <path
        d="M8.5 8.5h4.2c2.2 0 3.6 1.1 3.6 2.9 0 1.2-.7 2.1-1.8 2.5 1.4.3 2.3 1.3 2.3 2.7 0 2-1.5 3.1-3.9 3.1H8.5V8.5Zm4 4.6c1 0 1.6-.5 1.6-1.3s-.6-1.3-1.6-1.3h-1.8v2.6h1.8Zm.2 4.6c1.1 0 1.8-.5 1.8-1.4 0-.9-.7-1.4-1.8-1.4h-2v2.8h2Z"
        fill="white"
      />
      <path
        d="M18 8.5h2.8l1.6 4 1.6-4H27l-3 6.6 3 6.6h-2.8l-1.6-4-1.6 4H18l3-6.6-3-6.6Z"
        fill="white"
      />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M3 9 9 3M9 3H4m5 0v5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
