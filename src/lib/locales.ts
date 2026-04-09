export const locales = ["sv", "en"] as const;
export type Locale = (typeof locales)[number];

export const translations = {
  sv: {
    nav: {
      about: "Om oss",
      discography: "Diskografi",
      merch: "Merch",
      contact: "Kontakt",
    },
    about: {
      title: "Om oss",
      lead:
        "anwai är mons lorenzen och amadeus rudolfsson. alfitude skriver om återkomsten med 'something new' ur dubbelsläppet '4ever hd' och lyfter en fusion av indie, electronica och dreamig pop som är distinkt och originell men också uppslukande och känsloäkta. optimates7 beskriver '4ever hd' som framåtrörelse i textur, tålamod och trip-pop-intimitet – inte en ren comeback utan något som växer fram efter tystnad. i mesmerized.io:s intervju berättar duon bland annat om tryck efter senaste ep:n och material från en hårddisk tillbaka till 2015; artikeln nämner att tidiga spår som 'asking' och 'move along' passerat över en halv miljon streams på spotify, och att anwai kallar återkomsten en distorted continuation.",
    },
    contact: {
      title: "Kontakt",
      lead: "bokningar, press eller samarbeten.",
      email: "Email",
      management: "Management",
      social: "Sociala medier",
      sendEmail: "Skicka mail",
    },
    merch: {
      title: "Merch",
      underConstruction: "under konstruktion",
      items: [
        { name: "ANWAI Tee", desc: "Svart T-shirt • Unisex" },
        { name: "Night Poster", desc: "40x60 cm • Matt finish" },
        { name: "Logo Cap", desc: "Broderad keps • One size" },
      ],
    },
    discography: {
      title: "Diskografi",
    },
    back: "tillbaka",
    footer: "© 2026 Anwai. Alla rättigheter förbehållna.",
  },
  en: {
    nav: {
      about: "About",
      discography: "Discography",
      merch: "Merch",
      contact: "Contact",
    },
    about: {
      title: "About",
      lead:
        "anwai are mons lorenzen and amadeus rudolfsson. alfitude writes about the return with 'something new' from the '4ever hd' double release, praising an \"interesting fusion of indie, electronica and dreamy pop\" that is \"distinctive and original but also immersive and emotionally sincere.\" optimates7 frames '4ever hd' as \"forward motion in texture, patience, and trip-pop intimacy\"—not a conventional comeback. mesmerized.io’s interview quotes the duo on pressure after their last ep and material from a hard drive dating back to 2015; the piece notes tracks like 'asking' and 'move along' have passed half a million spotify streams, and anwai call the return a \"distorted continuation.\"",
    },
    contact: {
      title: "Contact",
      lead: "bookings, press, or collaborations.",
      email: "Email",
      management: "Management",
      social: "Socials",
      sendEmail: "Send email",
    },
    merch: {
      title: "Merch",
      underConstruction: "under construction",
      items: [
        { name: "ANWAI Tee", desc: "Black T-shirt • Unisex" },
        { name: "Night Poster", desc: "40x60 cm • Matte finish" },
        { name: "Logo Cap", desc: "Embroidered cap • One size" },
      ],
    },
    discography: {
      title: "Discography",
    },
    back: "go back",
    footer: "© 2026 Anwai. All rights reserved.",
  },
} as const;
