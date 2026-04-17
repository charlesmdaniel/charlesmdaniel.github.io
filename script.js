const navigation = [
  { id: "home", label: "Home", href: "index.html" },
  { id: "system", label: "System", href: "system.html" },
  { id: "work", label: "Work", href: "work.html" },
  { id: "music", label: "Music", href: "music.html" },
  { id: "writing", label: "Writing", href: "writing.html" },
  { id: "contact", label: "Contact", href: "contact.html" }
];

const currentPage = document.body.dataset.page || "home";
const headerMount = document.querySelector("[data-site-header]");
const footerMount = document.querySelector("[data-site-footer]");

if (headerMount) {
  headerMount.innerHTML = `
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="index.html" aria-label="Charles M. Daniel home">
          <span class="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 10.5 12 3l9 7.5" />
              <path d="M5.25 9.5V21h13.5V9.5" />
              <path d="M9.75 21v-6h4.5v6" />
            </svg>
          </span>
          <span>Charles M. Daniel</span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-label="Toggle navigation">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 6c1.5-1.8 3.5-2.7 5.5-2.5-.3 1.9-1.5 3.6-3.5 4.5" />
            <path d="M12 6C10.5 4.2 8.5 3.3 6.5 3.5c.3 1.9 1.5 3.6 3.5 4.5" />
            <path d="M7.5 10.5c0-1.4 1.1-2.5 2.5-2.5h4c1.4 0 2.5 1.1 2.5 2.5 0 4.7-2.1 8.5-4.5 8.5s-4.5-3.8-4.5-8.5Z" />
            <circle cx="10" cy="12" r=".7" fill="currentColor" stroke="none" />
            <circle cx="14" cy="12" r=".7" fill="currentColor" stroke="none" />
            <circle cx="12" cy="15" r=".7" fill="currentColor" stroke="none" />
          </svg>
        </button>
        <nav class="site-nav" aria-label="Primary">
          ${navigation
            .map(
              (item) =>
                `<a href="${item.href}" class="${item.id === currentPage ? "is-active" : ""}">${item.label}</a>`
            )
            .join("")}
        </nav>
      </div>
    </header>
  `;
}

if (footerMount) {
  footerMount.innerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">
        <p>Core Value: Utility over Profile.</p>
        <div class="footer-links">
          <a href="system.html">System</a>
          <a href="work.html">Work</a>
          <a href="music.html">Music</a>
          <a href="writing.html">Writing</a>
          <a href="contact.html">Contact</a>
        </div>
      </div>
    </footer>
  `;
}

const siteHeader = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");

if (siteHeader) {
  const syncHeaderState = () => {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  syncHeaderState();
  window.addEventListener("scroll", syncHeaderState, { passive: true });
}

if (navToggle && siteHeader) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      siteHeader.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealItems = document.querySelectorAll(".reveal");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -48px 0px"
    }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 45, 240)}ms`;
    observer.observe(item);
  });
}
