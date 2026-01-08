# Technical Specification

## Architecture Patterns
- **Client-Side Rendering (CSR) for Interactivity**: Using `use client` directive for components requiring state (filters, forms, mobile menu).
- **Server Components (RSC) for Layout**: Leveraging Next.js App Router defaults for layout, static pages, and SEO content to minimize JS bundle size.
- **Composition Pattern**: Building complex UI (like ToolForm) by composing smaller, reusable primitives (Input, Button).
- **Data-Driven UI**: Rendering lists and forms by mapping over data structures rather than hardcoding HTML.

## Component Hierarchy
```
Layout (Root)
├── Header
│   ├── Logo
│   ├── DesktopNav
│   ├── MobileNav (Slide-over)
│   └── SearchTrigger
├── Main Content Area
│   ├── Page: Home
│   │   ├── HeroSection
│   │   ├── CategoryGrid
│   │   └── ResourceStrip
│   ├── Page: Tools
│   │   ├── FilterBar (Search + CategoryChips)
│   │   └── ToolGrid
│   │       └── ToolCard
│   ├── Page: ToolDetail
│   │   ├── ToolHeader
│   │   ├── ToolForm (Dynamic)
│   │   │   ├── InputGroup (generated)
│   │   │   └── ActionButton
│   │   └── ResultPanel
│   ├── Page: Resources
│   │   └── ResourceCard (Hub)
│   └── Page: ResourceSubPages (Glossary, Blog, etc.)
└── Footer
    ├── LinkColumns
    └── SocialLinks
```

## Data Models
**Tool Schema**
```typescript
interface Tool {
  slug: string;
  name: string;
  category: "Data Analysis" | "Relevance" | "Technical" | "Authority";
  shortDescription: string;
  longDescription: string;
  inputs: Array<{
    key: string;
    label: string;
    type: "text" | "textarea" | "number" | "select";
    placeholder?: string;
    options?: string[]; // for select types
  }>;
}
```

**Resources Schema**
```typescript
interface Resources {
  glossary: Array<{ term: string; definition: string }>;
  chatbots: Array<{ title: string; description: string }>;
  blog: Array<{ slug: string; title: string; excerpt: string }>;
  extensions: Array<{ name: string; description: string; link: string }>;
}
```

## API Design
N/A (No external API). Internal logic is handled via React props and Context (if necessary). Data is imported directly into components:
`import tools from '@/data/tools.json';`
