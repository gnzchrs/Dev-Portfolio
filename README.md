# Christopher Gonzaga — Portfolio

A dark, modern **personal portfolio** for a front-end developer — built with **vanilla
HTML, CSS and JavaScript**. No frameworks, no build step.

## ✨ Features

- **Modern dark design system** driven by CSS custom properties (palette, type scale, spacing/tokens)
- **Semantic HTML5** landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- **Responsive** at 1024 / 940 / 768 / 480px
- **Off-canvas mobile navigation** with a click-away overlay (keyboard/Escape friendly)
- **About tabs** (Skills / Experience / Education) + animated **skill progress bars**
- **Scroll-reveal** and a **header typing effect** — both respect `prefers-reduced-motion`
- **Light/dark theme toggle** (persisted in `localStorage`, OS-preference aware)
- **Portfolio filter** by category (All / React / Web / UI)
- **Hero parallax** + subtle pointer **tilt** (reduced-motion + touch aware)
- **Resume modal** — in-page `<iframe>` preview with download + focus trapping
- **Mailto-based contact form** with inline status feedback
- Accessibility extras: skip-link, visible focus ring, alt text, ARIA labels

## 🚀 Run locally (XAMPP)

1. Put (or clone) this folder inside your XAMPP `htdocs` directory.
2. In the **XAMPP Control Panel**, start the **Apache** service.
3. Open a browser and visit:

   ```
   http://localhost/Dev-portfolio/
   ```

   *(Adjust the path if your folder is named differently.)*

No package install required — Google Fonts (Poppins) and Font Awesome load via CDN.

## 📁 Project structure

```
Dev-portfolio/
├── index.html        single-page site (all sections)
├── style.css         design system + layout + responsive
├── script.js         tabs, mobile nav, animations, contact form
├── ROADMAP.md        task list / project plan
├── README.md         this file
└── assets/
    ├── docs/resume.pdf
    └── images/       profile, backgrounds, project shots
```

## ✉️ Contact

- **Email:** `christophergonzaga63@gmail.com` (set in the contact card, the form's `mailto:`, and the fallback)
- **Phone:** `09363892744`
- Social: **Facebook & Instagram** (LinkedIn intentionally omitted)

## 📌 Roadmap

See [`ROADMAP.md`](./ROADMAP.md) for the full, ticked task list and next steps.