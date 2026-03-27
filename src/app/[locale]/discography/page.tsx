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
        <div className="mx-auto flex w-full max-w-[min(100%,440px)] flex-col gap-6 sm:gap-7">
          <div className="page-hero text-center">
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] sm:text-[clamp(2.2rem,7vw,3.4rem)]">{t.title}</h1>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {albums.map((album, index) => (
              <Link
                key={album.alt}
                href={album.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  index === albums.length - 1
                    ? "col-start-2 aspect-square min-w-0"
                    : "aspect-square min-w-0"
                }
              >
                <Image
                  src={album.src}
                  alt={album.alt}
                  width={160}
                  height={160}
                  className="h-full w-full object-cover object-center rounded-lg border-2 border-[var(--border)] bg-[#0b0b0b]"
                  loading="lazy"
                />
              </Link>
            ))}
          </div>
        </div>
        <BackLink locale={locale} />
      </div>
      <Footer locale={locale} />
    </main>
  );
}
