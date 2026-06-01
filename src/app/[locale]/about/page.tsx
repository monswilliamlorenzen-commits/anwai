import { LangToggle } from "@/components/LangToggle";
import { Footer } from "@/components/Footer";
import { BackLink } from "@/components/BackLink";
import { translations } from "@/lib/locales";
import { aboutIntro, aboutQuotes, aboutQuotesHeading } from "@/lib/aboutCopy";
import { type Locale } from "@/lib/locales";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = translations[locale].about;

  return (
    <main className="page min-h-screen flex flex-col pb-[90px] sm:pb-[70px] lowercase">
      <div className="flex-1 px-[8vw] sm:px-[6vw] py-16 sm:py-14 grid gap-7 relative">
        <LangToggle locale={locale} path={`/${locale}/about`} />
        <div className="page-hero max-w-[700px]">
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] sm:text-[clamp(2.2rem,7vw,3.4rem)] mb-6">{t.title}</h1>
          <p className="text-[var(--muted)] text-[1.15rem] leading-relaxed">{aboutIntro[locale]}</p>
        </div>

        <div className="max-w-[700px] grid gap-6 normal-case">
          <div className="my-2 border-t border-[var(--border)]" />
          <p className="text-[var(--muted)] text-sm uppercase tracking-[0.15rem]">{aboutQuotesHeading[locale]}</p>
          <ul className="grid gap-8 list-none p-0 m-0">
            {aboutQuotes.map((item) => (
              <li key={`${item.sourceLabel}-${item.href}-${item.quote.slice(0, 24)}`}>
                <blockquote className="border-l-2 border-[var(--border)] pl-4 m-0">
                  <p className="text-[var(--text)] text-[1.05rem] leading-relaxed not-italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <footer className="mt-3 text-[var(--muted)] text-[0.9rem]">
                    —{" "}
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text)] underline underline-offset-2 hover:text-[var(--muted)] transition-colors"
                    >
                      {item.sourceLabel}
                    </a>
                  </footer>
                </blockquote>
              </li>
            ))}
          </ul>
        </div>

        <BackLink locale={locale} />
      </div>
      <Footer locale={locale} />
    </main>
  );
}
