import Link from "next/link";
import { LangToggle } from "@/components/LangToggle";
import { Footer } from "@/components/Footer";
import { LogoVideoFrame } from "@/components/LogoVideoFrame";
import { translations } from "@/lib/locales";
import { type Locale } from "@/lib/locales";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = translations[locale];

  return (
    <main className="landing min-h-screen flex flex-col pb-[90px] sm:pb-[70px] relative">
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-10 px-[8vw] sm:px-[6vw] py-10 sm:py-14">
        <LangToggle locale={locale} path={`/${locale}`} />
        <div className="relative inline-block">
          <div
            className="pointer-events-none absolute -inset-5 z-0 overflow-hidden border border-[var(--border)] opacity-75 sm:-inset-7 md:-inset-9"
            aria-hidden
          >
            <div className="absolute inset-0">
              <LogoVideoFrame />
            </div>
          </div>
          <img
            src="/anwai-logo-hero.png"
            alt="Anwai"
            width={512}
            height={512}
            fetchPriority="high"
            decoding="async"
            className="relative z-10 m-0 block h-auto w-[min(340px,88vw)] border-0 bg-transparent p-0 shadow-none outline-none sm:w-[min(440px,78vw)]"
            style={{ backgroundColor: "transparent", boxShadow: "none" }}
          />
        </div>
        <nav className="grid gap-2.5" aria-label={locale === "sv" ? "Undersidor" : "Subpages"}>
          <Link href={`/${locale}/about`} className="flex items-center justify-between py-1 font-bold text-[1.1rem] sm:text-[0.95rem] tracking-[0.15rem] sm:tracking-[0.12rem] uppercase hover:text-[var(--text)]">
            {t.nav.about}
          </Link>
          <Link href={`/${locale}/discography`} className="flex items-center justify-between py-1 font-bold text-[1.1rem] sm:text-[0.95rem] tracking-[0.15rem] sm:tracking-[0.12rem] uppercase hover:text-[var(--text)]">
            {t.nav.discography}
          </Link>
          <Link href={`/${locale}/merch`} className="flex items-center justify-between py-1 font-bold text-[1.1rem] sm:text-[0.95rem] tracking-[0.15rem] sm:tracking-[0.12rem] uppercase hover:text-[var(--text)]">
            {t.nav.merch}
          </Link>
          <Link href={`/${locale}/contact`} className="flex items-center justify-between py-1 font-bold text-[1.1rem] sm:text-[0.95rem] tracking-[0.15rem] sm:tracking-[0.12rem] uppercase hover:text-[var(--text)]">
            {t.nav.contact}
          </Link>
        </nav>
      </div>
      <Footer locale={locale} />
    </main>
  );
}
