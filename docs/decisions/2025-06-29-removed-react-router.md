# Decision Log: Removed React Router Template

- **Date:** 2025-06-29
- **Decision:** Removed React Router dependencies and project structure, reverting to a standard Vite React single-page application setup.
- **Reasoning:**
  - The initial project initialization used a React Router v7 template (`npm create react-router@latest`) due to interactive input during the `npm create vite` command.
  - The project plan is for a single-page application where content switching is managed by application state (`useState`) within the main `App` component, not by URL routing.
  - The React Router template introduced unnecessary complexity, including specific file structures (`app/`, `app/+types/`) and type errors related to React Router's types that were difficult to resolve within the template's context.
  - Simplifying the project structure to a standard Vite React setup (`src/`, `src/main.tsx`, `src/App.tsx`) aligns better with the planned architecture and reduces potential issues.
- **Outcome:**
  - Uninstalled React Router related packages (`@react-router/node`, `@react-router/serve`, `react-router`, `@react-router/dev`).
  - Installed the standard Vite React plugin (`@vitejs/plugin-react`).
  - Updated `vite.config.ts` to use the standard React plugin.
  - Created `src/` directory and moved application code (`app/app.css`, `app/root.tsx` renamed to `src/App.tsx`, `app/components/`, `app/+types/`) to `src/`.
  - Created `src/main.tsx` as the new entry point.
  - Modified `src/App.tsx` to remove React Router specific code and integrate core components with state management.
  - Resolved TypeScript errors related to React Router types.
- **Implications:** Future development should follow standard Vite React practices for single-page applications. If routing becomes necessary later, a standard client-side routing library like `react-router-dom` can be introduced.
