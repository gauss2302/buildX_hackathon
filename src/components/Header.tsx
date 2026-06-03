"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/data";
import { ButtonLink } from "@/components/ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 font-semibold tracking-tight text-ink"
          aria-label="BuildX"
        >
          <Logo />
          <span>BuildX</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Основная навигация">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-muted hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-2">
          <ButtonLink href="#registration" size="md">
            Регистрация
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-surface-muted"
        >
          <Burger open={open} />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`sm:hidden overflow-hidden border-t border-border bg-white transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-4" aria-label="Мобильная навигация">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="border-b border-border py-3 text-base text-ink last:border-b-0"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4">
            <ButtonLink
              href="#registration"
              size="lg"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Регистрация
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <svg
      width="28"
      height="28"
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

function Burger({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <line
        x1="3"
        y1={open ? "10" : "6"}
        x2="17"
        y2={open ? "10" : "6"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        style={{
          transform: open ? "rotate(45deg)" : "none",
          transformOrigin: "10px 10px",
          transition: "transform 200ms",
        }}
      />
      <line
        x1="3"
        y1="10"
        x2="17"
        y2="10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        style={{ opacity: open ? 0 : 1, transition: "opacity 200ms" }}
      />
      <line
        x1="3"
        y1={open ? "10" : "14"}
        x2="17"
        y2={open ? "10" : "14"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        style={{
          transform: open ? "rotate(-45deg)" : "none",
          transformOrigin: "10px 10px",
          transition: "transform 200ms",
        }}
      />
    </svg>
  );
}
