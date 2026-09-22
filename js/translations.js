/* ==========================================================================
   LEL HOLDING — UI text, per language.
   Structure pass: Turkish (default) is filled in; en/ru/ky are stubbed with
   the same keys (currently mirroring Turkish) so translation is a drop-in
   job later — just replace the string values, keep the keys.
   ========================================================================== */

const TRANSLATIONS = {
  tr: {
    nav: {
      home: "Anasayfa",
      about: "Hakkımızda",
      companies: "Şirketlerimiz",
      request: "Teklif Al",
      contact: "İletişim",
    },
    hero: {
      eyebrow: "LEL HOLDING",
      title: "Tek Çatı Altında Güvenilir Hizmet",
      subtitle: "Danışmanlık, turizm, eğitim, konaklama ve daha fazlası — LEL Holding bünyesindeki şirketlerimizi keşfedin.",
      cta: "Şirketlerimizi Görün",
    },
    about: {
      eyebrow: "Hakkımızda",
      title: "LEL Holding Hakkında",
      body: "LEL Holding, farklı sektörlerde faaliyet gösteren şirketleri tek çatı altında birleştiren güvenilir bir kuruluştur. [Buraya holding hakkında kısa bir açıklama eklenecek.]",
      chairmanTitle: "Yönetim Kurulu Başkanı",
    },
    companies: {
      eyebrow: "Şirketlerimiz",
      title: "Bünyemizdeki Şirketler",
      subtitle: "LEL Holding çatısı altındaki tüm şirketlerimize göz atın.",
    },
    card: {
      whatsapp: "WhatsApp",
      map: "2GIS'te Gör",
      call: "Ara",
    },
    request: {
      eyebrow: "Teklif Al",
      title: "Bize Bir Mesaj Gönderin",
      subtitle: "Formu doldurun, ilgilendiğiniz hizmeti seçin, ekibimiz en kısa sürede size dönüş yapsın.",
      nameLabel: "Ad Soyad",
      emailLabel: "E-posta",
      phoneLabel: "Telefon",
      serviceLabel: "İlgilendiğiniz Hizmet",
      servicePlaceholder: "Bir hizmet seçin",
      serviceGeneral: "Genel Bilgi Talebi",
      messageLabel: "Mesajınız",
      submit: "Gönder",
      note: "Gönder'e tıkladığınızda talebiniz doğrudan LEL Holding ekibine e-posta ile iletilir.",
    },
    contact: {
      eyebrow: "İletişim",
      title: "Bize Ulaşın",
      addressLabel: "Adres",
      addressValue: "[Adres bilgisi eklenecek]",
      phoneLabel: "Telefon",
      whatsappLabel: "WhatsApp",
    },
    placeholder: {
      photo: "Fotoğraf / Video",
    },
    footer: {
      rights: "Tüm hakları saklıdır.",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      companies: "Our Companies",
      request: "Get a Quote",
      contact: "Contact",
    },
    hero: {
      eyebrow: "LEL HOLDING",
      title: "Trusted Services Under One Roof",
      subtitle: "Consulting, tourism, education, hospitality and more — discover the companies of LEL Holding.",
      cta: "See Our Companies",
    },
    about: {
      eyebrow: "About Us",
      title: "About LEL Holding",
      body: "LEL Holding is a trusted group bringing together companies from different sectors under one roof. [Short description of the holding to be added here.]",
      chairmanTitle: "Chairman of the Board",
    },
    companies: {
      eyebrow: "Our Companies",
      title: "Companies Under Our Group",
      subtitle: "Browse all the companies under the LEL Holding umbrella.",
    },
    card: {
      whatsapp: "WhatsApp",
      map: "View on 2GIS",
      call: "Call",
    },
    request: {
      eyebrow: "Get a Quote",
      title: "Send Us a Message",
      subtitle: "Fill in the form, choose the service you're interested in, and our team will get back to you shortly.",
      nameLabel: "Full Name",
      emailLabel: "Email",
      phoneLabel: "Phone",
      serviceLabel: "Service You're Interested In",
      servicePlaceholder: "Select a service",
      serviceGeneral: "General Inquiry",
      messageLabel: "Your Message",
      submit: "Send",
      note: "When you click Send, your request is emailed directly to the LEL Holding team.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Get in Touch",
      addressLabel: "Address",
      addressValue: "[Address to be added]",
      phoneLabel: "Phone",
      whatsappLabel: "WhatsApp",
    },
    placeholder: {
      photo: "Photo / Video",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },

  ru: {
    nav: {
      home: "Главная",
      about: "О нас",
      companies: "Наши компании",
      request: "Оставить заявку",
      contact: "Контакты",
    },
    hero: {
      eyebrow: "LEL HOLDING",
      title: "Надёжные услуги под одной крышей",
      subtitle: "Консалтинг, туризм, образование, гостиничный бизнес и многое другое — откройте для себя компании LEL Holding.",
      cta: "Смотреть наши компании",
    },
    about: {
      eyebrow: "О нас",
      title: "О компании LEL Holding",
      body: "LEL Holding — это надёжная группа, объединяющая компании из разных отраслей под одной крышей. [Здесь будет краткое описание холдинга.]",
      chairmanTitle: "Председатель правления",
    },
    companies: {
      eyebrow: "Наши компании",
      title: "Компании нашей группы",
      subtitle: "Ознакомьтесь со всеми компаниями группы LEL Holding.",
    },
    card: {
      whatsapp: "WhatsApp",
      map: "Смотреть на 2GIS",
      call: "Позвонить",
    },
    request: {
      eyebrow: "Оставить заявку",
      title: "Отправьте нам сообщение",
      subtitle: "Заполните форму, выберите интересующую вас услугу — наша команда свяжется с вами в ближайшее время.",
      nameLabel: "Имя и фамилия",
      emailLabel: "Эл. почта",
      phoneLabel: "Телефон",
      serviceLabel: "Интересующая услуга",
      servicePlaceholder: "Выберите услугу",
      serviceGeneral: "Общий запрос",
      messageLabel: "Ваше сообщение",
      submit: "Отправить",
      note: "После нажатия «Отправить» ваша заявка будет направлена команде LEL Holding по электронной почте.",
    },
    contact: {
      eyebrow: "Контакты",
      title: "Свяжитесь с нами",
      addressLabel: "Адрес",
      addressValue: "[Адрес будет добавлен]",
      phoneLabel: "Телефон",
      whatsappLabel: "WhatsApp",
    },
    placeholder: {
      photo: "Фото / Видео",
    },
    footer: {
      rights: "Все права защищены.",
    },
  },

  ky: {
    nav: {
      home: "Башкы бет",
      about: "Биз жөнүндө",
      companies: "Компанияларыбыз",
      request: "Билдирүү калтыруу",
      contact: "Байланыш",
    },
    hero: {
      eyebrow: "LEL HOLDING",
      title: "Бир чатыр астында ишенимдүү кызматтар",
      subtitle: "Консалтинг, туризм, билим берүү, мейманкана жана башка тармактар — LEL Holding компанияларын изилдеңиз.",
      cta: "Компанияларды көрүү",
    },
    about: {
      eyebrow: "Биз жөнүндө",
      title: "LEL Holding жөнүндө",
      body: "LEL Holding — ар кайсы тармактарда иштеген компанияларды бир чатыр астында бириктирген ишенимдүү топ. [Холдинг жөнүндө кыскача маалымат бул жерге кошулат.]",
      chairmanTitle: "Башкармалык башчысы",
    },
    companies: {
      eyebrow: "Компанияларыбыз",
      title: "Тобубуздагы компаниялар",
      subtitle: "LEL Holding тобундагы бардык компанияларыбыз менен таанышыңыз.",
    },
    card: {
      whatsapp: "WhatsApp",
      map: "2GIS'тен көрүү",
      call: "Чалуу",
    },
    request: {
      eyebrow: "Билдирүү калтыруу",
      title: "Бизге билдирүү жазыңыз",
      subtitle: "Форманы толтуруңуз, кызыккан кызматты тандаңыз — командабыз сиз менен жакын арада байланышат.",
      nameLabel: "Аты-жөнү",
      emailLabel: "Электрондук почта",
      phoneLabel: "Телефон",
      serviceLabel: "Кызыккан кызматыңыз",
      servicePlaceholder: "Кызматты тандаңыз",
      serviceGeneral: "Жалпы суроо-талап",
      messageLabel: "Билдирүүңүз",
      submit: "Жиберүү",
      note: "«Жиберүү» баскычын баскандан кийин билдирүүңүз LEL Holding командасына электрондук почта менен жетет.",
    },
    contact: {
      eyebrow: "Байланыш",
      title: "Биз менен байланышыңыз",
      addressLabel: "Дареги",
      addressValue: "[Дарек кийинчерээк кошулат]",
      phoneLabel: "Телефон",
      whatsappLabel: "WhatsApp",
    },
    placeholder: {
      photo: "Сүрөт / Video",
    },
    footer: {
      rights: "Бардык укуктар корголгон.",
    },
  },
};
