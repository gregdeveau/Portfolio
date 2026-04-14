import "./style.css";

const USERNAME = "gregdeveau";

const profile = {
  name: "Greg Deveau",
  role: "Systems and Infrastructure IT",
  headline: "I like working with systems, networking, Docker, and the kind of troubleshooting that keeps things running.",
  intro:
    "Most of my background is on the systems and IT side: Linux, networking, Docker, support work, and figuring out why something broke. A good example is the Linux home lab I built around containers, storage, monitoring, and secure remote access. This portfolio pulls that together in one place while still using live GitHub data and some simple interactivity.",
  about:
    "I like the part of tech where servers, networks, and applications all meet. I have spent more time around Linux, Windows Server coursework, reverse proxies, self-hosting, and hands-on support than building public apps, so I wanted the portfolio to reflect that honestly.",
  goals:
    "I want to keep growing in systems, infrastructure, automation, and development. Right now that means getting better with scripting and full-stack concepts without losing the operations background that fits me best.",
};

const skills = [
  {
    title: "Systems & Infrastructure",
    copy: "These are the main platform skills I would want an employer to notice first.",
    items: ["Linux", "Docker", "Windows Server", "Nginx / Reverse Proxy"],
  },
  {
    title: "Networking & Security",
    copy: "These are the networking and security basics I am most comfortable with.",
    items: ["TCP/IP & DNS", "VLANs", "Firewalls", "SSL/TLS"],
  },
  {
    title: "Operations & Automation",
    copy: "These are the day-to-day skills that connect support work, scripting, and keeping things moving.",
    items: ["Technical Support", "Incident Management", "PowerShell", "Git"],
  },
];

const projects = [
  {
    id: "systems-labs",
    title: "Systems Labs and Admin Practice",
    category: "systems",
    summary: "A lot of my hands-on experience comes from labs and coursework around Linux, Windows Server, remote administration, and learning how systems fit together.",
    challenge: "The hard part was learning how the whole environment connects, not just each tool on its own.",
    outcome: "It gave me a better feel for troubleshooting, configuration, and thinking through systems problems calmly.",
    tech: ["Linux", "Windows Server", "RDP / SSH", "Systems Administration"],
    highlights: [
      "Worked in both Linux and Windows-oriented environments.",
      "Built confidence with access, setup, and troubleshooting tasks.",
      "Started thinking more like someone responsible for the whole environment, not just one app.",
    ],
    link: "https://github.com/gregdeveau",
    label: "GitHub Profile",
  },
  {
    id: "homelab",
    title: "Self-Hosted Linux Home Lab",
    category: "docker",
    summary: "I built a Linux home lab around Docker containers, media services, monitoring, secure remote access, and a storage layout that fits what I actually use.",
    challenge: "The hard part was building something flexible and useful without relying on a paid platform, while still keeping storage, monitoring, and remote access manageable.",
    outcome: "It gave me real hands-on experience with self-hosting, containers, monitoring, storage design, and safer remote access decisions.",
    tech: ["Docker", "mergerFS", "Grafana", "WireGuard"],
    highlights: [
      "Runs Plex, Sonarr, Radarr, Grafana, and Prometheus in Docker.",
      "Uses a 12 TB NAS drive, a cache drive, and mergerFS to present storage as one logical volume.",
      "Uses Tailscale, WireGuard, and UFW, with only the WireGuard port forwarded instead of exposing web UIs directly.",
    ],
    link: "https://github.com/gregdeveau",
    label: "GitHub Profile",
  },
  {
    id: "networking-practice",
    title: "Networking and Troubleshooting Practice",
    category: "networking",
    summary: "This side of my background is focused on core networking ideas like TCP/IP, DNS, VLANs, and firewalls.",
    challenge: "The goal was turning theory into something practical enough to troubleshoot and explain clearly.",
    outcome: "I came away with a better grasp of the networking basics that show up all the time in infrastructure and support work.",
    tech: ["TCP/IP", "DNS", "VLANs", "Firewalls"],
    highlights: [
      "Worked through the practical side of network setup and diagnosis.",
      "Got more comfortable with layered troubleshooting instead of guessing.",
      "Built a better understanding of how much everything else depends on the network working properly.",
    ],
    link: "https://github.com/gregdeveau",
    label: "GitHub Profile",
  },
  {
    id: "support-automation",
    title: "IT Support and Automation",
    category: "support",
    summary: "A lot of my practical experience comes from support work, ticketing, and the habits that keep users and systems moving.",
    challenge: "The balancing act here is solving problems quickly while still building deeper technical skills over time.",
    outcome: "It gave me a solid base for roles that sit between support, systems work, and infrastructure.",
    tech: ["Technical Support", "Incident Management", "PowerShell", "PostgreSQL"],
    highlights: [
      "Worked with ticketing and incident-driven support workflows.",
      "Used PowerShell, Git, and coursework scripting to build better automation habits.",
      "Kept building toward roles that mix support, systems, and technical growth.",
    ],
    link: "https://github.com/gregdeveau",
    label: "GitHub Profile",
  },
];

const filters = [
  { value: "all", label: "All" },
  { value: "systems", label: "Systems" },
  { value: "networking", label: "Networking" },
  { value: "docker", label: "Docker / Home Lab" },
  { value: "support", label: "Support" },
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
    note: "This portfolio is built and deployed from the same repository, even though my public project history is still small right now.",
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
  githubMessage: "This section pulls in live GitHub data, even though my public repo history is still small right now.",
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
                <h2 class="section-title">I naturally lean toward systems work, troubleshooting, and keeping things running smoothly.</h2>
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
            <h2 class="section-title">These are the main strengths I would want an employer to notice first.</h2>
            <p class="section-copy">I kept this focused on the bigger things that best represent how I work instead of listing every tool I have touched.</p>
            <div id="skills-grid" class="mt-8 grid gap-6 lg:grid-cols-3"></div>
          </div>
        </section>

        <section id="projects" class="section-wrap">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mb-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p class="section-kicker">Projects</p>
                <h2 class="section-title">These are more like experience snapshots than polished public projects, which is a more honest picture of where I am right now.</h2>
              </div>
              <div class="panel p-5 sm:p-6">
                <label class="small-label" for="project-search">Experience search</label>
                <input id="project-search" class="input-shell mt-3" type="search" placeholder="Search by role area, topic, or technology" />
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
                <h2 class="section-title">My public repositories, loaded live from GitHub.</h2>
                <p class="section-copy">My GitHub is still a work in progress, but I wanted this section to use real live data instead of placeholders.</p>
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
            <h2 class="section-title">A few public places to find my work and connect.</h2>
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
        <p class="mt-3 leading-7 text-[var(--text-soft)]">The API request succeeded, but my public repository list is still too small to show matching results here.</p>
      </article>
    `;
    return;
  }

  state.repos.forEach((repo) => {
    const card = document.createElement("article");
    card.className = "panel flex h-full flex-col p-6 sm:p-7";

    const title = document.createElement("h3");
    title.className = "text-2xl font-semibold text-[var(--text-strong)]";
    title.textContent = repo.name;

    const description = document.createElement("p");
    description.className = "mt-3 flex-1 leading-7 text-[var(--text-soft)]";
    description.textContent = repo.description || "No description has been added to this repository yet.";

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

    card.append(title, description, meta, link);
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
        ? `Showing ${state.repos.length} recent public repositories from ${USERNAME}.`
        : `GitHub returned data for ${USERNAME}, but the public repository list is still very small.`;
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
