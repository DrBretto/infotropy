# Decision Log: Reverted Tailwind CSS to v3

- **Date:** 2025-06-29
- **Decision:** Reverted Tailwind CSS installation from pre-release v4 (using Oxide) to the latest stable v3.
- **Reasoning:**
  - The initial installation of `tailwindcss` resulted in a pre-release version (v4.1.11) that uses the new Oxide engine.
  - Attempts to initialize the Tailwind configuration files (`tailwind.config.js`, `postcss.config.js`) using standard methods (`npx tailwindcss init -p`, `npm exec tailwindcss init -p`, executing the `install.js` script directly) failed.
  - The structure and command for initializing Tailwind CSS v4 were not immediately clear from the package contents, indicating a potentially different or less documented process compared to v3.
  - To avoid further delays and ensure a stable, well-documented setup for the project's initial development, reverting to the latest stable version of Tailwind CSS (v3) was the most practical solution.
- **Outcome:**
  - Uninstalled the pre-release version of `tailwindcss`.
  - Installed the latest stable version of `tailwindcss` as a dev dependency.
  - Manually created `tailwind.config.js` and `postcss.config.js` files with standard configurations.
  - Added the `@tailwind` directives to the main CSS file (`src/app.css`).
- **Implications:** The project now uses Tailwind CSS v3. If there is a future need or desire to upgrade to Tailwind CSS v4, the documentation for v4's initialization and usage with Vite and PostCSS will need to be consulted.
