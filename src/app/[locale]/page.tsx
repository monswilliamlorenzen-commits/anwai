import Image from "next/image";
import Link from "next/link";
import { LangToggle } from "@/components/LangToggle";
import { Footer } from "@/components/Footer";
import { SeamlessVideoBg } from "@/components/SeamlessVideoBg";
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
      <SeamlessVideoBg />
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[minmax(200px,1fr)_minmax(220px,320px)] gap-8 items-center px-[8vw] sm:px-[6vw] py-10 sm:py-14 relative z-10">
        <LangToggle locale={locale} path={`/${locale}`} />
        <div className="max-w-[680px] relative py-5">
          <Image
            src="/anwailogo.png"
            alt="Anwai"
            width={520}
            height={120}
            unoptimized
            className="block w-[min(520px,90%)] sm:w-[min(320px,92%)] h-auto my-2 brightness-0 invert"
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
