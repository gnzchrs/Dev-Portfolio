# Roadmap — Portfolio Redesign

> A single-page portfolio site (vanilla HTML/CSS/JS) served from `c:\xampp\htdocs\Dev-portfolio`.
> This roadmap organizes known bugs, a full redesign (dark + refined accent), animations, content
> updates, responsive/performance work, and launch polish. Check items off (`- [x]`) as they're done.

---

## 🎯 Goal

Rebuild the existing dark single-page portfolio into a modern, polished personal site.
Keep the **dark + accent** identity, but modernize the palette, layout, components, and add
smooth animations — with cleaner, real content and solid responsiveness.

---

## 🔧 1. Bug Fixes (do first)

These are current defects independent of the redesign:

- [x] `script.js`: `document.getElementsById("sidemenu")` → `document.getElementById("sidemenu")` (typo throws an error on load)
- [x] `style.css`: invalid selector `form btn2` → `form .btn2` (submit button styling was not applying)
- [x] `index.html`: remove duplicate "Mobile Development" service card (third card should be a distinct service)
- [x] `script.js`: modernize `var` → `const`/`let` and pass an explicit event param to `opentab()` (avoid implicit `event`)

---

## 🎨 2. Phase 1 — Design System (foundation of the redesign)

- [x] Define a refined **dark palette** as CSS custom properties in `:root` (base backgrounds, surface, text tiers)
- [x] Modernize the **accent color** (keep the brand-pink lineage, add a secondary complementary accent + a success/neutral tier)
- [x] Add a **typography scale** (display / heading / body / caption) + chosen sans-serif font pairing
- [x] Establish **spacing + layout grid** (consistent gutters, vertical rhythm, max-width container)
- [x] Create a **component style guide**: buttons, cards, inputs, nav links, section headers (used consistently in Phase 2)

---

## 🧱 3. Phase 2 — Structure / HTML

- [x] Adopt **semantic HTML5 landmarks**: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- [x] **Rework the hero** into a clean layout (replace text-over-full-bleed-background with a designed hero panel)
- [x] Restructure **About / Services / Portfolio / Contact** blocks to match the new design system
- [x] Standardize the **project card pattern**: image, title, description, live-demo link + GitHub source link (content/link wiring is Phase 5)
- [x] Add a working **mobile nav** (animated slide-in menu with click-outside-to-close overlay)

---

## 🎬 4. Phase 3 — Animations & Interactions

- [x] **Scroll-reveal** on sections/cards (fade + slide-up via `IntersectionObserver`, zero dependencies)
- [x] **Typing effect** for the header role line (e.g., "Front-end Developer")
- [x] **Hover / focus micro-interactions** on buttons, cards, nav links, social icons
- [x] **Skill progress bars** added to the Skills tab
- [x] Respect `prefers-reduced-motion` for accessibility

---

## 📱 5. Phase 4 — Responsive & Performance

- [x] Add breakpoints for **1024px / 768px / 480px**
- [x] **Compress heavy assets** — `user.JPG` 4.9 MB → **81 KB**; `bg-phone.png` 1.7 MB → **`bg-phone.jpg` 78 KB**
- [x] Add meaningful **alt text** to all images
- [x] Fine-tune layout for tablet and phone without horizontal scroll

---

## 📝 6. Phase 5 — Content & Copy

- [x] Replace **all remaining lorem-ipsum** paragraphs with real copy (0 placeholders left)
- [x] Fill real **About Me** bio
- [x] Write real **service descriptions** (3 distinct services)
- [x] Add real **portfolio projects** with working live links + GitHub repos (todo-list-react, Dev-Portfolio, GitHub profile)
- [ ] Set real **LinkedIn** URL and contact email — **needs user's real values**
- [x] Wire up the **contact form** (mailto-based handler + inline status)
- [x] Replace static footer year with a **dynamic year** (© Christopher {year})

---

## 🏁 7. Phase 6 — Polish & Launch

- [ ] **Cross-browser** check (Chrome, Edge, Firefox, Safari) — manual, in browser
- [ ] **Small-screen QA** at 320px–480px widths — manual, in browser
- [x] **Accessibility**: focus outlines (`:focus-visible`), added **skip-link**, meaningful alt text & ARIA labels (contrast to be verified visually)
- [x] Add a `README.md` with **local-run instructions** (XAMPP/htdocs)
- [ ] Final review done (static checks pass) — **commit pending user's email/LinkedIn + explicit go-ahead**

---

## ✅ 8. Backlog (post-launch nice-to-haves)

- [x] Projects filter (by category: All / React / Web / UI)
- [x] Light/dark theme toggle
- [ ] Copy-email-to-clipboard button
- [ ] Custom 404 page
- [x] Tilt/parallax hero background

---

## 📋 Current Asset & File Reference

```
index.html        main page
style.css         design system + layout + responsive + theme/filter/modal
script.js         tabs, mobile nav, animations, theme, filter, modal, parallax
assets/docs/resume.pdf
assets/images/    user.JPG, bg.png, bg-phone.jpg, work-1..3.png, favico.ico
```

**Status:** ✅ Phases 1–6 essentially complete (code). Remaining: manual in-browser QA (cross-browser, small-screen, contrast) + final commit.