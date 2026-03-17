import Link from "next/link";
import { type Locale } from "@/lib/locales";
import { translations } from "@/lib/locales";

interface BackLinkProps {
  locale: Locale;
}

export function BackLink({ locale }: BackLinkProps) {
  return (
    <Link
      href={`/${locale}`}
      className="fixed left-0 right-0 bottom-[34px] sm:bottom-7 block py-2 px-6 text-[0.85rem] sm:text-[0.7rem] tracking-[0.12rem] sm:tracking-[0.1rem] uppercase text-[var(--muted)] whitespace-nowrap overflow-hidden text-center hover:text-[var(--text)]"
      aria-label={locale === "sv" ? "Tillbaka till startsidan" : "Go back to the landing page"}
    >
      <span className="block text-[0.65rem] sm:text-[0.55rem] tracking-[0.18rem] mb-1.5">{translations[locale].back}</span>
      <span className="block tracking-[0.2rem]">&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</span>
    </Link>
  );
}
