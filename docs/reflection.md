# Reflection

## 1. How did you structure your JavaScript?

I organized the JavaScript into three parts: data, state, and rendering. The data arrays hold the portfolio content, the state object tracks UI changes, and the render functions update the DOM after input or API changes.

## 2. How does this portfolio demonstrate the course outcomes?

- JavaScript data structures drive the content instead of hardcoded project cards in HTML.
- DOM manipulation is used to render sections and update the interface.
- Event listeners support search, filters, theme changes, modal behavior, and GitHub refresh actions.
- The GitHub API integration fetches live repository data and handles loading, empty, and error states.
- Tailwind CSS v4 is used to create a responsive layout for desktop and mobile.
- The project is configured for public deployment through GitHub Pages.

## 3. What challenges did you face?

The main challenge was keeping the app interactive and polished without overcomplicating the code. Another challenge was making sure the GitHub Pages base path, deployment scripts, and API section all fit together cleanly.

## 4. What would you improve?

1. Replace the sample project entries with more real case studies and project-specific repositories.
2. Add screenshots after the first local preview or live deployment.
3. Expand the GitHub section with repository sorting and language filters.
4. Add automated checks for accessibility and builds before deployment.
