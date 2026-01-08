# Development Guidelines

## File Structure
```
/app
  layout.tsx          # Root layout, Header, Footer
  page.tsx            # Homepage
  /tools
    page.tsx          # Tools listing
    [slug]
      page.tsx        # Tool detail
  /resources
    page.tsx          # Hub
    glossary/page.tsx
    chatbots/page.tsx
    blog/page.tsx
    extensions/page.tsx
  /company
    about/page.tsx
    contact/page.tsx
  privacy/page.tsx
  terms/page.tsx
  /globals.css
/components
  /ui
    Button.tsx
    Input.tsx
    Textarea.tsx
    Badge.tsx
    Card.tsx
    /layout
      Header.tsx
      Footer.tsx
      MobileMenu.tsx
    /tools
      ToolCard.tsx
      ToolForm.tsx
      ResultPanel.tsx
    /resources
      ResourceCard.tsx
/data
  tools.json
  resources.json
/lib
  utils.ts            # Helper functions (e.g., cn for classnames)
/types
  index.ts            # Global TypeScript interfaces
```

## Naming Conventions
- **Files**: `PascalCase.tsx` for components, `kebab-case.ts` for utilities/types.
- **Folders**: `kebab-case` (e.g., `/resources`, `/company`).
- **Components**: `PascalCase` (e.g., `ToolCard`, `Navigation`).
- **Functions/Variables**: `camelCase` (e.g., `handleSearch`, `toolList`).
- **Constants/Types**: `PascalCase` (e.g., `ToolInterface`, `CategoryEnum`).
- **CSS Classes**: Standard Tailwind utility strings.

## Coding Standards
- Use functional components with Hooks.
- Explicitly define types for all props and state variables.
- Use `clsx` and `tailwind-merge` for conditional class handling.
- Avoid `any` types; use `unknown` or specific interfaces.
- Use semantic HTML elements (`<nav>`, `<main>`, `<article>`, `<section>`).
- Enforce ESLint rules for accessibility (jsx-a11y).
- Keep components small; single responsibility principle.

## Testing Strategy
- **Unit Testing**: Test utility functions (filtering logic, slug generation) using Jest or React Testing Library.
- **Component Testing**: Verify critical components render with correct props (ToolCard, Button).
- **Manual Accessibility Testing**: Use keyboard (Tab, Enter, Esc) to navigate the site and ensure focus rings are visible. Use screen reader simulation tools if available.
- **Visual Regression**: Ensure responsive design works on mobile (375px), tablet (768px), and desktop (1280px+).
- **Link Checking**: Ensure all internal and external links resolve correctly (even if external ones go to `#` or open new tabs).

## Error Handling
- **Input Validation**: Display client-side validation messages (e.g., "This field is required") before "running" a tool.
- **Not Found**: Use Next.js `not-found.tsx` for invalid tool slugs or routes.
- **Error Boundaries**: Wrap dynamic sections (like Tool Detail) in a generic Error Boundary UI to catch runtime crashes without breaking the whole app.
- **Toast Notifications**: For non-critical errors or success messages (e.g., form submitted).

## Dependencies
```json
{
  "dependencies": {
    "next": "14.0.4",
    "react": "^18",
    "react-dom": "^18",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.1.0",
    "lucide-react": "^0.300.0"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "eslint": "^8",
    "eslint-config-next": "14.0.4"
  }
}
```

## Configuration
- `tailwind.config.ts`: Configured to scan `./app`, `./components`, `./data` paths. Define custom colors (primary accent) and font family (Inter/System).
- `tsconfig.json`: Strict mode enabled, path aliases configured (`@/components`, `@/lib`, `@/data`).
- `next.config.js`: Standard config (no special image domains needed).
- `.eslintrc.json`: Includes `next`, `react`, `@typescript-eslint` and `jsx-a11y` plugins.
