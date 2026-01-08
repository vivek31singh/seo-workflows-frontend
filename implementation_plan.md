# Implementation Plan

## Core Features
- **Responsive Global Navigation**: Sticky header with hamburger menu for mobile and dropdowns for categories.
- **Client-Side Search & Filtering**: Real-time filtering of tools by name, category, and search text on the `/tools` page.
- **Dynamic Tool Interface**: A generic form builder that renders inputs (text, textarea, etc.) based on a tool's JSON configuration.
- **Mock Tool Execution**: Simulating a "Run" action with loading states and returning structured JSON results to the user.
- **Resource Management**: A categorized resource center (Glossary, Blog, Extensions) with list and detail views.
- **SEO Optimization**: Semantic HTML structure, meta tags, and Open Graph tags pre-configured via Next.js Metadata API.

## User Stories
- As a **visitor**, I want to view a list of SEO tools categorized by function so I can quickly find what I need.
- As a **user**, I want to search for tools by keyword so I don't have to browse manually.
- As a **user**, I want to open a specific tool, input data, and see a mock result so I understand how the tool works.
- As a **developer**, I want to add a new tool by simply updating a JSON file without changing code.
- As a **mobile user**, I want a fully functional navigation menu so I can access all pages on a small screen.
- As a **site owner**, I want the site to be indexed by search engines efficiently (SEO-friendly).

## Acceptance Criteria
- All 12+ routes defined in the prompt must render without 404 errors (except invalid slugs).
- The Tools page updates the list immediately upon typing in the search box or clicking a category chip.
- Tool Detail pages dynamically render inputs based on the `tools.json` schema.
- Clicking "Run" on a tool shows a loading state, waits a brief moment, and then displays mock results in a designated area.
- The contact form prevents default submission and displays a toast notification indicating it is a demo.
- The mobile menu toggles visibility and allows navigation to all key sections.
- All interactive elements have visible focus states for keyboard accessibility.
- No `fetch`, `axios`, or API calls are present; all data comes from local imports.

## Implementation Steps
1.  **Phase 1: Project Scaffolding & Configuration**: Initialize Next.js repo, configure TypeScript, Tailwind, and ESLint. Define the folder structure.
2.  **Phase 2: Data Layer & Types**: Create the local JSON files (`tools.json`, `resources.json`) and define TypeScript interfaces matching these schemas.
3.  **Phase 3: Global Layout & Navigation**: Build the root layout, Header (with responsive mobile menu), and Footer. Implement global styles.
4.  **Phase 4: Core UI Components**: Develop the shared component library (Button, Input, Card, Badge, Modal, Toast).
5.  **Phase 5: Static Pages Implementation**: Build Homepage, About, Contact, Privacy, and Terms pages focusing on typography and layout.
6.  **Phase 6: Tools Directory Logic**: Implement the `/tools` index page with search, category filtering, and grid layout.
7.  **Phase 7: Dynamic Tool Detail Pages**: Build the `/tools/[slug]` page logic: rendering forms based on schema, mock async execution, and result display.
8.  **Phase 8: Resources Hub**: Implement the `/resources` hub and sub-pages (Glossary, Chatbots, Blog, Extensions).
9.  **Phase 9: SEO & Accessibility Audit**: Ensure meta tags are correct, contrast ratios are met, and keyboard navigation works throughout.
10. **Phase 10: Final Polish**: Add hover states, transitions, loading skeletons, and error boundaries.
