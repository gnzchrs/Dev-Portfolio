const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");
const sidemenu = document.getElementById("sidemenu");
const navOverlay = document.getElementById("nav-overlay");
const navToggle = document.getElementById("nav-toggle");

/* ---------------- About tabs ---------------- */
function animateSkills() {
  const fills = document.querySelectorAll(".skill-fill");
  fills.forEach((fill) => {
    const level = parseInt(fill.dataset.level || "0", 10);
    fill.style.width = level + "%";
  });
}

function opentab(tabname, el) {
  for (const tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (const tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  el.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
  if (tabname === "skills") {
    animateSkills();
  }
}

/* ---------------- Off-canvas mobile nav ---------------- */
function openmenu() {
  if (!sidemenu) return;
  sidemenu.classList.add("open");
  if (navOverlay) navOverlay.classList.add("show");
  document.body.classList.add("no-scroll");
  if (navToggle) navToggle.setAttribute("aria-expanded", "true");
}

function closemenu() {
  if (!sidemenu) return;
  sidemenu.classList.remove("open");
  if (navOverlay) navOverlay.classList.remove("show");
  document.body.classList.remove("no-scroll");
  if (navToggle) navToggle.setAttribute("aria-expanded", "false");
}

/* Close the menu when a linked item inside it is activated */
document.addEventListener("click", function (e) {
  const link = e.target && e.target.closest ? e.target.closest("a") : null;
  if (link && link.closest("#sidemenu")) {
    closemenu();
  }
});

/* Close the menu with the Escape key */
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closemenu();
  }
});

/* ---------------- Header typing effect ---------------- */
(function typeRole() {
  const el = document.getElementById("hero-role");
  if (!el) return;
  const typed = el.querySelector(".typed");
  if (!typed) return;
  const text = "Front-end Developer";
  let i = 0;
  const tick = () => {
    i++;
    typed.textContent = text.substring(0, i);
    if (i < text.length) {
      setTimeout(tick, 55);
    }
  };
  setTimeout(tick, 450);
})();

/* ---------------- Scroll reveal ---------------- */
(function initReveals() {
  const targets = Array.from(document.querySelectorAll("[data-reveal]"));
  if (!targets.length) return;

  const reducedMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!("IntersectionObserver" in window)) {
    targets.forEach((t) => t.classList.add("is-visible"));
    return;
  }

  targets.forEach((t) => {
    const parent = t.parentElement;
    const siblings = parent ? Array.from(parent.children) : [];
    const idx = siblings.indexOf(t);
    if (idx >= 0) {
      t.style.transitionDelay = Math.min(idx, 8) * 70 + "ms";
    }
    t.classList.add(reducedMotion ? "is-visible" : "reveal");
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach((t) => io.observe(t));
})();

/* ---------------- Skill bars (skills tab is active on load) ---------------- */
animateSkills();

/* ---------------- Contact form ---------------- */
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    const name = contactForm.querySelector('input[name="Name"]');
    const emailInput = contactForm.querySelector('input[name="email"]');
    const msg = contactForm.querySelector("textarea[name='Message']");

    const to =
      contactForm.action && contactForm.action.startsWith("mailto:")
        ? contactForm.action.replace("mailto:", "").split("?")[0]
        : "christophergonzaga63@gmail.com";
    const subject = "Portfolio message from " + (name ? name.value.trim() : "Visitor");
    const body =
      "Name: " + (name ? name.value.trim() : "") +
      "\nEmail: " + (emailInput ? emailInput.value.trim() : "") +
      "\n\n" + (msg ? msg.value.trim() : "");

    window.location.href =
      "mailto:" + to +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    if (formStatus) {
      formStatus.textContent = "Thank you — opening your email app to send it!";
    }
    e.preventDefault();
  });
}

/* ---------------- Light / dark theme ---------------- */
(function initTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const STORE = "theme";

  const apply = (theme) => {
    const isLight = theme === "light";
    root.setAttribute("data-theme", theme);
    if (toggle) toggle.setAttribute("aria-pressed", String(isLight));
  };

  let saved = null;
  try {
    saved = localStorage.getItem(STORE);
  } catch (e) {
    saved = null;
  }
  const prefersLight =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  apply(saved || (prefersLight ? "light" : "dark"));

  if (toggle) {
    toggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      apply(next);
      try {
        localStorage.setItem(STORE, next);
      } catch (e) {
        /* ignore */
      }
    });
  }
})();

/* ---------------- Portfolio filter ---------------- */
(function initFilter() {
  const buttons = Array.from(document.querySelectorAll(".filter-btn"));
  const works = Array.from(document.querySelectorAll(".work"));
  if (!buttons.length || !works.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;
      buttons.forEach((b) => b.classList.toggle("is-active", b === btn));
      works.forEach((work) => {
        const cats = (work.dataset.cat || "").split(" ").filter(Boolean);
        const show = filter === "all" || cats.includes(filter);
        work.classList.toggle("hidden", !show);
        if (show) work.classList.add("fade-in");
        else work.classList.remove("fade-in");
      });
    });
  });
})();

/* ---------------- Resume modal ---------------- */
(function initModal() {
  const modal = document.getElementById("resume-modal");
  const openBtn = document.getElementById("resume-open");
  if (!modal || !openBtn) return;

  const closeBtns = Array.from(modal.querySelectorAll("[data-modal-close]"));
  const focusables = Array.from(
    modal.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])')
  );
  let lastFocus = null;

  const open = () => {
    lastFocus = document.activeElement;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    const first = focusables[0];
    if (first) setTimeout(() => first.focus(), 50);
  };

  const close = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    if (lastFocus) lastFocus.focus();
  };

  openBtn.addEventListener("click", open);
  closeBtns.forEach((el) => el.addEventListener("click", close));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) close();
  });

  // trap focus inside the modal while open
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Tab" || !modal.classList.contains("open")) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
})();

/* ---------------- Hero tilt + parallax ---------------- */
(function heroEffects() {
  const header = document.getElementById("header");
  const hero = header && header.querySelector(".hero");
  if (!header || !hero) return;

  const reduced =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer =
    window.matchMedia && window.matchMedia("(pointer: fine)").matches;

  // scroll-driven background parallax
  if (!reduced) {
    let ticking = false;
    const update = () => {
      const y = Math.min(window.scrollY, 600) * -0.18;
      header.style.setProperty("--parallax", y.toFixed(1) + "px");
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    window.addEventListener("resize", update);
  }

  // pointer-tracking tilt on the hero (fine pointers, desktop only)
  if (finePointer && !reduced && window.innerWidth > 940) {
    header.addEventListener("mousemove", (e) => {
      const r = header.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      hero.style.transform =
        "perspective(800px) rotateX(" +
        (-py * 2.5).toFixed(2) +
        "deg) rotateY(" +
        (px * 2.5).toFixed(2) +
        "deg)";
    });
    header.addEventListener("mouseleave", () => {
      hero.style.transform = "";
    });
  }
})();

/* ---------------- Footer year ---------------- */
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
