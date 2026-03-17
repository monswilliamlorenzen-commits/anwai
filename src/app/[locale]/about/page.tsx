import { LangToggle } from "@/components/LangToggle";
import { Footer } from "@/components/Footer";
import { BackLink } from "@/components/BackLink";
import { translations } from "@/lib/locales";
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
        <div className="page-hero">
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] sm:text-[clamp(2.2rem,7vw,3.4rem)] mb-3">{t.title}</h1>
          <p className="text-[var(--muted)] text-[1.15rem]">{t.lead}</p>
        </div>
        <div className="max-w-[700px] grid gap-6">
          <div className="my-6 border-t border-[var(--border)]" />
        </div>
        <BackLink locale={locale} />
      </div>
      <Footer locale={locale} />
    </main>
  );
}
