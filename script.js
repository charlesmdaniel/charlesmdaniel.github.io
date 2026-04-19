const pathPrefix = window.location.pathname.includes("/writing/") ? "../" : "";

function sitePath(path) {
  return `${pathPrefix}${path}`;
}

const navigation = [
  { id: "home", label: "Home", href: "index.html" },
  { id: "system", label: "System", href: "system.html" },
  { id: "writing", label: "Writing", href: "writing.html" },
  { id: "work", label: "Projects", href: "work.html" },
  { id: "contact", label: "Get Started", href: "contact.html" }
];

// The route map keeps every page pointing to the next clear step.
const routeLibrary = {
  clarity: {
    summary: "Start with the system. Read the essay. Open one project. Then choose your next step.",
    projectId: "contact-confidence-simulator",
    system: {
      eyebrow: "Step 1",
      title: "Read how the system works.",
      body: "Start with the simple model: input becomes structure, then output.",
      cta: "Start Here",
      href: sitePath("system.html#overview")
    },
    essay: {
      eyebrow: "Step 2",
      title: "Read one essay.",
      body: "See what happens when repeated change is named, organized, and made useful.",
      cta: "Read the essay",
      href: sitePath("writing/39-rebrands-later.html#essay-content")
    },
    project: {
      eyebrow: "Step 3",
      title: "See one project.",
      body: "Watch the same logic turn uncertainty into a clearer next move.",
      cta: "See the project",
      href: sitePath("work.html#contact-confidence-simulator")
    },
    access: {
      eyebrow: "Step 4",
      title: "Choose your next step.",
      body: "Use the final page to start a conversation or stay in the system for future outputs.",
      cta: "Get Started",
      href: sitePath("contact.html#get-started")
    }
  },
  systems: {
    summary: "Start with the system. Read the operating logic. Open one project. Then choose your next step.",
    projectId: "dealflow-engine",
    system: {
      eyebrow: "Step 1",
      title: "Read the core system.",
      body: "See how ideas become structure and then become usable output.",
      cta: "Start Here",
      href: sitePath("system.html#how-it-works")
    },
    essay: {
      eyebrow: "Step 2",
      title: "Read the operating logic.",
      body: "Use the essay to see how a scattered identity becomes one clear system.",
      cta: "Read the essay",
      href: sitePath("writing/39-rebrands-later.html#operating-logic")
    },
    project: {
      eyebrow: "Step 3",
      title: "Open the project layer.",
      body: "See the same logic used for routing, scoring, and clear decision-making.",
      cta: "See the project",
      href: sitePath("work.html#dealflow-engine")
    },
    access: {
      eyebrow: "Step 4",
      title: "Put the system to work.",
      body: "Move from reading to a live use case when the work needs structure now.",
      cta: "Get Started",
      href: sitePath("contact.html#get-started")
    }
  },
  music: {
    summary: "Start with the system. Read the essay. Open the chapter project. Then choose your next step.",
    projectId: "chapter-one-awakening",
    system: {
      eyebrow: "Step 1",
      title: "Read the model first.",
      body: "Start with input, structure, and output before moving into music and release logic.",
      cta: "Start Here",
      href: sitePath("system.html#model")
    },
    essay: {
      eyebrow: "Step 2",
      title: "Read the essay.",
      body: "See how unstable material becomes something you can name, keep, and build on.",
      cta: "Read the essay",
      href: sitePath("writing/39-rebrands-later.html#what-survives")
    },
    project: {
      eyebrow: "Step 3",
      title: "See the chapter project.",
      body: "Move from language into release structure, chapter sequencing, and return loops.",
      cta: "See the project",
      href: sitePath("work.html#chapter-one-awakening")
    },
    access: {
      eyebrow: "Step 4",
      title: "Take the next step.",
      body: "Use the final page when a release, world, or body of work needs a clear structure.",
      cta: "Get Started",
      href: sitePath("contact.html#get-started")
    }
  }
};

const diagnosticQuestions = [
  {
    id: "need",
    prompt: "What needs help first?",
    options: [
      { value: "clarity", label: "Clarity", note: "You need the idea to make sense fast." },
      { value: "structure", label: "Structure", note: "You need a system you can actually use." },
      { value: "momentum", label: "Momentum", note: "You need the work to move again." }
    ]
  },
  {
    id: "surface",
    prompt: "Which example should the system show after the essay?",
    options: [
      { value: "writing", label: "Writing", note: "Show the clearest project example first." },
      { value: "projects", label: "Projects", note: "Show the most structural project first." },
      { value: "music", label: "Music", note: "Show the chapter-based release path first." }
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
          <a href="${sitePath("writing.html")}">Writing</a>
          <a href="${sitePath("work.html")}">Projects</a>
          <a href="${sitePath("contact.html")}">Get Started</a>
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

function resolveRouteKey(answers = {}) {
  if (answers.surface === "music") {
    return "music";
  }

  if (answers.need === "structure" || answers.surface === "projects") {
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
          <p>${route.summary}</p>
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
        ? "The first step stays fixed: start with the system page. These answers choose which example appears later in the path."
        : "One more answer and the system will choose the project example that fits best.";

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
        <p>${helpText}</p>
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
    <p>${resolvedStep.body}</p>
    <div class="cta-actions">
      <a class="button button-primary" href="${resolvedStep.href}">${resolvedStep.cta}</a>
    </div>
  `;
}

function setProjectCardState(card, open) {
  const button = card?.querySelector("[data-project-action]");
  const response = card?.querySelector("[data-project-response]");

  if (!button || !response) {
    return;
  }

  card.classList.toggle("is-expanded", open);
  button.setAttribute("aria-expanded", String(open));
  button.textContent = open ? button.dataset.openLabel || button.textContent : button.dataset.closedLabel || button.textContent;
  response.hidden = !open;
}

function initProjectInteractions() {
  const projectCards = document.querySelectorAll(".feature-project");

  if (!projectCards.length) {
    return;
  }

  projectCards.forEach((card) => {
    const button = card.querySelector("[data-project-action]");

    if (!button) {
      return;
    }

    setProjectCardState(card, false);

    button.addEventListener("click", () => {
      const shouldOpen = button.getAttribute("aria-expanded") !== "true";

      projectCards.forEach((otherCard) => {
        setProjectCardState(otherCard, shouldOpen && otherCard === card);
      });
    });
  });
}

// On the project page, the system opens one recommended interaction so the user is guided instead of browsing blindly.
function resolveActiveProjectId(route) {
  const hashId = window.location.hash.replace("#", "");

  if (hashId && document.getElementById(hashId)?.classList.contains("feature-project")) {
    return hashId;
  }

  return route.projectId;
}

function openRecommendedProject(projectId) {
  const projectCards = document.querySelectorAll(".feature-project");

  if (!projectCards.length) {
    return;
  }

  projectCards.forEach((card) => {
    setProjectCardState(card, card.id === projectId);
  });
}

function refreshGuidedRoute() {
  const { route, routeKey } = getActiveRoute();

  document.querySelectorAll("[data-guided-target]").forEach((element) => {
    const target = element.dataset.guidedTarget;
    renderGuidedTarget(element, route[target]);
  });

  document.querySelectorAll("[data-route-summary]").forEach((element) => {
    element.textContent = route.summary;
  });

  document.querySelectorAll(".feature-project.is-recommended").forEach((element) => {
    element.classList.remove("is-recommended");
  });

  const recommendedProjectId = resolveActiveProjectId(route);
  const recommendedProject = document.getElementById(recommendedProjectId);

  if (recommendedProject) {
    recommendedProject.classList.add("is-recommended");
  }

  openRecommendedProject(recommendedProjectId);

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

    if (state && savedEmail) {
      state.textContent = "Email saved on this device for next time.";
    }

    form.addEventListener("submit", () => {
      if (input && input.value.trim()) {
        localStorage.setItem("nos-email", input.value.trim());

        if (state) {
          state.textContent = "Email saved on this device for next time.";
        }
      }
    });
  });
}

initProjectInteractions();
renderDiagnostic();
refreshGuidedRoute();
initReturnForms();

if (currentPage === "work") {
  window.addEventListener("hashchange", refreshGuidedRoute);
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
