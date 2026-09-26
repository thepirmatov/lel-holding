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

  /* small circular badges in .company-social — whatsapp is always shown,
     others render only when the company has that link set */
  const SOCIAL_ICONS = {
    whatsapp: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm5.8 14.2c-.3.7-1.5 1.3-2.1 1.4-.5.1-1.2.2-3.6-.8-3-1.2-5-4.2-5.1-4.4-.1-.2-1.2-1.6-1.2-3s.8-2.1 1-2.4c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.4.2.5.7 1.7.8 1.9.1.2.1.4 0 .6-.1.2-.2.3-.3.5-.2.2-.3.3-.5.5-.2.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.5 1.6.3.1.5.1.7-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.5.7 1.7.8.2.1.4.2.4.3.1.2.1.7-.2 1.4z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M13.5 21.9v-8.4h2.8l.4-3.3h-3.2V8.1c0-1 .3-1.6 1.7-1.6h1.7V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.5H7.6v3.3h2.8v8.4h3.1z"/></svg>',
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

  /* ---------- media carousel ----------
     0 items -> placeholder. 1 item -> static, no chrome. 2+ -> auto-advancing
     carousel with dots, paused on hover/touch and while the tab is hidden. */
  const AUTO_ADVANCE_MS = 4000;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function buildCarousel(container, mediaList, label) {
    if (!mediaList || mediaList.length === 0) {
      const placeholder = document.createElement("div");
      placeholder.className = "media-placeholder small";
      placeholder.innerHTML = `<span data-i18n="placeholder.photo">${t("placeholder.photo", currentLang)}</span>`;
      container.insertBefore(placeholder, container.firstChild);
      return;
    }

    function makeSlideContent(item) {
      if (item.type === "video") {
        const video = document.createElement("video");
        video.src = item.src;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        return video;
      }
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = label || "";
      img.loading = "lazy";
      return img;
    }

    if (mediaList.length === 1) {
      const single = document.createElement("div");
      single.className = "carousel";
      single.appendChild(makeSlideContent(mediaList[0]));
      container.insertBefore(single, container.firstChild);
      const v = single.querySelector("video");
      if (v) v.play().catch(() => {});
      return;
    }

    const carousel = document.createElement("div");
    carousel.className = "carousel";

    const track = document.createElement("div");
    track.className = "carousel-track";
    mediaList.forEach((item) => {
      const slide = document.createElement("div");
      slide.className = "carousel-slide";
      slide.appendChild(makeSlideContent(item));
      track.appendChild(slide);
    });
    carousel.appendChild(track);

    const dotsWrap = document.createElement("div");
    dotsWrap.className = "carousel-dots";
    const dots = mediaList.map((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "carousel-dot";
      dot.setAttribute("aria-label", `${i + 1}/${mediaList.length}`);
      dotsWrap.appendChild(dot);
      return dot;
    });
    carousel.appendChild(dotsWrap);

    container.insertBefore(carousel, container.firstChild);

    let index = 0;
    let timer = null;

    function goTo(i) {
      const prevVideo = track.children[index].querySelector("video");
      if (prevVideo) prevVideo.pause();

      index = (i + mediaList.length) % mediaList.length;
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, di) => d.classList.toggle("active", di === index));

      const nextVideo = track.children[index].querySelector("video");
      if (nextVideo) {
        nextVideo.currentTime = 0;
        nextVideo.play().catch(() => {});
      }
    }

    function startAuto() {
      if (prefersReducedMotion) return;
      stopAuto();
      timer = setInterval(() => goTo(index + 1), AUTO_ADVANCE_MS);
    }
    function stopAuto() {
      if (timer) clearInterval(timer);
      timer = null;
    }

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        goTo(i);
        startAuto();
      });
    });

    carousel.addEventListener("mouseenter", stopAuto);
    carousel.addEventListener("mouseleave", startAuto);
    carousel.addEventListener("touchstart", stopAuto, { passive: true });
    carousel.addEventListener("touchend", startAuto, { passive: true });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stopAuto();
      else startAuto();
    });

    goTo(0);
    startAuto();
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

      // icon badge — the company's own logo when set, else a generic icon
      const iconEl = card.querySelector(".company-icon");
      if (company.logo) {
        const logoImg = document.createElement("img");
        logoImg.src = company.logo;
        logoImg.alt = `${company.name} logo`;
        iconEl.appendChild(logoImg);
      } else {
        iconEl.innerHTML = ICONS[company.icon] || "";
      }

      // media carousel (or placeholder, if the company has no media yet)
      const mediaWrap = card.querySelector(".company-media");
      buildCarousel(mediaWrap, company.media, company.name);

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

      // actions: 2gis
      card.querySelector(".company-actions .btn").href = company.map2gis;

      // social icons: whatsapp always, others (instagram, facebook, ...) if present
      const socialWrap = card.querySelector(".company-social");
      const socialLinks = [{ platform: "whatsapp", url: `https://wa.me/${company.whatsapp}` }];
      Object.entries(company.social || {}).forEach(([platform, url]) => {
        if (url) socialLinks.push({ platform, url });
      });
      socialLinks.forEach(({ platform, url }) => {
        const a = document.createElement("a");
        a.href = url;
        a.target = "_blank";
        a.rel = "noopener";
        a.setAttribute("aria-label", platform);
        a.innerHTML = SOCIAL_ICONS[platform] || "";
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
