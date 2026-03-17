import { type Locale } from "@/lib/locales";
import { translations } from "@/lib/locales";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  return (
    <footer className="fixed left-0 right-0 bottom-0 z-10 py-2 px-[8vw] text-center border-t border-[var(--border)] text-[var(--muted)] lowercase text-[0.7rem] sm:text-[0.6rem]">
      <p>{translations[locale].footer}</p>
    </footer>
  );
}
