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
    logo: "assets/images/info-group-istihdam/logo.jpg", // from @info_group_employment on Instagram
    name: "Info Group İstihdam Bürosu",
    phone: "+996 704 883 131",
    whatsapp: "996704883131",
    address: "Бульвар Эркиндик 23, 1 этаж, Первомайский район, Бишкек 720040",
    // 2GIS listing photos here are all generic city/street shots, not the
    // actual office — skipped rather than using misleading stock-looking media.
    media: [],
    social: { instagram: "https://www.instagram.com/info_group_employment", facebook: null },
    map2gis: "https://2gis.kg/bishkek/geo/70000001059806035",
    category: {
      tr: "İstihdam Bürosu",
      en: "Employment Agency",
      ru: "Кадровое агентство",
      ky: "Жумушка орноштуруу бюросу",
    },
    description: {
      tr: "Info Group, Türkiye'de yasal olarak çalışmak isteyenler için resmi lisanslı (Lisans No. 000444) bir yurt dışı istihdam ajansıdır. Yüksek maaşlı pozisyonlar, gerçek uçuşlar ve vize desteği sunar. Bişkek'teki ofisi hafta içi hizmet vermektedir.",
      en: "Info Group is an officially licensed (License No. 000444) recruitment agency helping people find legal employment in Turkey. They offer high-salary positions with real flights and visa support. Their Bishkek office serves clients on weekdays.",
      ru: "Info Group — официально лицензированное (лицензия №000444) агентство по трудоустройству, помогающее найти легальную работу в Турции. Предлагает вакансии с высокой зарплатой, реальные вылеты и визовую поддержку. Офис в Бишкеке работает по будням.",
      ky: "Info Group — Түркияда мыйзамдуу иштегиси келгендерге жардам берген расмий лицензияланган (№000444 лицензия) жумушка орноштуруу агенттиги. Жогорку эмгек акы, чыныгы учуулар жана виза колдоосун сунуштайт. Бишкектеги офиси жумуш күндөрү иштейт.",
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
      tr: "Techno Cave, Bişkek şehir merkezine yalnızca 10 dakika uzaklıkta konumlanan modern bir kapsül otel/hosteldir. Misafirlerine ücretsiz Wi-Fi, bir çalışma alanı ve ücretsiz otopark imkânı sunar. Kapsül fiyatları 1000 somdan başlamaktadır.",
      en: "Techno Cave is a modern capsule hostel located just 10 minutes from the center of Bishkek. Guests enjoy free Wi-Fi, a dedicated work zone, and free parking. Capsules start from 1000 som per night.",
      ru: "Techno Cave — современный капсульный хостел, расположенный всего в 10 минутах от центра Бишкека. Гостям доступны бесплатный Wi-Fi, рабочая зона и бесплатная парковка. Стоимость капсулы — от 1000 сом.",
      ky: "Techno Cave — Бишкектин борборунан бар болгону 10 мүнөт алыстыкта жайгашкан заманбап капсулалык хостел. Конокторго акысыз Wi-Fi, жумуш зонасы жана акысыз унаа токтотуучу жай сунушталат. Капсуланын баасы 1000 сомдон башталат.",
    },
  },
  {
    id: "sky-aroma-cafe",
    icon: "coffee",
    logo: "assets/images/sky-aroma/logo.jpg", // from @skyaroma.kg on Instagram
    name: "Sky Aroma Cafe",
    phone: "+996 999 929 503",
    whatsapp: "996999929503",
    address: "Московская улица 91, 1 этаж, Первомайский район, Бишкек 720040",
    // Pulled from the business's own 2GIS listing photo gallery.
    media: [
      { type: "image", src: "assets/images/sky-aroma/storefront.jpg" },
      { type: "image", src: "assets/images/sky-aroma/interior.jpg" },
      { type: "image", src: "assets/images/sky-aroma/patio-1.jpg" },
      { type: "image", src: "assets/images/sky-aroma/veranda.jpg" },
      { type: "image", src: "assets/images/sky-aroma/entrance.jpg" },
    ],
    social: { instagram: "https://www.instagram.com/skyaroma.kg", facebook: null },
    map2gis: "https://2gis.kg/bishkek/geo/70000001117673814",
    category: {
      tr: "Kafe",
      en: "Café",
      ru: "Кафе",
      ky: "Кафе",
    },
    description: {
      tr: "Sky Aroma, Bişkek'te hem iç mekân hem de dış veranda oturma alanlarına sahip şık bir kafedir. Menüsünde kahve çeşitleri, soğuk kahveler, limonata, milkshake ve el yapımı tatlılar yer alır. Kafenin sloganı: \"Her fincanda bir hikâye.\"",
      en: "Sky Aroma is a stylish café in Bishkek with both indoor seating and a covered outdoor veranda. The menu features coffee, cold brews, lemonades, milkshakes, and handmade desserts. As their motto goes: \"There's a story in every cup.\"",
      ru: "Sky Aroma — уютная кофейня в Бишкеке с залом внутри и открытой верандой на улице. В меню — кофе, холодный кофе, лимонады, милкшейки и домашние десерты. Девиз кофейни: «В каждой чашке — своя история».",
      ky: "Sky Aroma — Бишкектеги жайлуу кофейня, анда ичинде да, сыртындагы верандада да отурууга орун бар. Менюсунда кофе, муздак кофе, лимонад, милкшейк жана үй жасалган таттуулар бар. Кофейнянын девизи: «Ар бир чөйчөктө өз тарыхы бар».",
    },
  },
  {
    id: "ram-organizasyon",
    icon: "plane",
    logo: "assets/images/ram-organizasyon/logo.jpg", // from @ram_organization on Instagram
    name: "Ram Organizasyon",
    phone: "+996 700 694 045",
    whatsapp: "996700694045",
    address: "Улица Ахматбека Суюмбаева 49а, 1 этаж 1 кабинет, Свердловский район, Бишкек 720011",
    // Pulled from the business's own 2GIS listing photo gallery.
    media: [
      { type: "image", src: "assets/images/ram-organizasyon/storefront.jpg" },
    ],
    social: { instagram: "https://www.instagram.com/ram_organization", facebook: null },
    map2gis: "https://2gis.kg/bishkek/geo/70000001094536667",
    // NOTE: 2GIS and the business's own Instagram both list this as a foreign
    // employment agency (placing workers in hotels in Turkey), not event
    // organization — category/description below reflect that; the business
    // card gave no category for this one, so "Organizasyon" was a guess.
    category: {
      tr: "Yurt Dışı İstihdam",
      en: "Overseas Employment Agency",
      ru: "Агентство по трудоустройству за рубежом",
      ky: "Чет өлкөдө жумушка орноштуруу",
    },
    description: {
      tr: "Ram Organization, Türkiye'deki otellerde yasal olarak çalışmak isteyenler için yurt dışı istihdam hizmeti sunan bir ajanstır. Yüksek maaşlı pozisyonlar ve ücretsiz danışmanlık sağlar. Bişkek'teki ofisi hafta içi 09:00-18:00 saatleri arasında hizmet vermektedir.",
      en: "Ram Organization is a recruitment agency that helps people find legal employment abroad, mainly in hotels in Turkey. They offer high-salary positions and free consultations. Their Bishkek office is open weekdays from 9:00 to 18:00.",
      ru: "Ram Organization — агентство по трудоустройству за рубежом, специализирующееся на легальной работе в отелях Турции. Предлагает вакансии с высокой зарплатой и бесплатную консультацию. Офис в Бишкеке работает по будням с 9:00 до 18:00.",
      ky: "Ram Organization — Түркиядагы мейманканаларда мыйзамдуу иштегиси келгендер үчүн чет өлкөдө жумушка орноштуруу боюнча агенттик. Жогорку эмгек акы менен камсыз кылат жана акысыз консультация берет. Бишкектеги офиси жумуш күндөрү саат 9:00дөн 18:00гө чейин иштейт.",
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
