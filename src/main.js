import "./style.css";

const USERNAME = "gregdeveau";

const profile = {
  name: "Greg Deveau",
  role: "Client-Side Developer in Training",
  headline: "Front-end work that feels clear, lively, and grounded in real data.",
  intro:
    "This portfolio is built like an application, not a static brochure. It uses structured JavaScript data, interactive UI patterns, and live GitHub API content.",
  about:
    "I like building browser experiences that balance clarity, responsiveness, and practical features. My best work starts with a strong structure, then adds motion and interactivity where they actually help.",
  goals:
    "I am focused on strengthening JavaScript fundamentals, sharpening UI judgment, and turning class projects into portfolio pieces that feel publishable.",
};

const skills = [
  {
    title: "Languages",
    copy: "Tools for browser logic, structure, and presentation.",
    items: ["JavaScript", "HTML5", "CSS3", "SQL", "Python"],
  },
  {
    title: "Tools",
    copy: "Workflow tools for building, debugging, and shipping work.",
    items: ["VS Code", "Git", "GitHub", "Chrome DevTools", "Command Line"],
  },
  {
    title: "Technologies",
    copy: "Modern patterns for responsive, data-driven web apps.",
    items: ["Tailwind CSS v4", "Vite", "GitHub API", "GitHub Pages", "Responsive Design"],
  },
];

const projects = [
  {
    id: "portfolio",
    title: "Professional Developer Portfolio",
    category: "ui",
    summary: "A GitHub Pages-ready portfolio with dynamic rendering, theme control, and live repository data.",
    challenge: "Turn a course brief into something that behaves like an application.",
    outcome: "Built a responsive portfolio with search, filters, modal details, and deployment-ready tooling.",
    tech: ["JavaScript", "Tailwind CSS v4", "Vite", "GitHub Pages"],
    highlights: [
      "Projects and skills render from JavaScript arrays.",
      "Theme toggling, project filtering, and modal details add interactivity.",
      "Deployment scripts are ready for GitHub Pages.",
    ],
    link: "https://github.com/gregdeveau/Portfolio",
    label: "Portfolio Repo",
  },
  {
    id: "repo-radar",
    title: "Repo Radar",
    category: "api",
    summary: "A repository explorer concept focused on clean async states and readable GitHub data.",
    challenge: "Handle loading, empty, and error states without making the UI feel brittle.",
    outcome: "Created a GitHub panel that explains the state of every API request clearly.",
    tech: ["Fetch API", "JSON", "Async JavaScript", "State Management"],
    highlights: [
      "Loads live repositories from GitHub.",
      "Filters to recent non-fork projects.",
      "Supports refresh and retry flows.",
    ],
    link: "https://github.com/gregdeveau",
    label: "GitHub Profile",
  },
  {
    id: "interaction-lab",
    title: "Interaction Lab",
    category: "javascript",
    summary: "A small collection of UI patterns centered on DOM updates and event-driven state.",
    challenge: "Keep the code approachable while making the interface feel alive.",
    outcome: "Combined search, filters, and modal patterns into a reusable portfolio structure.",
    tech: ["DOM Manipulation", "Event Listeners", "Accessibility", "State Objects"],
    highlights: [
      "Uses event listeners for immediate UI updates.",
      "Keeps interaction state predictable.",
      "Favors useful feedback over decorative motion.",
    ],
    link: "https://github.com/gregdeveau",
    label: "Code Archive",
  },
  {
    id: "launch-dashboard",
    title: "Launch Checklist Dashboard",
    category: "ui",
    summary: "A dashboard concept for tracking what a small front-end release still needs before shipping.",
    challenge: "Translate workflow steps into a visual system that feels motivating instead of noisy.",
    outcome: "Defined a card-based visual language that can support future case studies.",
    tech: ["Responsive Layout", "Card Systems", "Visual Hierarchy", "Content Design"],
    highlights: [
      "Uses clear section pacing and hierarchy.",
      "Balances warmth and structure in the UI.",
      "Creates room for future project growth.",
    ],
    link: "https://github.com/gregdeveau/Portfolio",
    label: "Portfolio Repo",
  },
];

const filters = [
  { value: "all", label: "All" },
  { value: "javascript", label: "JavaScript" },
  { value: "api", label: "API" },
  { value: "ui", label: "UI / UX" },
];

const contacts = [
  {
    title: "GitHub",
    value: "github.com/gregdeveau",
    note: "Browse public repositories and course work.",
    href: "https://github.com/gregdeveau",
  },
  {
    title: "Portfolio Repository",
    value: "github.com/gregdeveau/Portfolio",
    note: "This portfolio is versioned and deployed from the same repo.",
    href: "https://github.com/gregdeveau/Portfolio",
  },
  {
    title: "Public Contact",
    value: "Add your preferred public email or LinkedIn before final submission.",
    note: "Keep public contact details professional and safe to publish.",
    href: "",
  },
];

const state = {
  search: "",
  filter: "all",
  theme: getTheme(),
  repos: [],
  githubStatus: "idle",
  githubMessage: "Live repository data will appear here after the first request.",
  activeProjectId: null,
};

function getTheme() {
  try {
    const saved = window.localStorage.getItem("portfolio-theme");
    if (saved === "studio" || saved === "midnight") {
      return saved;
    }
  } catch {}

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "midnight" : "studio";
}

function setTheme(theme) {
  state.theme = theme;
  document.documentElement.dataset.theme = theme;

  try {
    window.localStorage.setItem("portfolio-theme", theme);
  } catch {}

  const button = document.getElementById("theme-toggle");
  if (button) {
    button.textContent = theme === "studio" ? "Switch to Night" : "Switch to Day";
  }
}

function totalSkills() {
  return skills.reduce((sum, group) => sum + group.items.length, 0);
}

function renderShell() {
  document.getElementById("app").innerHTML = `
    <div class="min-h-screen">
      <header class="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--surface)] backdrop-blur-xl">
        <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#hero" class="flex items-center gap-3">
            <span class="grid h-11 w-11 place-items-center rounded-2xl border border-[var(--line)] bg-[var(--accent-soft)] text-sm font-bold tracking-[0.2em] text-[var(--brand)]">GD</span>
            <div>
              <p class="text-[10px] uppercase tracking-[0.35em] text-[var(--text-soft)]">Portfolio</p>
              <p class="text-sm font-semibold text-[var(--text-strong)]">${profile.name}</p>
            </div>
          </a>
          <nav aria-label="Primary navigation" class="hidden lg:block">
            <ul class="flex items-center gap-6 text-sm text-[var(--text-soft)]">
              <li><a class="nav-link" href="#about">About</a></li>
              <li><a class="nav-link" href="#skills">Skills</a></li>
              <li><a class="nav-link" href="#projects">Projects</a></li>
              <li><a class="nav-link" href="#github">GitHub API</a></li>
              <li><a class="nav-link" href="#contact">Contact</a></li>
            </ul>
          </nav>
          <button id="theme-toggle" class="secondary-button text-sm font-semibold" type="button">Switch Theme</button>
        </div>
      </header>

      <main>
        <section id="hero" class="px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
          <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.9fr]">
            <div class="space-y-8">
              <p class="section-kicker">PROG2700 final portfolio</p>
              <div class="space-y-5">
                <h1 class="display-title max-w-4xl">${profile.headline}</h1>
                <p class="max-w-2xl text-lg leading-8 text-[var(--text-soft)]">${profile.intro}</p>
              </div>
              <div class="flex flex-wrap gap-3">
                <a class="primary-button" href="#projects">Explore Projects</a>
                <a class="secondary-button" href="#github">See Live GitHub Data</a>
              </div>
              <div class="grid gap-4 sm:grid-cols-3">
                <article class="metric-card"><p class="metric-label">Projects</p><p class="metric-value">${projects.length}</p></article>
                <article class="metric-card"><p class="metric-label">Skills</p><p class="metric-value">${totalSkills()}</p></article>
                <article class="metric-card"><p class="metric-label">Live Repos</p><p id="repo-total" class="metric-value">Waiting</p></article>
              </div>
            </div>

            <aside class="panel space-y-6 p-6 sm:p-8">
              <div>
                <p class="section-kicker">Studio board</p>
                <h2 class="mt-3 text-2xl font-semibold text-[var(--text-strong)]">${profile.role}</h2>
              </div>
              <article class="inner-panel"><p class="small-label">About</p><p class="mt-3 leading-7 text-[var(--text-soft)]">${profile.about}</p></article>
              <article class="inner-panel"><p class="small-label">Goals</p><p class="mt-3 leading-7 text-[var(--text-soft)]">${profile.goals}</p></article>
              <article class="inner-panel">
                <p class="small-label">Stack</p>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="stack-chip">Vite</span>
                  <span class="stack-chip">Tailwind CSS v4</span>
                  <span class="stack-chip">GitHub API</span>
                  <span class="stack-chip">GitHub Pages</span>
                </div>
              </article>
            </aside>
          </div>
        </section>

        <section id="about" class="section-wrap">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div class="panel p-6 sm:p-8">
                <p class="section-kicker">About</p>
                <h2 class="section-title">A professional story built around clarity, interaction, and steady growth.</h2>
              </div>
              <div class="grid gap-6 md:grid-cols-2">
                <article class="panel p-6 sm:p-8">
                  <p class="small-label">Profile</p>
                  <p class="mt-4 leading-8 text-[var(--text-soft)]">${profile.about}</p>
                </article>
                <article class="panel p-6 sm:p-8">
                  <p class="small-label">Goals</p>
                  <p class="mt-4 leading-8 text-[var(--text-soft)]">${profile.goals}</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" class="section-wrap">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p class="section-kicker">Skills</p>
            <h2 class="section-title">Languages, tools, and technologies.</h2>
            <p class="section-copy">This section is rendered from JavaScript data so it can grow with the portfolio.</p>
            <div id="skills-grid" class="mt-8 grid gap-6 lg:grid-cols-3"></div>
          </div>
        </section>

        <section id="projects" class="section-wrap">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mb-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p class="section-kicker">Projects</p>
                <h2 class="section-title">Search the project set and open any card for more detail.</h2>
              </div>
              <div class="panel p-5 sm:p-6">
                <label class="small-label" for="project-search">Project search</label>
                <input id="project-search" class="input-shell mt-3" type="search" placeholder="Search by title, category, or technology" />
                <div id="filter-bar" class="mt-4 flex flex-wrap gap-3"></div>
                <p id="project-summary" class="mt-4 text-sm text-[var(--text-soft)]" aria-live="polite"></p>
              </div>
            </div>
            <div id="projects-grid" class="grid gap-6 md:grid-cols-2 xl:grid-cols-3"></div>
          </div>
        </section>

        <section id="github" class="section-wrap">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div class="max-w-3xl">
                <p class="section-kicker">GitHub API</p>
                <h2 class="section-title">Recent repositories, loaded live from GitHub.</h2>
                <p class="section-copy">The interface supports loading, empty, success, and error states.</p>
              </div>
              <button id="refresh-repos" class="secondary-button text-sm font-semibold" type="button">Refresh Repositories</button>
            </div>
            <div id="github-status" class="status-card" aria-live="polite"></div>
            <div id="github-grid" class="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3"></div>
          </div>
        </section>

        <section id="contact" class="section-wrap pb-20">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p class="section-kicker">Contact</p>
            <h2 class="section-title">Professional links that are safe to publish.</h2>
            <div id="contact-grid" class="mt-8 grid gap-6 lg:grid-cols-3"></div>
          </div>
        </section>
      </main>

      <footer class="border-t border-[var(--line)] py-8">
        <div class="mx-auto flex max-w-7xl flex-col gap-2 px-4 text-sm text-[var(--text-soft)] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p><span id="current-year"></span> Greg Deveau. Built with JavaScript, Tailwind CSS v4, Vite, and GitHub Pages.</p>
          <p>PROG2700 MP3 professional portfolio</p>
        </div>
      </footer>
    </div>

    <div id="project-modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-slate-950/55 p-4 backdrop-blur-sm">
      <div class="absolute inset-0" data-close="true"></div>
      <div id="project-modal-card" class="modal-card relative"></div>
    </div>
  `;
}

function makeChip(text, className = "stack-chip") {
  const chip = document.createElement("span");
  chip.className = className;
  chip.textContent = text;
  return chip;
}

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  grid.innerHTML = "";

  skills.forEach((group) => {
    const card = document.createElement("article");
    card.className = "panel p-6 sm:p-8";
    card.innerHTML = `
      <p class="small-label">${group.title}</p>
      <h3 class="mt-4 text-2xl font-semibold text-[var(--text-strong)]">${group.title}</h3>
      <p class="mt-3 leading-7 text-[var(--text-soft)]">${group.copy}</p>
    `;

    const list = document.createElement("div");
    list.className = "mt-6 flex flex-wrap gap-3";
    group.items.forEach((item) => list.appendChild(makeChip(item)));
    card.appendChild(list);
    grid.appendChild(card);
  });
}

function renderFilters() {
  const bar = document.getElementById("filter-bar");
  bar.innerHTML = "";

  filters.forEach((filter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.filter = filter.value;
    button.className = filter.value === state.filter ? "filter-button is-active" : "filter-button";
    button.textContent = filter.label;
    button.setAttribute("aria-pressed", String(filter.value === state.filter));
    bar.appendChild(button);
  });
}

function visibleProjects() {
  const query = state.search.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesFilter = state.filter === "all" || project.category === state.filter;
    const source = [project.title, project.summary, project.challenge, project.outcome, project.category, ...project.tech]
      .join(" ")
      .toLowerCase();
    return matchesFilter && source.includes(query);
  });
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  const summary = document.getElementById("project-summary");
  const list = visibleProjects();

  grid.innerHTML = "";
  summary.textContent = `Showing ${list.length} of ${projects.length} projects.`;

  if (list.length === 0) {
    grid.innerHTML = `
      <article class="panel p-6 sm:p-8">
        <h3 class="text-xl font-semibold text-[var(--text-strong)]">No projects matched that search.</h3>
        <p class="mt-3 leading-7 text-[var(--text-soft)]">Try a broader keyword or switch back to the All filter.</p>
      </article>
    `;
    return;
  }

  list.forEach((project) => {
    const card = document.createElement("article");
    card.className = "panel flex h-full flex-col p-6 sm:p-7";
    card.innerHTML = `
      <p class="small-label">${filters.find((item) => item.value === project.category)?.label ?? project.category}</p>
      <h3 class="mt-4 text-2xl font-semibold text-[var(--text-strong)]">${project.title}</h3>
      <p class="mt-3 flex-1 leading-7 text-[var(--text-soft)]">${project.summary}</p>
    `;

    const tags = document.createElement("div");
    tags.className = "mt-5 flex flex-wrap gap-2";
    project.tech.forEach((item) => tags.appendChild(makeChip(item, "project-tag")));

    const row = document.createElement("div");
    row.className = "mt-6 flex flex-wrap gap-3";

    const details = document.createElement("button");
    details.type = "button";
    details.className = "primary-button";
    details.dataset.projectId = project.id;
    details.textContent = "Details";

    const source = document.createElement("a");
    source.className = "secondary-button";
    source.href = project.link;
    source.target = "_blank";
    source.rel = "noreferrer noopener";
    source.textContent = project.label;

    row.append(details, source);
    card.append(tags, row);
    grid.appendChild(card);
  });
}

function renderContacts() {
  const grid = document.getElementById("contact-grid");
  grid.innerHTML = "";

  contacts.forEach((item) => {
    const card = document.createElement("article");
    card.className = "panel flex h-full flex-col p-6 sm:p-8";

    const label = document.createElement("p");
    label.className = "small-label";
    label.textContent = item.title;

    const value = document.createElement(item.href ? "a" : "p");
    value.className = item.href
      ? "mt-4 text-lg font-semibold text-[var(--text-strong)] transition hover:text-[var(--brand)]"
      : "mt-4 text-lg font-semibold text-[var(--text-strong)]";
    value.textContent = item.value;

    if (item.href) {
      value.href = item.href;
      value.target = "_blank";
      value.rel = "noreferrer noopener";
    }

    const note = document.createElement("p");
    note.className = "mt-3 leading-7 text-[var(--text-soft)]";
    note.textContent = item.note;

    card.append(label, value, note);
    grid.appendChild(card);
  });
}

function renderModal() {
  const modal = document.getElementById("project-modal");
  const card = document.getElementById("project-modal-card");
  const project = projects.find((item) => item.id === state.activeProjectId);

  if (!project) {
    modal.classList.add("hidden");
    document.body.classList.remove("modal-open");
    card.innerHTML = "";
    return;
  }

  card.innerHTML = `
    <button type="button" class="modal-close" data-close="true" aria-label="Close project details">Close</button>
    <p class="small-label">${filters.find((item) => item.value === project.category)?.label ?? project.category}</p>
    <h3 class="mt-4 text-3xl font-semibold text-[var(--text-strong)]">${project.title}</h3>
    <p class="mt-4 leading-8 text-[var(--text-soft)]">${project.summary}</p>
    <div class="mt-8 grid gap-6 md:grid-cols-2">
      <article class="inner-panel">
        <p class="small-label">Challenge</p>
        <p class="mt-3 leading-7 text-[var(--text-soft)]">${project.challenge}</p>
      </article>
      <article class="inner-panel">
        <p class="small-label">Outcome</p>
        <p class="mt-3 leading-7 text-[var(--text-soft)]">${project.outcome}</p>
      </article>
    </div>
    <div class="mt-8">
      <p class="small-label">Highlights</p>
      <ul class="mt-4 space-y-3 text-[var(--text-soft)]">${project.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
    <div class="mt-8">
      <p class="small-label">Technology</p>
      <div class="mt-4 flex flex-wrap gap-2">${project.tech.map((item) => `<span class="project-tag">${item}</span>`).join("")}</div>
    </div>
    <div class="mt-8 flex flex-wrap gap-3">
      <a class="primary-button" href="${project.link}" target="_blank" rel="noreferrer noopener">${project.label}</a>
      <button type="button" class="secondary-button" data-close="true">Back to portfolio</button>
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function renderRepoMetric() {
  const metric = document.getElementById("repo-total");
  if (state.githubStatus === "success") {
    metric.textContent = `${state.repos.length}`;
    return;
  }

  if (state.githubStatus === "loading") {
    metric.textContent = "Loading";
    return;
  }

  metric.textContent = state.githubStatus === "error" ? "Retry" : "Waiting";
}

function repoDate(value) {
  return new Intl.DateTimeFormat("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

function renderGitHub() {
  const status = document.getElementById("github-status");
  const grid = document.getElementById("github-grid");
  status.dataset.tone = state.githubStatus;
  status.textContent = state.githubMessage;
  grid.innerHTML = "";
  renderRepoMetric();

  if (state.githubStatus === "loading") {
    for (let index = 0; index < 3; index += 1) {
      const card = document.createElement("article");
      card.className = "panel p-6 sm:p-7";
      card.innerHTML = `
        <div class="skeleton-line h-4 w-28"></div>
        <div class="skeleton-line mt-4 h-8 w-3/4"></div>
        <div class="skeleton-line mt-4 h-4 w-full"></div>
        <div class="skeleton-line mt-3 h-4 w-5/6"></div>
      `;
      grid.appendChild(card);
    }
    return;
  }

  if (state.githubStatus === "error") {
    grid.innerHTML = `
      <article class="panel p-6 sm:p-8">
        <h3 class="text-xl font-semibold text-[var(--text-strong)]">Repository request failed</h3>
        <p class="mt-3 leading-7 text-[var(--text-soft)]">The UI handled the error state correctly. Use refresh to try again.</p>
      </article>
    `;
    return;
  }

  if (state.githubStatus === "success" && state.repos.length === 0) {
    grid.innerHTML = `
      <article class="panel p-6 sm:p-8">
        <h3 class="text-xl font-semibold text-[var(--text-strong)]">No repositories found</h3>
        <p class="mt-3 leading-7 text-[var(--text-soft)]">The request succeeded, but there were no matching public repositories to show.</p>
      </article>
    `;
    return;
  }

  state.repos.forEach((repo) => {
    const card = document.createElement("article");
    card.className = "panel flex h-full flex-col p-6 sm:p-7";
    card.innerHTML = `
      <h3 class="text-2xl font-semibold text-[var(--text-strong)]">${repo.name}</h3>
      <p class="mt-3 flex-1 leading-7 text-[var(--text-soft)]">${repo.description || "No description has been added to this repository yet."}</p>
    `;

    const meta = document.createElement("div");
    meta.className = "mt-5 flex flex-wrap gap-2";
    [
      `Language: ${repo.language || "Not specified"}`,
      `Stars: ${repo.stargazers_count}`,
      `Updated: ${repoDate(repo.pushed_at)}`,
    ].forEach((item) => meta.appendChild(makeChip(item, "project-tag")));

    const link = document.createElement("a");
    link.className = "secondary-button mt-6 w-fit";
    link.href = repo.html_url;
    link.target = "_blank";
    link.rel = "noreferrer noopener";
    link.textContent = "Open Repository";

    card.append(meta, link);
    grid.appendChild(card);
  });
}

async function loadRepos() {
  state.githubStatus = "loading";
  state.githubMessage = "Loading repositories from the GitHub API...";
  renderGitHub();

  try {
    const response = await fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`, {
      headers: { Accept: "application/vnd.github+json" },
    });
    const payload = await response.json();

    if (!response.ok) {
      if (response.status === 403 || response.status === 429) {
        throw new Error("GitHub API rate limit reached. Wait a moment and try again.");
      }

      throw new Error(payload.message || "GitHub returned an unexpected error.");
    }

    state.repos = payload
      .filter((repo) => !repo.fork)
      .sort((left, right) => new Date(right.pushed_at) - new Date(left.pushed_at))
      .slice(0, 6);
    state.githubStatus = "success";
    state.githubMessage =
      state.repos.length > 0
        ? `Showing ${state.repos.length} recent non-fork repositories from ${USERNAME}.`
        : `GitHub returned data for ${USERNAME}, but there were no non-fork repositories to display.`;
  } catch (error) {
    console.error(error);
    state.repos = [];
    state.githubStatus = "error";
    state.githubMessage = error.message;
  }

  renderGitHub();
}

function wireEvents() {
  document.getElementById("theme-toggle").addEventListener("click", () => {
    setTheme(state.theme === "studio" ? "midnight" : "studio");
  });

  document.getElementById("project-search").addEventListener("input", (event) => {
    state.search = event.target.value;
    renderProjects();
  });

  document.getElementById("filter-bar").addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) {
      return;
    }

    state.filter = button.dataset.filter;
    renderFilters();
    renderProjects();
  });

  document.getElementById("projects-grid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-project-id]");
    if (!button) {
      return;
    }

    state.activeProjectId = button.dataset.projectId;
    renderModal();
  });

  document.getElementById("project-modal").addEventListener("click", (event) => {
    if (event.target.closest("[data-close]")) {
      state.activeProjectId = null;
      renderModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && state.activeProjectId) {
      state.activeProjectId = null;
      renderModal();
    }
  });

  document.getElementById("refresh-repos").addEventListener("click", () => {
    loadRepos();
  });
}

function init() {
  renderShell();
  renderSkills();
  renderFilters();
  renderProjects();
  renderContacts();
  renderModal();
  setTheme(state.theme);
  renderGitHub();
  wireEvents();
  document.getElementById("current-year").textContent = new Date().getFullYear();
  loadRepos();
}

init();
