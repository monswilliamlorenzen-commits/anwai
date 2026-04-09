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
