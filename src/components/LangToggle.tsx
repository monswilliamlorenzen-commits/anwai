import Link from "next/link";
import { type Locale } from "@/lib/locales";

interface LangToggleProps {
  locale: Locale;
  path: string;
}

export function LangToggle({ locale, path }: LangToggleProps) {
  const svPath = path.replace("/en", "/sv");
  const enPath = path.replace("/sv", "/en");

  return (
    <div className="absolute top-4 right-[8vw] sm:right-[6vw] md:right-[8vw] inline-flex items-center gap-2.5 text-[0.8rem] sm:text-[0.7rem] tracking-[0.2rem] sm:tracking-[0.16rem] uppercase text-[var(--muted)]">
      <Link href={svPath} className={locale === "sv" ? "text-[var(--text)]" : ""}>
        SE
      </Link>
      <span>/</span>
      <Link href={enPath} className={locale === "en" ? "text-[var(--text)]" : ""}>
        EN
      </Link>
    </div>
  );
}
