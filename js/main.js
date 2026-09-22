/* ==========================================================================
   LEL HOLDING — site behavior (structure pass)
   - renders company cards from COMPANIES
   - applies TRANSLATIONS to every [data-i18n] element
   - language switcher (persisted in localStorage)
   - mobile nav toggle
   ========================================================================== */

(function () {
  "use strict";

  const SUPPORTED_LANGS = ["tr", "en", "ru", "ky"];
  const DEFAULT_LANG = "tr";

  /* ---------- tiny inline icon set (stand-ins for the brand's card icons) ---------- */
  const ICONS = {
    chart: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#171410" stroke-width="2"><path d="M4 19V9M12 19V5M20 19v-7"/></svg>',
    users: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#171410" stroke-width="2"><circle cx="9" cy="8" r="3"/><path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6"/><circle cx="17" cy="9" r="2.5"/><path d="M15 14.5c2.8.3 5 2.4 5 5.5"/></svg>',
    plane: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#171410" stroke-width="2"><path d="M3 13l18-8-8 18-2-8-8-2z"/></svg>',
    graduation: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#171410" stroke-width="2"><path d="M2 9l10-5 10 5-10 5-10-5z"/><path d="M6 11.5V17c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5"/></svg>',
    translate: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#171410" stroke-width="2"><path d="M4 5h9M8 3v2M11 5c-.5 4-2.7 7-6 9M6 10c1 1.7 2.6 3 5 4"/><path d="M14 21l4-9 4 9M15.3 18h5.4"/></svg>',
    hotel: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#171410" stroke-width="2"><path d="M3 21V8l7-4 7 4v13"/><path d="M3 21h18M9 21v-6h4v6"/></svg>',
    coffee: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#171410" stroke-width="2"><path d="M4 9h13v5a5 5 0 01-5 5H9a5 5 0 01-5-5V9z"/><path d="M17 10h1.5a2.5 2.5 0 010 5H17M7 4c0 1-1 1-1 2M11 4c0 1-1 1-1 2"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#171410" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="M12 14l1.8 1.8L16.5 13"/></svg>',
    document: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#171410" stroke-width="2"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M9 13h6M9 17h6"/></svg>',
  };

  const genericMeta = {
    address: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    phone: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2C9.6 20 4 14.4 4 7a2 2 0 011-1z"/></svg>',
  };

  let currentLang = localStorage.getItem("lel-lang") || DEFAULT_LANG;
  if (!SUPPORTED_LANGS.includes(currentLang)) currentLang = DEFAULT_LANG;

  /* ---------- i18n ---------- */
  function t(key, lang) {
    const parts = key.split(".");
    let node = TRANSLATIONS[lang];
    for (const p of parts) {
      if (!node) return null;
      node = node[p];
    }
    return node;
  }

  function applyTranslations(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = t(key, lang);
      if (value != null) el.textContent = value;
    });

    document.getElementById("lang-current-label").textContent = lang.toUpperCase();
    document.querySelectorAll("#lang-menu button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    // re-render dynamic company text in the new language
    renderCompanyText(lang);
  }

  function setLang(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) return;
    currentLang = lang;
    localStorage.setItem("lel-lang", lang);
    applyTranslations(lang);
  }

  /* ---------- company cards ---------- */
  function renderCompanies() {
    const grid = document.getElementById("company-grid");
    const template = document.getElementById("company-card-template");
    grid.innerHTML = "";

    COMPANIES.forEach((company) => {
      const node = template.content.cloneNode(true);
      const card = node.querySelector(".company-card");
      card.dataset.id = company.id;

      // icon
      card.querySelector(".company-icon").innerHTML = ICONS[company.icon] || "";

      // media placeholder (image support for later: if company.image is set, swap div for <img>)
      const mediaWrap = card.querySelector(".company-media");
      if (company.image) {
        const img = document.createElement("img");
        img.src = company.image;
        img.alt = company.name;
        mediaWrap.querySelector(".media-placeholder").replaceWith(img);
      }

      // name (brand name, not translated)
      card.querySelector(".company-name").textContent = company.name;

      // meta: address
      const addressLi = card.querySelector(".meta-address");
      addressLi.querySelector(".meta-icon").innerHTML = genericMeta.address;
      const addressText = addressLi.querySelector(".meta-text");
      addressText.textContent = company.address || "—";

      // meta: phone
      const phoneLi = card.querySelector(".meta-phone");
      phoneLi.querySelector(".meta-icon").innerHTML = genericMeta.phone;
      const phoneLink = phoneLi.querySelector(".meta-link");
      phoneLink.textContent = company.phone;
      phoneLink.href = `tel:${company.phone.replace(/\s+/g, "")}`;

      // actions: whatsapp + 2gis
      const actions = card.querySelectorAll(".company-actions .btn");
      const whatsappBtn = actions[0];
      const mapBtn = actions[1];
      whatsappBtn.href = `https://wa.me/${company.whatsapp}`;
      mapBtn.href = company.map2gis;

      // social icons (only if present)
      const socialWrap = card.querySelector(".company-social");
      Object.entries(company.social || {}).forEach(([platform, url]) => {
        if (!url) return;
        const a = document.createElement("a");
        a.href = url;
        a.target = "_blank";
        a.rel = "noopener";
        a.setAttribute("aria-label", platform);
        a.textContent = platform.slice(0, 2).toUpperCase();
        socialWrap.appendChild(a);
      });

      grid.appendChild(node);
    });
  }

  function renderCompanyText(lang) {
    document.querySelectorAll(".company-card").forEach((card) => {
      const company = COMPANIES.find((c) => c.id === card.dataset.id);
      if (!company) return;
      card.querySelector(".company-category").textContent = company.category[lang] || company.category[DEFAULT_LANG];
      card.querySelector(".company-desc").textContent = company.description[lang] || company.description[DEFAULT_LANG];
    });
  }

  /* ---------- language switcher UI ---------- */
  function initLangSwitcher() {
    const switcher = document.getElementById("lang-switcher");
    const toggle = document.getElementById("lang-toggle");
    const menu = document.getElementById("lang-menu");

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = switcher.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    menu.querySelectorAll("button[data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => {
        setLang(btn.dataset.lang);
        switcher.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (e) => {
      if (!switcher.contains(e.target)) {
        switcher.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        switcher.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- mobile nav ---------- */
  function initMobileNav() {
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("main-nav");

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.classList.toggle("open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
    renderCompanies();
    applyTranslations(currentLang);
    initLangSwitcher();
    initMobileNav();
  });
})();
