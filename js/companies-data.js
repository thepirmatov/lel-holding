/* ==========================================================================
   LEL HOLDING — companies data.
   Structure pass: real names + phone numbers are from the business card.
   Everything marked TODO is placeholder and should be replaced with real
   content (photos, videos, exact addresses, social links, exact 2GIS
   listing links) before launch.

   icon: one of the keys defined in ICONS in js/main.js
   logo: optional path to the company's own logo image — if set, it replaces
         the generic `icon` badge on the card
   media: array of { type: "image"|"video", src }, rendered as an
          auto-scrolling carousel on the card. Empty array shows a
          placeholder. A single item shows statically (no carousel chrome).
          Video src should be a direct file (mp4/webm), not a YouTube/Vimeo
          page link — those need an <iframe> embed, which isn't wired up here.
   whatsapp: digits only, no "+", used to build a wa.me link
   map2gis: TODO — currently a 2GIS *search* link built from the company
            name; replace with the exact listing URL once available
   ========================================================================== */

const COMPANIES = [
  {
    id: "enes-danismanlik",
    icon: "chart",
    name: "Enes Danışmanlık Şirketi ve Yatırım Danışmanlığı",
    phone: "+996 700 694 045",
    whatsapp: "996700694045",
    address: null, // TODO: real address
    media: [],     // TODO: real photos/videos
    social: { instagram: null, facebook: null }, // TODO
    map2gis: "https://2gis.kg/bishkek/search/Enes%20Danışmanlık",
    category: {
      tr: "Danışmanlık ve Yatırım",
      en: "Consulting & Investment",
      ru: "Консалтинг и инвестиции",
      ky: "Консалтинг жана инвестиция",
    },
    description: {
      tr: "[Şirket açıklaması eklenecek]",
      en: "[Company description to be added]",
      ru: "[Описание компании будет добавлено]",
      ky: "[Компания жөнүндө маалымат кийин кошулат]",
    },
  },
  {
    id: "info-group-istihdam",
    icon: "users",
    name: "Info Group İstihdam Bürosu",
    phone: "+996 704 883 131",
    whatsapp: "996704883131",
    address: null,
    media: [],
    social: { instagram: null, facebook: null },
    map2gis: "https://2gis.kg/bishkek/search/Info%20Group%20İstihdam",
    category: {
      tr: "İstihdam Bürosu",
      en: "Employment Agency",
      ru: "Кадровое агентство",
      ky: "Жумушка орноштуруу бюросу",
    },
    description: {
      tr: "[Şirket açıklaması eklenecek]",
      en: "[Company description to be added]",
      ru: "[Описание компании будет добавлено]",
      ky: "[Компания жөнүндө маалымат кийин кошулат]",
    },
  },
  {
    id: "sky-turizm",
    icon: "plane",
    name: "Sky Turizm Acentası",
    phone: "+996 705 621 484",
    whatsapp: "996705621484",
    address: null,
    media: [],
    social: { instagram: null, facebook: null },
    map2gis: "https://2gis.kg/bishkek/search/Sky%20Turizm",
    category: {
      tr: "Turizm Acentası",
      en: "Travel Agency",
      ru: "Туристическое агентство",
      ky: "Туристтик агенттик",
    },
    description: {
      tr: "[Şirket açıklaması eklenecek]",
      en: "[Company description to be added]",
      ru: "[Описание компании будет добавлено]",
      ky: "[Компания жөнүндө маалымат кийин кошулат]",
    },
  },
  {
    id: "info-group-akademi",
    icon: "graduation",
    name: "Info Group Dil ve Turizm Akademisi",
    phone: "+996 507 141 310",
    whatsapp: "996507141310",
    address: null,
    media: [],
    social: { instagram: null, facebook: null },
    map2gis: "https://2gis.kg/bishkek/search/Info%20Group%20Akademi",
    category: {
      tr: "Dil ve Turizm Akademisi",
      en: "Language & Tourism Academy",
      ru: "Академия языков и туризма",
      ky: "Тил жана туризм академиясы",
    },
    description: {
      tr: "[Şirket açıklaması eklenecek]",
      en: "[Company description to be added]",
      ru: "[Описание компании будет добавлено]",
      ky: "[Компания жөнүндө маалымат кийин кошулат]",
    },
  },
  {
    id: "yeminli-tercumanlik",
    icon: "translate",
    name: "Yeminli Tercümanlık Bürosu",
    phone: "+996 997 440 044",
    whatsapp: "996997440044",
    address: null,
    media: [],
    social: { instagram: null, facebook: null },
    map2gis: "https://2gis.kg/bishkek/search/Yeminli%20Tercümanlık",
    category: {
      tr: "Yeminli Tercümanlık",
      en: "Certified Translation Office",
      ru: "Бюро присяжных переводов",
      ky: "Ант берген котормо бюросу",
    },
    description: {
      tr: "[Şirket açıklaması eklenecek]",
      en: "[Company description to be added]",
      ru: "[Описание компании будет добавлено]",
      ky: "[Компания жөнүндө маалымат кийин кошулат]",
    },
  },
  {
    id: "techno-cave-hotel",
    icon: "hotel",
    logo: "assets/images/techno-cave/logo.jpg", // from @technocave.kg on Instagram
    name: "Techno Cave Capsule Hotel",
    phone: "+996 772 016 101",
    whatsapp: "996772016101",
    address: "Улица Касымалы Баялинова 66, Свердловский район, Бишкек 720033",
    // Pulled from the business's own public Instagram (@technocave.kg).
    media: [
      { type: "image", src: "assets/images/techno-cave/tc-1.jpg" },
      { type: "image", src: "assets/images/techno-cave/tc-2.jpg" },
      { type: "image", src: "assets/images/techno-cave/tc-3.jpg" },
    ],
    social: { instagram: "https://www.instagram.com/technocave.kg", facebook: null },
    map2gis: "https://2gis.kg/bishkek/geo/70000001038374218",
    category: {
      tr: "Kapsül Otel",
      en: "Capsule Hotel",
      ru: "Капсульный отель",
      ky: "Капсула мейманканасы",
    },
    description: {
      tr: "[Şirket açıklaması eklenecek]",
      en: "[Company description to be added]",
      ru: "[Описание компании будет добавлено]",
      ky: "[Компания жөнүндө маалымат кийин кошулат]",
    },
  },
  {
    id: "sky-aroma-cafe",
    icon: "coffee",
    name: "Sky Aroma Cafe",
    phone: "+996 999 929 503",
    whatsapp: "996999929503",
    address: null,
    media: [],
    social: { instagram: null, facebook: null },
    map2gis: "https://2gis.kg/bishkek/search/Sky%20Aroma%20Cafe",
    category: {
      tr: "Kafe",
      en: "Café",
      ru: "Кафе",
      ky: "Кафе",
    },
    description: {
      tr: "[Şirket açıklaması eklenecek]",
      en: "[Company description to be added]",
      ru: "[Описание компании будет добавлено]",
      ky: "[Компания жөнүндө маалымат кийин кошулат]",
    },
  },
  {
    id: "ram-organizasyon",
    icon: "calendar",
    name: "Ram Organizasyon",
    phone: "+996 700 694 045",
    whatsapp: "996700694045",
    address: null,
    media: [],
    social: { instagram: null, facebook: null },
    map2gis: "https://2gis.kg/bishkek/search/Ram%20Organizasyon",
    category: {
      tr: "Organizasyon",
      en: "Event Organization",
      ru: "Организация мероприятий",
      ky: "Иш-чараларды уюштуруу",
    },
    description: {
      tr: "[Şirket açıklaması eklenecek]",
      en: "[Company description to be added]",
      ru: "[Описание компании будет добавлено]",
      ky: "[Компания жөнүндө маалымат кийин кошулат]",
    },
  },
  {
    id: "noter-islemleri",
    icon: "document",
    name: "Noter İşlemleri",
    phone: "+996 700 694 045",
    whatsapp: "996700694045",
    address: null,
    media: [],
    social: { instagram: null, facebook: null },
    map2gis: "https://2gis.kg/bishkek/search/Noter",
    category: {
      tr: "Noter Hizmetleri",
      en: "Notary Services",
      ru: "Нотариальные услуги",
      ky: "Нотариалдык кызматтар",
    },
    description: {
      tr: "[Şirket açıklaması eklenecek]",
      en: "[Company description to be added]",
      ru: "[Описание компании будет добавлено]",
      ky: "[Компания жөнүндө маалымат кийин кошулат]",
    },
  },
];
