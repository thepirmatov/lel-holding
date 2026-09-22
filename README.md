# LEL Holding — Website

Static site, no build step, no backend. Plain HTML/CSS/JS — open `index.html`
directly or serve the folder with any static host (Netlify, Vercel, GitHub
Pages, cPanel, etc.).

## Structure

```
index.html              markup for every section (header, hero, about,
                         companies, request form, contact, footer)
css/styles.css           all styling — black/gold theme, responsive
js/translations.js       UI text for tr (default) / en / ru / ky
js/companies-data.js     the 9 companies: name, phone, whatsapp, address,
                         image, video, social links, 2GIS link, category
                         and description per language
js/main.js               renders company cards, language switching,
                         mobile nav
assets/images/           put company/holding photos here
assets/icons/            (unused for now — icons are inline SVG in main.js)
```

## What's still a placeholder — fill in before launch

1. **Company descriptions** — `js/companies-data.js`, `description.{tr,en,ru,ky}`
   for each company. Currently `[Şirket açıklaması eklenecek]` etc.
2. **Company photos/videos** — set `image: "assets/images/xxx.jpg"` (drop the
   file in `assets/images/`) and optionally `video: "https://..."` per
   company in `js/companies-data.js`. Until set, a placeholder box shows.
3. **Addresses** — `address: null` per company → set to the real address
   string. Same for the holding's own address in `index.html`
   (`contact.addressValue` in `js/translations.js`, currently
   `[Adres bilgisi eklenecek]`).
4. **Social links** — `social: { instagram: null, facebook: null }` per
   company → set real URLs; icons only render when a URL is present. Same
   for the global social row in the Contact section (`#social-row` in
   `index.html`, currently placeholder `#` links).
5. **2GIS links** — `map2gis` per company is currently a *search* URL
   (`https://2gis.kg/bishkek/search/...`). Replace with the exact listing
   URL for each business once you have it (open the listing on 2gis.kg /
   2gis app, copy the link).
6. **WhatsApp numbers** — `whatsapp` per company assumes the listed phone
   number is WhatsApp-enabled. Confirm with the client which numbers should
   actually receive WhatsApp messages.
7. **Full EN/RU/KY translations** — `js/translations.js` has all four
   languages filled in for the UI chrome (nav, buttons, form labels), but
   company `category` strings are already translated; `description` still
   needs real per-language copy once you have it from the client.

## Request form → email delivery

The "Teklif Al / Request" form (`#request` in `index.html`) posts straight
to [Formspree](https://formspree.io) — a static-friendly form backend, no
server code needed.

**To activate it:**
1. Create a free account at formspree.io.
2. Create a new form, set the notification email to the LEL Holding admin's
   inbox.
3. Copy the form ID Formspree gives you (looks like `xdko1234`).
4. In `index.html`, replace `YOUR_FORM_ID` in:
   ```html
   <form class="request-form" id="request-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
5. Done — submissions email straight to that inbox. Works even with
   JavaScript disabled (plain HTML form POST); no server required.

A honeypot field (`_gotcha`) is already included to cut down on spam bots.

**Alternative:** if you end up hosting on Netlify, you can swap this for
[Netlify Forms](https://docs.netlify.com/forms/setup/) instead (add
`data-netlify="true"` to the `<form>`, remove the `action`/`method`) — no
third-party account needed in that case.

## Running locally

```bash
python3 -m http.server 4173
```
then open `http://localhost:4173`.
