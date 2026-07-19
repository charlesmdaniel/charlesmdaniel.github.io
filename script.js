const pathPrefix = window.location.pathname.includes("/writing/") ? "../" : "";

function sitePath(path) {
  return `${pathPrefix}${path}`;
}

const navigation = [
  { id: "home", label: "Home", href: "index.html#top" },
  { id: "focus", label: "Focus", href: "index.html#professional-direction" },
  { id: "system", label: "Framework", href: "system.html" },
  { id: "resume", label: "Resume", href: "index.html#resume" },
  { id: "contact", label: "Contact", href: "contact.html" }
];

// The route map keeps every page pointing to the next clear step.
const routeLibrary = {
  clarity: {
    summary: "Start with the advisory framework, review capabilities, then use the resume to verify the evidence.",
    system: {
      eyebrow: "Step 1",
      title: "Read the advisory framework.",
      body: "See how financial information moves from signal to meaning, value, and execution.",
      cta: "Open Framework",
      href: sitePath("system.html#overview")
    },
    essay: {
      eyebrow: "Step 2",
      title: "Review the professional direction.",
      body: "Start with the finance and wealth-management preparation layer.",
      cta: "Professional Direction",
      href: sitePath("index.html#professional-direction")
    },
    capability: {
      eyebrow: "Step 3",
      title: "Review the capability map.",
      body: "Connect finance, accounting, client service, operations, and advisory-industry preparation.",
      cta: "Capabilities",
      href: sitePath("index.html#capabilities")
    },
    access: {
      eyebrow: "Step 4",
      title: "Verify the resume evidence.",
      body: "Review education, technical tools, and prior experience that support the direction.",
      cta: "View Resume",
      href: sitePath("index.html#resume")
    }
  },
  systems: {
    summary: "Start with operations, review readiness, then connect the workflow back to service execution.",
    system: {
      eyebrow: "Step 1",
      title: "Study the operating framework.",
      body: "See how information quality drives execution quality.",
      cta: "Open Framework",
      href: sitePath("system.html#how-it-works")
    },
    essay: {
      eyebrow: "Step 2",
      title: "Review advisory readiness.",
      body: "Connect knowledge, ethics, service preparation, and investment operations.",
      cta: "Readiness",
      href: sitePath("index.html#advisory-readiness")
    },
    capability: {
      eyebrow: "Step 3",
      title: "Review investment operations readiness.",
      body: "See how documentation, reporting, data verification, and workflow management fit the preparation path.",
      cta: "Readiness",
      href: sitePath("index.html#advisory-readiness")
    },
    access: {
      eyebrow: "Step 4",
      title: "Move to professional contact.",
      body: "Use the contact page for networking or portfolio review.",
      cta: "Contact",
      href: sitePath("contact.html#get-started")
    }
  },
  music: {
    summary: "Start with financial information, move into analysis, and end with resume evidence.",
    system: {
      eyebrow: "Step 1",
      title: "Read the model first.",
      body: "Start with signal, meaning, value, and execution before reviewing capabilities.",
      cta: "Open Framework",
      href: sitePath("system.html#model")
    },
    essay: {
      eyebrow: "Step 2",
      title: "Review capabilities.",
      body: "See the finance, accounting, service, operations, and technology map.",
      cta: "Capabilities",
      href: sitePath("index.html#capabilities")
    },
    capability: {
      eyebrow: "Step 3",
      title: "Review the resume evidence.",
      body: "Confirm the education, tools, and experience behind the professional direction.",
      cta: "Resume",
      href: sitePath("index.html#resume")
    },
    access: {
      eyebrow: "Step 4",
      title: "Review the resume.",
      body: "Confirm the education, tools, and experience behind the positioning.",
      cta: "Resume",
      href: sitePath("index.html#resume")
    }
  }
};

const diagnosticQuestions = [
  {
    id: "need",
    prompt: "Which professional signal should come first?",
    options: [
      { value: "clarity", label: "Analysis", note: "Start with financial information and interpretation." },
      { value: "structure", label: "Operations", note: "Start with workflow, documentation, and execution." },
      { value: "momentum", label: "Capability", note: "Start with education, tools, and readiness." }
    ]
  },
  {
    id: "surface",
    prompt: "Which evidence layer should follow?",
    options: [
      { value: "writing", label: "Capabilities", note: "Show the skill map first." },
      { value: "operations", label: "Operations", note: "Show the readiness layer first." },
      { value: "music", label: "Study System", note: "Show the broader business-science foundation." }
    ]
  }
];

const currentPage = document.body.dataset.page || "home";
const headerMount = document.querySelector("[data-site-header]");
const footerMount = document.querySelector("[data-site-footer]");

if (headerMount) {
  headerMount.innerHTML = `
    <header class="site-header">
      <div class="header-inner">
        <a class="brand-home" href="${sitePath("index.html")}" aria-label="Charles M. Daniel home">
          <span class="brand-mark" aria-hidden="true">CMD</span>
        </a>
        <a class="brand-title" href="${sitePath("index.html")}">Charles M. Daniel</a>
        <button class="header-mood" type="button" aria-expanded="false" aria-label="Toggle navigation" aria-controls="site-nav">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="7.5" />
            <circle cx="9.4" cy="10.2" r=".65" fill="currentColor" stroke="none" />
            <circle cx="14.6" cy="10.2" r=".65" fill="currentColor" stroke="none" />
            <path d="M9 13.4c.8 1 1.8 1.5 3 1.5s2.2-.5 3-1.5" />
          </svg>
        </button>
        <nav class="site-nav" id="site-nav" aria-label="Primary">
          ${navigation
            .map(
              (item) =>
                `<a href="${sitePath(item.href)}" class="${item.id === currentPage ? "is-active" : ""}">${item.label}</a>`
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
        <p>Charles M. Daniel © 2026</p>
        <p class="footer-disclaimer">This website is a professional portfolio and educational resource. It does not provide investment, legal, accounting, or tax advice.</p>
        <div class="footer-links">
          <a href="${sitePath("system.html")}">Framework</a>
          <a href="${sitePath("index.html#resume")}">Resume</a>
          <a href="${sitePath("contact.html")}">Contact</a>
        </div>
      </div>
    </footer>
  `;
}

const siteHeader = document.querySelector(".site-header");
const navToggle = document.querySelector(".header-mood");
const initialHashPresent = Boolean(window.location.hash);

if (initialHashPresent && "scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

if (siteHeader) {
  const syncHeaderState = () => {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  syncHeaderState();
  window.addEventListener("scroll", syncHeaderState, { passive: true });
}

if (navToggle && siteHeader) {
  const closeNavigation = () => {
    siteHeader.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      closeNavigation();
    });
  });

  document.addEventListener("click", (event) => {
    if (!siteHeader.contains(event.target)) {
      closeNavigation();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNavigation();
    }
  });
}

function getAnchorScrollOffset() {
  if (siteHeader) {
    return siteHeader.offsetHeight + 12;
  }

  const headerHeight = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--header-height") || "84"
  );

  return headerHeight + 12;
}

function getHashTargetId() {
  return decodeURIComponent(window.location.hash.replace(/^#/, ""));
}

function revealHashContext(target) {
  target.classList.add("is-visible");
  target.closest(".reveal")?.classList.add("is-visible");
}

function scrollToHashTarget(behavior = "auto") {
  const hash = getHashTargetId();

  if (!hash) {
    return;
  }

  const target = document.getElementById(hash);

  if (!target) {
    return;
  }

  revealHashContext(target);

  const targetTop = Math.max(target.getBoundingClientRect().top + window.scrollY - getAnchorScrollOffset(), 0);

  if (Math.abs(window.scrollY - targetTop) < 4) {
    return;
  }

  window.scrollTo({
    top: targetTop,
    behavior
  });
}

function settleHashTarget(behavior = "auto") {
  if (!getHashTargetId()) {
    return;
  }

  const run = () => {
    scrollToHashTarget(behavior);
  };

  requestAnimationFrame(() => {
    requestAnimationFrame(run);
  });

  [140, 420, 960].forEach((delay) => {
    window.setTimeout(run, delay);
  });
}

function readStoredRoute() {
  try {
    return JSON.parse(localStorage.getItem("nos-route") || "null");
  } catch (_error) {
    return null;
  }
}

function saveRoute(routeKey, answers) {
  localStorage.setItem(
    "nos-route",
    JSON.stringify({
      routeKey,
      answers
    })
  );
}

function resolveRouteKey(answers = {}) {
  if (answers.surface === "music") {
    return "music";
  }

  if (answers.need === "structure" || answers.surface === "operations") {
    return "systems";
  }

  return "clarity";
}

function getActiveRoute() {
  const stored = readStoredRoute();
  const routeKey = stored?.routeKey && routeLibrary[stored.routeKey] ? stored.routeKey : "clarity";
  return {
    routeKey,
    route: routeLibrary[routeKey],
    answers: stored?.answers || {}
  };
}

function renderDiagnostic() {
  const mount = document.querySelector("[data-entry-diagnostic]");

  if (!mount) {
    return;
  }

  const stored = readStoredRoute();
  let currentStep = 0;
  let answers = {};

  if (stored?.answers) {
    answers = stored.answers;
    currentStep = diagnosticQuestions.filter((question) => answers[question.id]).length;
  }

  const render = () => {
    const previewRoute = routeLibrary[resolveRouteKey(answers)];

    if (currentStep >= diagnosticQuestions.length) {
      const routeKey = resolveRouteKey(answers);
      const route = routeLibrary[routeKey];
      saveRoute(routeKey, answers);
      mount.innerHTML = `
        <div class="entry-progress" aria-hidden="true">
          ${diagnosticQuestions.map(() => '<span class="is-active"></span>').join("")}
        </div>
        <div class="entry-result">
          <p class="eyebrow">Recommended Path</p>
          <h3>${route.system.title}</h3>
          ${route.summary ? `<p>${route.summary}</p>` : ""}
          <div class="entry-result-links">
            <a class="button button-primary" href="${route.system.href}">${route.system.cta}</a>
            <button class="ghost-button" type="button" data-entry-reset>Reset</button>
          </div>
        </div>
      `;
      return;
    }

    const question = diagnosticQuestions[currentStep];
    const helpText =
      currentStep === 0
        ? ""
        : "One more answer and the system will choose the evidence layer that fits best.";

    mount.innerHTML = `
      <div class="entry-progress" aria-hidden="true">
        ${diagnosticQuestions
          .map((_, index) => `<span class="${index <= currentStep ? "is-active" : ""}"></span>`)
          .join("")}
      </div>
      <div class="diagnostic-question">
        <p class="eyebrow">Question ${currentStep + 1}</p>
        <h3>${question.prompt}</h3>
      </div>
      <div class="diagnostic-options">
        ${question.options
          .map(
            (option) => `
              <button class="diagnostic-option" type="button" data-question="${question.id}" data-value="${option.value}">
                <strong>${option.label}</strong>
                <span>${option.note}</span>
              </button>
            `
          )
          .join("")}
      </div>
      <div class="entry-result entry-result-pending">
        ${helpText ? `<p>${helpText}</p>` : ""}
        <a class="button button-primary" href="${previewRoute.system.href}">Start Here</a>
      </div>
    `;
  };

  mount.addEventListener("click", (event) => {
    const resetButton = event.target.closest("[data-entry-reset]");

    if (resetButton) {
      localStorage.removeItem("nos-route");
      currentStep = 0;
      answers = {};
      render();
      refreshGuidedRoute();
      return;
    }

    const optionButton = event.target.closest("[data-question]");

    if (!optionButton) {
      return;
    }

    answers[optionButton.dataset.question] = optionButton.dataset.value;
    currentStep += 1;
    render();
    refreshGuidedRoute();
  });

  render();
}

function renderGuidedTarget(element, step) {
  if (!step) {
    return;
  }

  const resolvedStep =
    currentPage === "system" && element.dataset.guidedTarget === "essay"
      ? { ...step, href: sitePath("writing/39-rebrands-later.html") }
      : step;

  element.innerHTML = `
    <p class="eyebrow">${resolvedStep.eyebrow}</p>
    <h3>${resolvedStep.title}</h3>
    ${resolvedStep.body ? `<p>${resolvedStep.body}</p>` : ""}
    <div class="cta-actions">
      <a class="button button-primary" href="${resolvedStep.href}">${resolvedStep.cta}</a>
    </div>
  `;
}

function refreshGuidedRoute() {
  const { route, routeKey } = getActiveRoute();

  document.querySelectorAll("[data-guided-target]").forEach((element) => {
    const target = element.dataset.guidedTarget;
    renderGuidedTarget(element, route[target]);
  });

  document.querySelectorAll("[data-route-summary]").forEach((element) => {
    element.textContent = route.summary;
    element.hidden = !route.summary;
  });

  document.body.dataset.activeRoute = routeKey;
}

function initReturnForms() {
  const savedEmail = localStorage.getItem("nos-email") || "";

  document.querySelectorAll("[data-return-form]").forEach((form) => {
    const input = form.querySelector('input[type="email"]');
    const state = form.parentElement.querySelector("[data-return-state]");

    if (input && savedEmail) {
      input.value = savedEmail;
    }

    form.addEventListener("submit", () => {
      if (input && input.value.trim()) {
        localStorage.setItem("nos-email", input.value.trim());
      }
    });
  });
}

renderDiagnostic();
refreshGuidedRoute();
initReturnForms();

if (currentPage === "work") {
  window.addEventListener("hashchange", refreshGuidedRoute);
}

window.addEventListener("hashchange", () => {
  settleHashTarget("smooth");
});

window.addEventListener("load", () => {
  settleHashTarget("auto");
});

window.addEventListener("pageshow", () => {
  settleHashTarget("auto");
});

if (window.location.hash) {
  settleHashTarget("auto");
}

if (document.fonts?.ready) {
  document.fonts.ready.then(() => {
    settleHashTarget("auto");
  });
}

if (initialHashPresent && "scrollRestoration" in history) {
  window.setTimeout(() => {
    history.scrollRestoration = "auto";
  }, 1400);
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
