(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`gregdeveau`,t={name:`Greg Deveau`,role:`Systems, Networking, and Infrastructure-Focused Technologist`,headline:`Systems, networking, and infrastructure experience backed by Docker, Linux, and hands-on support work.`,intro:`My background is strongest in systems administration, networking, and IT operations. This portfolio presents that experience as an application, using structured JavaScript content and live GitHub API data while highlighting the technical areas I want employers to notice first.`,about:`I enjoy the side of technology where infrastructure, networking, and application delivery overlap. My experience includes Linux environments, Windows Server coursework, Docker-based workflows, reverse proxy setup, and the kind of troubleshooting mindset that comes from real support and systems work.`,goals:`I am building toward roles where systems knowledge, automation, support experience, and full-stack fundamentals all matter. Right now that means continuing to strengthen scripting and application development while leaning into the infrastructure and networking skills I already have.`},n=[{title:`Systems & Infrastructure`,copy:`The core platform and environment skills I would want employers to notice first.`,items:[`Linux`,`Docker`,`Windows Server`,`Nginx / Reverse Proxy`]},{title:`Networking & Security`,copy:`The networking and security areas that support stable, well-configured environments.`,items:[`TCP/IP & DNS`,`VLANs`,`Firewalls`,`SSL/TLS`]},{title:`Operations & Automation`,copy:`The operational skills that connect technical support, scripting, and day-to-day delivery.`,items:[`Technical Support`,`Incident Management`,`PowerShell`,`Git`]}],r=[{id:`systems-labs`,title:`Systems Administration and Infrastructure Labs`,category:`systems`,summary:`Hands-on work centered on Linux, Windows Server coursework, remote administration, and understanding how systems fit together under real constraints.`,challenge:`Build confidence across operating systems, administrative tasks, and troubleshooting workflows without losing sight of the bigger environment.`,outcome:`Strengthened the kind of structured problem-solving that supports systems administration, infrastructure work, and technical support roles.`,tech:[`Linux`,`Windows Server`,`RDP / SSH`,`Systems Administration`],highlights:[`Worked with both Linux and Windows-oriented environments.`,`Built experience with administrative access, configuration, and troubleshooting.`,`Developed stronger infrastructure instincts rather than staying purely application-focused.`],link:`https://github.com/gregdeveau`,label:`GitHub Profile`},{id:`docker-workflows`,title:`Container and Reverse Proxy Workflows`,category:`docker`,summary:`Practical experience with Docker, container-based thinking, and reverse proxy concepts that support cleaner service delivery.`,challenge:`Move from isolated tools to a more connected view of how services are packaged, exposed, and managed.`,outcome:`Built a stronger foundation for modern infrastructure and deployment workflows, especially where containers and proxy layers meet.`,tech:[`Docker`,`Nginx`,`Reverse Proxy`,`Service Configuration`],highlights:[`Used Docker as part of learning repeatable service setup.`,`Worked with reverse proxy concepts that improve routing and exposure of services.`,`Connected infrastructure thinking to the way modern applications are delivered.`],link:`https://github.com/gregdeveau`,label:`GitHub Profile`},{id:`networking-practice`,title:`Network Configuration and Troubleshooting`,category:`networking`,summary:`Networking practice focused on foundational protocols, segmentation, device behavior, and understanding how connectivity problems are solved methodically.`,challenge:`Translate network theory into usable troubleshooting steps and configuration decisions that make sense in real environments.`,outcome:`Built stronger confidence in the fundamentals employers expect to see in networking and infrastructure support roles.`,tech:[`TCP/IP`,`DNS`,`VLANs`,`Firewalls`],highlights:[`Worked through the practical side of network configuration and diagnosis.`,`Built familiarity with layered troubleshooting rather than one-step fixes.`,`Developed a stronger understanding of how network reliability supports everything above it.`],link:`https://github.com/gregdeveau`,label:`GitHub Profile`},{id:`support-automation`,title:`IT Support and Automation Practice`,category:`support`,summary:`Experience rooted in technical support, incident handling, and the operational habits that keep environments and users moving forward.`,challenge:`Balance troubleshooting, communication, and process while still building deeper technical skills in scripting and development.`,outcome:`Built a practical foundation for roles that sit between user support, systems work, and broader infrastructure responsibility.`,tech:[`Technical Support`,`Incident Management`,`PowerShell`,`PostgreSQL`],highlights:[`Worked with ticketing and incident-driven support workflows.`,`Used PowerShell, Git, and coursework-based scripting to build automation habits.`,`Continued growing toward full-stack and infrastructure-adjacent technical roles.`],link:`https://github.com/gregdeveau`,label:`GitHub Profile`}],i=[{value:`all`,label:`All`},{value:`systems`,label:`Systems`},{value:`networking`,label:`Networking`},{value:`docker`,label:`Docker`},{value:`support`,label:`Support`}],a=[{title:`GitHub`,value:`github.com/gregdeveau`,note:`Browse public repositories and course work.`,href:`https://github.com/gregdeveau`},{title:`Portfolio Repository`,value:`github.com/gregdeveau/Portfolio`,note:`This portfolio app is versioned and deployed from the same repository, even while my public project history is still growing.`,href:`https://github.com/gregdeveau/Portfolio`},{title:`Public Contact`,value:`Add your preferred public email or LinkedIn before final submission.`,note:`Keep public contact details professional and safe to publish.`,href:``}],o={search:``,filter:`all`,theme:s(),repos:[],githubStatus:`idle`,githubMessage:`This section loads public GitHub data live, even while my public repository history is still growing.`,activeProjectId:null};function s(){try{let e=window.localStorage.getItem(`portfolio-theme`);if(e===`studio`||e===`midnight`)return e}catch{}return window.matchMedia(`(prefers-color-scheme: dark)`).matches?`midnight`:`studio`}function c(e){o.theme=e,document.documentElement.dataset.theme=e;try{window.localStorage.setItem(`portfolio-theme`,e)}catch{}let t=document.getElementById(`theme-toggle`);t&&(t.textContent=e===`studio`?`Switch to Night`:`Switch to Day`)}function l(){return n.reduce((e,t)=>e+t.items.length,0)}function u(){document.getElementById(`app`).innerHTML=`
    <div class="min-h-screen">
      <header class="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--surface)] backdrop-blur-xl">
        <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#hero" class="flex items-center gap-3">
            <span class="grid h-11 w-11 place-items-center rounded-2xl border border-[var(--line)] bg-[var(--accent-soft)] text-sm font-bold tracking-[0.2em] text-[var(--brand)]">GD</span>
            <div>
              <p class="text-[10px] uppercase tracking-[0.35em] text-[var(--text-soft)]">Portfolio</p>
              <p class="text-sm font-semibold text-[var(--text-strong)]">${t.name}</p>
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
                <h1 class="display-title max-w-4xl">${t.headline}</h1>
                <p class="max-w-2xl text-lg leading-8 text-[var(--text-soft)]">${t.intro}</p>
              </div>
              <div class="flex flex-wrap gap-3">
                <a class="primary-button" href="#projects">Explore Projects</a>
                <a class="secondary-button" href="#github">See Live GitHub Data</a>
              </div>
              <div class="grid gap-4 sm:grid-cols-3">
                <article class="metric-card"><p class="metric-label">Projects</p><p class="metric-value">${r.length}</p></article>
                <article class="metric-card"><p class="metric-label">Skills</p><p class="metric-value">${l()}</p></article>
                <article class="metric-card"><p class="metric-label">Live Repos</p><p id="repo-total" class="metric-value">Waiting</p></article>
              </div>
            </div>

            <aside class="panel space-y-6 p-6 sm:p-8">
              <div>
                <p class="section-kicker">Studio board</p>
                <h2 class="mt-3 text-2xl font-semibold text-[var(--text-strong)]">${t.role}</h2>
              </div>
              <article class="inner-panel"><p class="small-label">About</p><p class="mt-3 leading-7 text-[var(--text-soft)]">${t.about}</p></article>
              <article class="inner-panel"><p class="small-label">Goals</p><p class="mt-3 leading-7 text-[var(--text-soft)]">${t.goals}</p></article>
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
                <h2 class="section-title">Infrastructure-minded problem solving with room to keep growing into automation and development.</h2>
              </div>
              <div class="grid gap-6 md:grid-cols-2">
                <article class="panel p-6 sm:p-8">
                  <p class="small-label">Profile</p>
                  <p class="mt-4 leading-8 text-[var(--text-soft)]">${t.about}</p>
                </article>
                <article class="panel p-6 sm:p-8">
                  <p class="small-label">Goals</p>
                  <p class="mt-4 leading-8 text-[var(--text-soft)]">${t.goals}</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" class="section-wrap">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p class="section-kicker">Skills</p>
            <h2 class="section-title">The major strengths I want employers to recognize first.</h2>
            <p class="section-copy">This is a curated skill set rather than a full inventory, with emphasis on systems, networking, infrastructure, support, and automation.</p>
            <div id="skills-grid" class="mt-8 grid gap-6 lg:grid-cols-3"></div>
          </div>
        </section>

        <section id="projects" class="section-wrap">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mb-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p class="section-kicker">Projects</p>
                <h2 class="section-title">Experience-based case studies built around the work I actually do.</h2>
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
                <h2 class="section-title">Public repositories, loaded live from GitHub.</h2>
                <p class="section-copy">My public GitHub history is still growing, but this section still demonstrates live API integration with proper loading, empty, success, and error states.</p>
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
            <h2 class="section-title">Professional links and public contact details.</h2>
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
  `}function d(e,t=`stack-chip`){let n=document.createElement(`span`);return n.className=t,n.textContent=e,n}function f(){let e=document.getElementById(`skills-grid`);e.innerHTML=``,n.forEach(t=>{let n=document.createElement(`article`);n.className=`panel p-6 sm:p-8`,n.innerHTML=`
      <p class="small-label">${t.title}</p>
      <h3 class="mt-4 text-2xl font-semibold text-[var(--text-strong)]">${t.title}</h3>
      <p class="mt-3 leading-7 text-[var(--text-soft)]">${t.copy}</p>
    `;let r=document.createElement(`div`);r.className=`mt-6 flex flex-wrap gap-3`,t.items.forEach(e=>r.appendChild(d(e))),n.appendChild(r),e.appendChild(n)})}function p(){let e=document.getElementById(`filter-bar`);e.innerHTML=``,i.forEach(t=>{let n=document.createElement(`button`);n.type=`button`,n.dataset.filter=t.value,n.className=t.value===o.filter?`filter-button is-active`:`filter-button`,n.textContent=t.label,n.setAttribute(`aria-pressed`,String(t.value===o.filter)),e.appendChild(n)})}function m(){let e=o.search.trim().toLowerCase();return r.filter(t=>{let n=o.filter===`all`||t.category===o.filter,r=[t.title,t.summary,t.challenge,t.outcome,t.category,...t.tech].join(` `).toLowerCase();return n&&r.includes(e)})}function h(){let e=document.getElementById(`projects-grid`),t=document.getElementById(`project-summary`),n=m();if(e.innerHTML=``,t.textContent=`Showing ${n.length} of ${r.length} projects.`,n.length===0){e.innerHTML=`
      <article class="panel p-6 sm:p-8">
        <h3 class="text-xl font-semibold text-[var(--text-strong)]">No projects matched that search.</h3>
        <p class="mt-3 leading-7 text-[var(--text-soft)]">Try a broader keyword or switch back to the All filter.</p>
      </article>
    `;return}n.forEach(t=>{let n=document.createElement(`article`);n.className=`panel flex h-full flex-col p-6 sm:p-7`,n.innerHTML=`
      <p class="small-label">${i.find(e=>e.value===t.category)?.label??t.category}</p>
      <h3 class="mt-4 text-2xl font-semibold text-[var(--text-strong)]">${t.title}</h3>
      <p class="mt-3 flex-1 leading-7 text-[var(--text-soft)]">${t.summary}</p>
    `;let r=document.createElement(`div`);r.className=`mt-5 flex flex-wrap gap-2`,t.tech.forEach(e=>r.appendChild(d(e,`project-tag`)));let a=document.createElement(`div`);a.className=`mt-6 flex flex-wrap gap-3`;let o=document.createElement(`button`);o.type=`button`,o.className=`primary-button`,o.dataset.projectId=t.id,o.textContent=`Details`;let s=document.createElement(`a`);s.className=`secondary-button`,s.href=t.link,s.target=`_blank`,s.rel=`noreferrer noopener`,s.textContent=t.label,a.append(o,s),n.append(r,a),e.appendChild(n)})}function g(){let e=document.getElementById(`contact-grid`);e.innerHTML=``,a.forEach(t=>{let n=document.createElement(`article`);n.className=`panel flex h-full flex-col p-6 sm:p-8`;let r=document.createElement(`p`);r.className=`small-label`,r.textContent=t.title;let i=document.createElement(t.href?`a`:`p`);i.className=t.href?`mt-4 text-lg font-semibold text-[var(--text-strong)] transition hover:text-[var(--brand)]`:`mt-4 text-lg font-semibold text-[var(--text-strong)]`,i.textContent=t.value,t.href&&(i.href=t.href,i.target=`_blank`,i.rel=`noreferrer noopener`);let a=document.createElement(`p`);a.className=`mt-3 leading-7 text-[var(--text-soft)]`,a.textContent=t.note,n.append(r,i,a),e.appendChild(n)})}function _(){let e=document.getElementById(`project-modal`),t=document.getElementById(`project-modal-card`),n=r.find(e=>e.id===o.activeProjectId);if(!n){e.classList.add(`hidden`),document.body.classList.remove(`modal-open`),t.innerHTML=``;return}t.innerHTML=`
    <button type="button" class="modal-close" data-close="true" aria-label="Close project details">Close</button>
    <p class="small-label">${i.find(e=>e.value===n.category)?.label??n.category}</p>
    <h3 class="mt-4 text-3xl font-semibold text-[var(--text-strong)]">${n.title}</h3>
    <p class="mt-4 leading-8 text-[var(--text-soft)]">${n.summary}</p>
    <div class="mt-8 grid gap-6 md:grid-cols-2">
      <article class="inner-panel">
        <p class="small-label">Challenge</p>
        <p class="mt-3 leading-7 text-[var(--text-soft)]">${n.challenge}</p>
      </article>
      <article class="inner-panel">
        <p class="small-label">Outcome</p>
        <p class="mt-3 leading-7 text-[var(--text-soft)]">${n.outcome}</p>
      </article>
    </div>
    <div class="mt-8">
      <p class="small-label">Highlights</p>
      <ul class="mt-4 space-y-3 text-[var(--text-soft)]">${n.highlights.map(e=>`<li>${e}</li>`).join(``)}</ul>
    </div>
    <div class="mt-8">
      <p class="small-label">Technology</p>
      <div class="mt-4 flex flex-wrap gap-2">${n.tech.map(e=>`<span class="project-tag">${e}</span>`).join(``)}</div>
    </div>
    <div class="mt-8 flex flex-wrap gap-3">
      <a class="primary-button" href="${n.link}" target="_blank" rel="noreferrer noopener">${n.label}</a>
      <button type="button" class="secondary-button" data-close="true">Back to portfolio</button>
    </div>
  `,e.classList.remove(`hidden`),document.body.classList.add(`modal-open`)}function v(){let e=document.getElementById(`repo-total`);if(o.githubStatus===`success`){e.textContent=`${o.repos.length}`;return}if(o.githubStatus===`loading`){e.textContent=`Loading`;return}e.textContent=o.githubStatus===`error`?`Retry`:`Waiting`}function y(e){return new Intl.DateTimeFormat(`en-CA`,{month:`short`,day:`numeric`,year:`numeric`}).format(new Date(e))}function b(){let e=document.getElementById(`github-status`),t=document.getElementById(`github-grid`);if(e.dataset.tone=o.githubStatus,e.textContent=o.githubMessage,t.innerHTML=``,v(),o.githubStatus===`loading`){for(let e=0;e<3;e+=1){let e=document.createElement(`article`);e.className=`panel p-6 sm:p-7`,e.innerHTML=`
        <div class="skeleton-line h-4 w-28"></div>
        <div class="skeleton-line mt-4 h-8 w-3/4"></div>
        <div class="skeleton-line mt-4 h-4 w-full"></div>
        <div class="skeleton-line mt-3 h-4 w-5/6"></div>
      `,t.appendChild(e)}return}if(o.githubStatus===`error`){t.innerHTML=`
      <article class="panel p-6 sm:p-8">
        <h3 class="text-xl font-semibold text-[var(--text-strong)]">Repository request failed</h3>
        <p class="mt-3 leading-7 text-[var(--text-soft)]">The UI handled the error state correctly. Use refresh to try again.</p>
      </article>
    `;return}if(o.githubStatus===`success`&&o.repos.length===0){t.innerHTML=`
      <article class="panel p-6 sm:p-8">
        <h3 class="text-xl font-semibold text-[var(--text-strong)]">No repositories found</h3>
        <p class="mt-3 leading-7 text-[var(--text-soft)]">The API request succeeded, but my public repository list is still too small to show matching results here.</p>
      </article>
    `;return}o.repos.forEach(e=>{let n=document.createElement(`article`);n.className=`panel flex h-full flex-col p-6 sm:p-7`;let r=document.createElement(`h3`);r.className=`text-2xl font-semibold text-[var(--text-strong)]`,r.textContent=e.name;let i=document.createElement(`p`);i.className=`mt-3 flex-1 leading-7 text-[var(--text-soft)]`,i.textContent=e.description||`No description has been added to this repository yet.`;let a=document.createElement(`div`);a.className=`mt-5 flex flex-wrap gap-2`,[`Language: ${e.language||`Not specified`}`,`Stars: ${e.stargazers_count}`,`Updated: ${y(e.pushed_at)}`].forEach(e=>a.appendChild(d(e,`project-tag`)));let o=document.createElement(`a`);o.className=`secondary-button mt-6 w-fit`,o.href=e.html_url,o.target=`_blank`,o.rel=`noreferrer noopener`,o.textContent=`Open Repository`,n.append(r,i,a,o),t.appendChild(n)})}async function x(){o.githubStatus=`loading`,o.githubMessage=`Loading repositories from the GitHub API...`,b();try{let t=await fetch(`https://api.github.com/users/${e}/repos?sort=updated&per_page=100`,{headers:{Accept:`application/vnd.github+json`}}),n=await t.json();if(!t.ok)throw t.status===403||t.status===429?Error(`GitHub API rate limit reached. Wait a moment and try again.`):Error(n.message||`GitHub returned an unexpected error.`);o.repos=n.filter(e=>!e.fork).sort((e,t)=>new Date(t.pushed_at)-new Date(e.pushed_at)).slice(0,6),o.githubStatus=`success`,o.githubMessage=o.repos.length>0?`Showing ${o.repos.length} recent public repositories from ${e}.`:`GitHub returned data for ${e}, but the public repository list is still very small.`}catch(e){console.error(e),o.repos=[],o.githubStatus=`error`,o.githubMessage=e.message}b()}function S(){document.getElementById(`theme-toggle`).addEventListener(`click`,()=>{c(o.theme===`studio`?`midnight`:`studio`)}),document.getElementById(`project-search`).addEventListener(`input`,e=>{o.search=e.target.value,h()}),document.getElementById(`filter-bar`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-filter]`);t&&(o.filter=t.dataset.filter,p(),h())}),document.getElementById(`projects-grid`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-project-id]`);t&&(o.activeProjectId=t.dataset.projectId,_())}),document.getElementById(`project-modal`).addEventListener(`click`,e=>{e.target.closest(`[data-close]`)&&(o.activeProjectId=null,_())}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&o.activeProjectId&&(o.activeProjectId=null,_())}),document.getElementById(`refresh-repos`).addEventListener(`click`,()=>{x()})}function C(){u(),f(),p(),h(),g(),_(),c(o.theme),b(),S(),document.getElementById(`current-year`).textContent=new Date().getFullYear(),x()}C();