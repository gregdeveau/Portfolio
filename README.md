# Greg Deveau Portfolio

Professional portfolio built as a client-side web application with Vite, vanilla JavaScript, Tailwind CSS v4, and the GitHub API, with emphasis on systems, infrastructure, networking, support, and automation strengths.

## Live Site

GitHub Pages target:

`https://gregdeveau.github.io/Portfolio/`

## Project Overview

This project was built for the PROG2700 MP3 / final assignment. The goal is to present a professional portfolio that behaves like an application instead of a static one-page site. The content is structured around Greg Deveau's background in systems, infrastructure, networking, Docker, and IT support, including a self-hosted Linux home lab that uses Docker, monitoring tools, secure remote access, and a custom storage setup.

## Features

- Responsive portfolio layout with hero, about, skills, projects, API, contact, and footer sections
- Skills and experience-based case studies rendered dynamically from JavaScript data
- Project search and category filtering
- Theme toggle with persisted preference
- Project detail modal for deeper project summaries
- GitHub API integration with loading, empty, success, and error states
- GitHub Pages deployment configuration for the `Portfolio` repository

## API Used

- GitHub REST API
- Endpoint: `https://api.github.com/users/gregdeveau/repos`

## Tech Stack

- Vanilla JavaScript
- Vite
- Tailwind CSS v4
- PostCSS
- GitHub Pages
- gh-pages

## Experience Focus

- Linux, Docker, Windows Server, and reverse proxy fundamentals
- TCP/IP, DNS, VLANs, and firewall-oriented networking concepts
- Technical support, incident management, and IT operations habits
- PowerShell, Git, and growing full-stack/application development skills
- Self-hosted home lab design with Grafana, Prometheus, mergerFS, Tailscale, WireGuard, and media services

## Setup

```bash
npm install
npm run dev
```

## Build and Deploy

```bash
npm run build
npm run deploy
```

## Documentation

- [Architecture Notes](docs/architecture.md)
- [Project Reflection](docs/reflection.md)
- [Assignment Brief](saitge-prog2700-mp3-portfolio-client-app.md)

## Screenshots

Screenshot capture is the next documentation step after the first local preview or deployed publish. Add final images to `docs/screenshots/` and link them here.
