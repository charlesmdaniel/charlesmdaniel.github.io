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
        <a class="brand" href="index.html" aria-label="Narrative Operating System home">
          <span class="brand-mark">NO</span>
          <span>Narrative Operating System</span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-label="Toggle navigation">
          Menu
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
        <p>Minimal interface for narrative architecture and long-horizon systems.</p>
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

const pdfDocuments = {
  "39-rebrands-later": {
    filename: "39 Rebrands Later....pdf",
    mimeType: "application/pdf",
    parts: [
      "pdf-parts/39-rebrands-later.part1.txt",
      "pdf-parts/39-rebrands-later.part2.txt",
      "pdf-parts/39-rebrands-later.part3.txt",
      "pdf-parts/39-rebrands-later.part4.txt",
      "pdf-parts/39-rebrands-later.part5.txt"
    ]
  }
};

const pdfUrlCache = new Map();

const decodeBase64ToBlob = (base64, mimeType) => {
  const binary = atob(base64);
  const length = binary.length;
  const bytes = new Uint8Array(length);

  for (let index = 0; index < length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return new Blob([bytes], { type: mimeType });
};

const resolvePdfUrl = async (documentId) => {
  if (pdfUrlCache.has(documentId)) {
    return pdfUrlCache.get(documentId);
  }

  const config = pdfDocuments[documentId];

  if (!config) {
    throw new Error(`Unknown PDF document: ${documentId}`);
  }

  const parts = await Promise.all(
    config.parts.map(async (path) => {
      const response = await fetch(path);

      if (!response.ok) {
        throw new Error(`Unable to load ${path}`);
      }

      return response.text();
    })
  );

  const blob = decodeBase64ToBlob(parts.join(""), config.mimeType);
  const objectUrl = URL.createObjectURL(blob);

  pdfUrlCache.set(documentId, objectUrl);

  return objectUrl;
};

document.querySelectorAll("[data-pdf-document]").forEach((link) => {
  link.addEventListener("click", async (event) => {
    event.preventDefault();

    const documentId = link.dataset.pdfDocument;
    const action = link.dataset.pdfAction || "read";
    const config = pdfDocuments[documentId];

    if (!documentId || !config) {
      return;
    }

    const originalLabel = link.textContent;
    link.textContent = "Loading...";
    link.setAttribute("aria-disabled", "true");

    try {
      const objectUrl = await resolvePdfUrl(documentId);

      if (action === "download") {
        const temporaryLink = document.createElement("a");
        temporaryLink.href = objectUrl;
        temporaryLink.download = config.filename;
        temporaryLink.click();
      } else {
        window.open(objectUrl, "_blank", "noopener");
      }
    } catch (error) {
      console.error(error);
      link.textContent = "Unavailable";
    } finally {
      link.setAttribute("aria-disabled", "false");
    }

    if (link.textContent !== "Unavailable") {
      link.textContent = originalLabel;
    }
  });
});

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
