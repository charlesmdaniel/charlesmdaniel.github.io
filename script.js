const pathPrefix = window.location.pathname.includes("/writing/") ? "../" : "";

function sitePath(path) {
  return `${pathPrefix}${path}`;
}

const navigation = [
  { id: "home", label: "Home", href: "index.html" },
  { id: "system", label: "System", href: "system.html" },
  { id: "work", label: "Instantiations", href: "work.html" },
  { id: "music", label: "Music", href: "music.html" },
  { id: "writing", label: "Writing", href: "writing.html" },
  { id: "contact", label: "Access", href: "contact.html" }
];

// The route map keeps the interface moving forward through one controlled path.
const routeLibrary = {
  identity: {
    name: "Identity Route",
    summary:
      "You are dealing with identity pressure. Start with the mechanism, then the identity essay, then the relational instance, then access.",
    projectId: "contact-confidence-simulator",
    system: {
      eyebrow: "Step 1 / System",
      title: "Start with the mechanism.",
      body: "Read the definition and the rules that convert contradiction into structure.",
      cta: "Start Here",
      href: sitePath("system.html#definition")
    },
    essay: {
      eyebrow: "Step 2 / Essay",
      title: "Read the identity layer.",
      body: "Use the essay to see how repeated change becomes coherence once a system exists underneath it.",
      cta: "Read 39 Rebrands Later...",
      href: sitePath("writing/39-rebrands-later.html#essay-content")
    },
    project: {
      eyebrow: "Step 3 / Instantiation",
      title: "Enter the relational instance.",
      body: "See the same operating logic converting ambiguity into calibrated action.",
      cta: "Open Contact Confidence Simulator",
      href: sitePath("work.html#contact-confidence-simulator")
    },
    access: {
      eyebrow: "Step 4 / Access",
      title: "Apply the system.",
      body: "Move from interpretation into direct engagement and system use.",
      cta: "Access the System",
      href: sitePath("contact.html#access-channels")
    }
  },
  operations: {
    name: "Operations Route",
    summary:
      "You are dealing with strategic drag. Start with the engine, then the essay, then the dealflow system, then access.",
    projectId: "dealflow-engine",
    system: {
      eyebrow: "Step 1 / System",
      title: "Start with the engine.",
      body: "Read how the system captures pressure, imposes rules, and creates usable output.",
      cta: "Start Here",
      href: sitePath("system.html#mechanism")
    },
    essay: {
      eyebrow: "Step 2 / Essay",
      title: "Use the writing layer to clarify the logic.",
      body: "Read the essay where identity pressure becomes operating logic instead of surface churn.",
      cta: "Read the Essay",
      href: sitePath("writing/39-rebrands-later.html#operating-logic")
    },
    project: {
      eyebrow: "Step 3 / Instantiation",
      title: "Open the strategic instance.",
      body: "See how the same mechanism behaves inside routing, scoring, and decision structure.",
      cta: "Open DealFlow Engine",
      href: sitePath("work.html#dealflow-engine")
    },
    access: {
      eyebrow: "Step 4 / Access",
      title: "Turn the system toward a live build.",
      body: "Use the access layer when a release, workflow, or body of work needs structure now.",
      cta: "Engage the System",
      href: sitePath("contact.html#access-channels")
    }
  },
  mythic: {
    name: "Mythic Route",
    summary:
      "You are dealing with atmosphere, world, or chapter pressure. Start with the core model, then the essay, then the mythic instance, then access.",
    projectId: "worldbuilding-studio",
    system: {
      eyebrow: "Step 1 / System",
      title: "Start with the core model.",
      body: "Read the visible engine before moving into world, chapter, or canon design.",
      cta: "Start Here",
      href: sitePath("system.html#model")
    },
    essay: {
      eyebrow: "Step 2 / Essay",
      title: "Read the doctrine layer first.",
      body: "Use the essay to see how unstable material becomes structured continuity.",
      cta: "Read the Essay",
      href: sitePath("writing/39-rebrands-later.html#what-survives")
    },
    project: {
      eyebrow: "Step 3 / Instantiation",
      title: "Open the mythic instance.",
      body: "Move into canon, motif, and world structure through the studio environment.",
      cta: "Open Worldbuilding Studio",
      href: sitePath("work.html#worldbuilding-studio")
    },
    access: {
      eyebrow: "Step 4 / Access",
      title: "Build the world outward.",
      body: "Use the access layer when the system needs to be applied to a release, chapter, or world scale.",
      cta: "Access the System",
      href: sitePath("contact.html#access-channels")
    }
  }
};

const diagnosticQuestions = [
  {
    id: "pressure",
    prompt: "Where is the pressure right now?",
    options: [
      { value: "identity", label: "Identity", note: "coherence, contradiction, reinvention" },
      { value: "systems", label: "Operations", note: "routing, decision drag, throughput" },
      { value: "world", label: "World", note: "canon, atmosphere, release logic" }
    ]
  },
  {
    id: "task",
    prompt: "What has to happen next?",
    options: [
      { value: "clarify", label: "Clarify", note: "name the signal and its structure" },
      { value: "build", label: "Build", note: "turn the signal into an engine" },
      { value: "release", label: "Release", note: "move it into public form" }
    ]
  },
  {
    id: "output",
    prompt: "What form should it take first?",
    options: [
      { value: "essay", label: "Essay", note: "language first" },
      { value: "tool", label: "Tool", note: "system first" },
      { value: "chapter", label: "Chapter", note: "atmosphere first" }
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
          <span class="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 10.5 12 3l9 7.5" />
              <path d="M5.25 9.5V21h13.5V9.5" />
              <path d="M9.75 21v-6h4.5v6" />
            </svg>
          </span>
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
        <p>Utility over Profile.</p>
        <div class="footer-links">
          <a href="${sitePath("system.html")}">System</a>
          <a href="${sitePath("work.html")}">Instantiations</a>
          <a href="${sitePath("writing.html")}">Writing</a>
          <a href="${sitePath("contact.html")}">Access</a>
        </div>
      </div>
    </footer>
  `;
}

const siteHeader = document.querySelector(".site-header");
const navToggle = document.querySelector(".header-mood");

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

function resolveRouteKey(answers) {
  if (answers.output === "chapter" || answers.pressure === "world") {
    return "mythic";
  }

  if (answers.pressure === "systems" || answers.task === "build" || answers.output === "tool") {
    return "operations";
  }

  return "identity";
}

function getActiveRoute() {
  const stored = readStoredRoute();
  const routeKey = stored?.routeKey && routeLibrary[stored.routeKey] ? stored.routeKey : "identity";
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
    if (currentStep >= diagnosticQuestions.length) {
      const routeKey = resolveRouteKey(answers);
      const route = routeLibrary[routeKey];
      saveRoute(routeKey, answers);
      mount.innerHTML = `
        <div class="entry-progress" aria-hidden="true">
          ${diagnosticQuestions.map(() => '<span class="is-active"></span>').join("")}
        </div>
        <div class="entry-result">
          <p class="eyebrow">Route Selected</p>
          <h3>${route.name}</h3>
          <p>${route.summary}</p>
          <div class="entry-result-links">
            <a class="button button-primary" href="${route.system.href}">${route.system.cta}</a>
            <button class="ghost-button" type="button" data-entry-reset>Reset route</button>
          </div>
        </div>
      `;
      return;
    }

    const question = diagnosticQuestions[currentStep];
    mount.innerHTML = `
      <div class="entry-progress" aria-hidden="true">
        ${diagnosticQuestions
          .map((_, index) => `<span class="${index <= currentStep ? "is-active" : ""}"></span>`)
          .join("")}
      </div>
      <div class="diagnostic-question">
        <p class="eyebrow">Prompt ${currentStep + 1}</p>
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
        <p>Complete the prompts to unlock the guided route and the Start Here handoff.</p>
        <button class="button button-primary" type="button" disabled>Start Here</button>
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

function renderGuidedTarget(element, step, routeName) {
  if (!step) {
    return;
  }

  element.innerHTML = `
    <p class="eyebrow">${step.eyebrow}</p>
    <h3>${step.title}</h3>
    <p>${step.body}</p>
    <p class="guided-note">${routeName}</p>
    <div class="cta-actions">
      <a class="button button-primary" href="${step.href}">${step.cta}</a>
    </div>
  `;
}

function refreshGuidedRoute() {
  const { route, routeKey } = getActiveRoute();

  document.querySelectorAll("[data-guided-target]").forEach((element) => {
    const target = element.dataset.guidedTarget;
    renderGuidedTarget(element, route[target], route.name);
  });

  document.querySelectorAll("[data-route-summary]").forEach((element) => {
    element.textContent = route.summary;
  });

  document.querySelectorAll(".feature-project.is-recommended").forEach((element) => {
    element.classList.remove("is-recommended");
  });

  const recommendedProject = document.getElementById(route.projectId);

  if (recommendedProject) {
    recommendedProject.classList.add("is-recommended");
  }

  document.body.dataset.activeRoute = routeKey;
}

renderDiagnostic();
refreshGuidedRoute();

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
