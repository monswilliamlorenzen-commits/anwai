import { type Locale } from "@/lib/locales";

/** Korta introtexter – neutral beskrivning */
export const aboutIntro: Record<Locale, string> = {
  sv:
    "anwai är mons lorenzen och amadeus rudolfsson – en duo från stockholm och västerås. musiken beskrivs som trip-pop: melodier som funnits på streaming och i radio sedan 2010-talet, senast med dubbelsingeln '4ever hd'.",
  en:
    "anwai is mons lorenzen and amadeus rudolfsson — a duo from stockholm and västerås. the music is described as trip-pop: melodic work on streaming and radio since the mid-2010s, most recently with the '4ever hd' double single.",
};

/** Direkt saxade citat (engelska källor) + länk till respektive inlägg */
export const aboutQuotes = [
  {
    quote:
      "It's been six years since we last heard from Swedish outfit Anwai, so we're delighted to see their return today with a beautiful new single, called 'SOMETHING NEW'. … This melodic track is part of the double-single feature titled '4ever HD' … showcases an interesting fusion of indie, electronica and dreamy pop. The sound is distinctive and original but also immersive and emotionally sincere.",
    sourceLabel: "Alfitude",
    href: "https://alfitude.com/2026/03/27/anwai-something-new/",
  },
  {
    quote:
      "Five years of humming silence, diapers, and doubt — then the music quietly returned. Anwai's '4ever HD' isn't a comeback. It's forward motion in texture, patience, and trip-pop intimacy.",
    sourceLabel: "Optimates7",
    href: "https://www.optimates7.com/blog-2-1",
  },
  {
    quote:
      "We started building unnecessary pressure after our last EP, which sort of killed the spark. We've kept on making music together, just focusing on other projects.",
    sourceLabel: "Mesmerized",
    href: "https://www.mesmerized.io/anwai-4everhd-comes-from-a-hard-drive-dating-back-to-2015-its-been-a-journey/",
  },
] as const;

export const aboutQuotesHeading: Record<Locale, string> = {
  sv: "ur press och bloggar",
  en: "from press & blogs",
};
