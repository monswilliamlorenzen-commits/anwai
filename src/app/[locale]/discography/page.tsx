import Image from "next/image";
import Link from "next/link";
import { LangToggle } from "@/components/LangToggle";
import { Footer } from "@/components/Footer";
import { BackLink } from "@/components/BackLink";
import { translations } from "@/lib/locales";
import { albums } from "@/lib/albums";
import { type Locale } from "@/lib/locales";

export default async function DiscographyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = translations[locale].discography;

  return (
    <main className="page min-h-screen flex flex-col pb-[90px] sm:pb-[70px] lowercase">
      <div className="flex-1 px-[8vw] sm:px-[6vw] py-16 sm:py-14 grid gap-7 relative">
        <LangToggle locale={locale} path={`/${locale}/discography`} />
        <div className="page-hero">
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] sm:text-[clamp(2.2rem,7vw,3.4rem)]">{t.title}</h1>
        </div>
        <div className="max-w-[700px] grid gap-0">
          <div className="grid gap-0 sm:gap-3">
            {Array.from({ length: Math.ceil(albums.length / 3) }, (_, row) => (
              <div
                key={row}
                className="flex gap-0 flex-wrap justify-start sm:grid sm:grid-cols-3 sm:gap-0 sm:w-full"
              >
                {albums.slice(row * 3, row * 3 + 3).map((album) => (
                  <Link key={album.alt} href={album.href} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
                    <Image
                      src={album.src}
                      alt={album.alt}
                      width={424}
                      height={424}
                      className="w-full sm:w-[min(240px,90vw)] sm:h-[min(240px,90vw)] sm:object-cover object-center block rounded-xl border-2 border-[var(--border)] bg-[#0b0b0b] aspect-square"
                      loading="lazy"
                    />
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <BackLink locale={locale} />
      </div>
      <Footer locale={locale} />
    </main>
  );
}
