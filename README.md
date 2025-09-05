# Gitsink Landing Page

## Error Handling

This project includes custom error pages for different error scenarios:

### 404 Not Found

The 404 page is displayed when a user navigates to a route that doesn't exist. It's defined in `app/not-found.tsx`.

You can also programmatically trigger a 404 page using the `handleNotFound` utility:

\`\`\`typescript
import { handleNotFound } from "@/lib/not-found"

// In a page or component:
handleNotFound(!project, "Project not found")
\`\`\`

### 500 Server Error

The 500 error page is displayed when an error occurs in a page or component. It's defined in `app/error.tsx`.

### Global Error

The global error page is displayed when an error occurs in the root layout. It's defined in `app/global-error.tsx`.

### Component-Level Error Boundaries

The application also uses component-level error boundaries to isolate errors to specific sections of the page. These are defined in `components/error-handling/error-boundary.tsx`.
