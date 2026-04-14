# Architecture

## Overview

This portfolio is a client-side web application built with Vite, vanilla JavaScript, Tailwind CSS v4, and the GitHub API. The structure stays intentionally lightweight so the JavaScript flow is easy to follow while still demonstrating state, dynamic rendering, and deployment readiness.

## File Structure

```text
Portfolio/
├── docs/
│   ├── architecture.md
│   └── reflection.md
├── src/
│   ├── main.js
│   └── style.css
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
└── vite.config.js
```

## Data Flow

1. `index.html` loads the root app container and starts `src/main.js`.
2. `main.js` defines the portfolio data for profile content, skill groups, projects, filters, and contact cards.
3. The page shell is rendered first.
4. Dynamic sections such as skills, projects, contacts, and GitHub repositories are rendered from JavaScript data or API results.
5. User input updates a small shared state object.
6. The related render function runs again after state changes.

## Rendering Approach

- The shell is rendered once from a template string.
- Skills, projects, contacts, and repositories are rendered with DOM creation.
- Search and filter controls update project rendering in place.
- The project modal is driven by the active project ID in state.
- The GitHub section updates based on loading, empty, success, and error states.

## Deployment Approach

- Vite builds the app into `dist/`.
- `vite.config.js` sets the base path to `/Portfolio/` for GitHub Pages.
- `package.json` includes `predeploy` and `deploy` scripts using `gh-pages -d dist`.
