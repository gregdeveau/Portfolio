# Reflection

## 1. How did you structure your JavaScript?

I organized the JavaScript into three parts: data, state, and rendering. The data arrays hold the portfolio content, including skills and experience-based case studies. The state object tracks UI changes, and the render functions update the DOM after input or API changes.

## 2. How does this portfolio demonstrate the course outcomes?

- JavaScript data structures drive the content instead of hardcoded project cards in HTML.
- DOM manipulation is used to render sections and update the interface.
- Event listeners support search, filters, theme changes, modal behavior, and GitHub refresh actions.
- The GitHub API integration fetches live repository data and handles loading, empty, and error states.
- Tailwind CSS v4 is used to create a responsive layout for desktop and mobile.
- The project is configured for public deployment through GitHub Pages.
- The portfolio content is tailored to my strengths in systems administration, networking, Docker, IT support, and automation instead of relying on a large public project history.

## 3. What challenges did you face?

The main challenge was presenting relevant technical experience honestly even though my GitHub project history is still limited. I wanted the portfolio to feel professional without pretending I had a large set of public repositories, so I used experience-based case studies and let the GitHub API section stand on its own as the live data requirement. Another challenge was making sure the GitHub Pages base path, deployment scripts, and API section all fit together cleanly.

## 4. What would you improve?

1. Add more public repositories over time so the GitHub section becomes a stronger reflection of my work.
2. Add screenshots after the first local preview or live deployment.
3. Expand the GitHub section with repository sorting and filtering.
4. Add automated checks for accessibility and builds before deployment.
