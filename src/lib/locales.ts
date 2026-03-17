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
        "anwai är hjärteprojektet av amadeus rudolfsson och mons lorenzen och karaktäriseras av det säregna ljudet som ebbas ut i genren trip-pop. projektet har funnits sedan mitten av 2010-talet och har genom åren spelats flitigt på streamingtjänster och radio, nämnvärt har duons låt 'Move Along' varit med på Netflix-serien 'DeGrassi: Next Class' och just nu är duon aktuella med dubbelsingeln '4ever HD' efter ett par års hiatus",
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
      lead: "Enkla favoriter till gig och vardag.",
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
        "anwai is the heart project of amadeus rudolfsson and mons lorenzen and is defined by a distinctive sound rooted in trip-pop. the project has existed since the mid-2010s and has been played frequently on streaming services and radio; notably, the duo's song \"Move Along\" appeared in the netflix series \"DeGrassi: Next Class,\" and the duo is currently back with the double single \"4ever HD\" after a few years of hiatus.",
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
      lead: "Simple favorites for shows and everyday wear.",
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
