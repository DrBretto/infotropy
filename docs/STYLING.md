# Aesthetic Guidelines (Terminal-like)

This document outlines the aesthetic guidelines for the Infotropy front-end project, focusing on achieving a terminal-like look and feel, specifically mimicking a Windows desktop screen layout with a prominent, static "single screen" area that fills the available space between the header and footer using standard CSS Grid.

## Core Aesthetic Principles

- **Dark Theme:** Predominantly dark backgrounds with light text.
- **Monochromatic Base:** Utilize a gray scale for the primary color palette.
- **Subtle Accents:** Use limited, vibrant accent colors (blue, purple, green) for highlights and interactive elements.
- **Simple Shapes:** Prefer clean lines and geometric shapes.
- **Rounded Corners:** Use rounded corners for containers, buttons, and other elements to soften the look while maintaining a modern feel.
- **Consistent Typography:** Maintain a consistent font (Inter) and use appropriate font weights and sizes.
- **Structured Layout:** Use spacing, borders, and background variations to create a sense of structure, similar to panes in a terminal emulator or windows on a desktop.

## Color Palette (Tailwind CSS & Standard CSS)

Utilize Tailwind CSS's default color palette for utility classes and standard CSS for core structural elements:

- **Backgrounds:** `gray-900` (global body background, applied via Tailwind `bg-gray-900` on `main`), `black` (for the main "Screen" area - `ScreenContainer`, applied via Standard CSS `background-color: black`)
- **Text:** `gray-100`, `gray-200`, `gray-300`, `gray-400` (for elements outside the "Screen" area like Header/Footer, applied via Tailwind `text-gray-100` on `main`), `green-400` (for primary text _within_ the "Screen" area - applied via Standard CSS `color: green` on `ScreenContainer` and inherited by its children)
- **Borders:** `green-500` (for the static border around the `ScreenContainer`, applied via Standard CSS `border: 2px solid green`), `border-green-500` (for the border around the `CentralContentWindow` and `ChatBoxPlaceholder` top border, applied via Tailwind)
- **Accents:** `blue-400`, `purple-600`, `green-300` (as used in the original `info.md` for interactive elements like the Header title or buttons, applied via Tailwind)

Future color scheme switching can be implemented by leveraging Tailwind's theming capabilities or CSS variables.

## Typography

- **Font Family:** "Inter" (applied globally via Tailwind `font-inter` on `main`).
- **Font Weights:** Use appropriate weights (e.g., `font-bold`, applied via Tailwind) for emphasis.
- **Line Spacing:** Use `leading-relaxed` (applied via Tailwind) for body text for readability.

## Layout and Component Appearance

- **Global Container (`main`):** The main HTML element in `App.tsx`. Styled with **Standard CSS** (`display: grid`, `grid-template-rows: auto 1fr auto`, `height: 100vh`, `overflow: hidden`) to create the main grid layout. Also has Tailwind classes for global background (`bg-gray-900`), global font (`font-inter`), and initial text color (`text-gray-100`). **Crucially, this container has no padding or gap** to allow the central `ScreenContainer` to fill the available space completely.
- **`Header` and `Footer`:** Positioned in the top and bottom grid rows respectively. They have **internal padding** (e.g., `p-4`, applied via Tailwind) to create space around their content, preventing it from touching the viewport edges or the `ScreenContainer` border. Their text colors (`text-gray-100`, gradient for Header title) are distinct from the green text within the screen.
- **`ScreenContainer`:** A dedicated container element (implemented as a `motion.div` in `App.tsx`) that occupies the middle grid row (`grid-row-2`). It is styled with **Standard CSS** (`width: 100%`, `height: 100%`, `background-color: black`, `border: 2px solid green`, `color: green`, `box-sizing: border-box`) to fill its grid cell precisely and display the static green border. It also has Tailwind classes for `rounded-lg`, `shadow-lg`, and `overflow-hidden`. It contains an `InnerContentDiv` to manage internal spacing and layout.
- **`InnerContentDiv` (Conceptual):** A new `div` element placed directly inside the `ScreenContainer`. It is styled with **Tailwind classes** (`w-full h-full`, `p-8`, `flex flex-col`, `space-y-8`) to lay out and space the `DescriptionSection`, `CentralContentWindow`, and `ChatBoxPlaceholder`.
- **`Description Section` Component:** Displays textual content based on the `activeModule`. Positioned within the `InnerContentDiv`. It should **not have its own padding**, as padding is handled by the `InnerContentDiv`. Its content updates and may animate during layout transitions. Text color inherits from `ScreenContainer`.
- **`Central Content Window` (Nested "Window"):** A container component rendered within the `InnerContentDiv`. It is styled with **Tailwind classes** (`bg-gray-700 bg-opacity-50`, `rounded-md`, `shadow-inner`, `border-green-500`, `border-2`) and uses `flex-grow` to take up the available space between the Description Section and the Chat Box Placeholder. It should have **internal padding** (e.g., `p-8`, applied via Tailwind) to space its content from its own border. Text color inherits from `ScreenContainer`.
- **`ChatBoxPlaceholder` Component:** A placeholder component rendered at the bottom of the `InnerContentDiv`. It represents the future chat interface for LLM interaction and navigation. Styled with a top border (`border-t-2`, `border-green-500`, applied via Tailwind). It should **not have its own padding**, as padding is handled by the `InnerContentDiv`. Text color inherits from `ScreenContainer`.
- **`Navigation Buttons` Component:** Contains buttons (e.g., "Back to Menu") that allow the user to change the `layoutState` and `activeModule` state in the `App` component. These buttons are positioned independently using fixed positioning, outside the main grid flow.
- **`Module Menu Component`:** A specific component rendered in the `Central Content Window` when the `layoutState` is 'menu'. It lists available modules and allows users to select them.
- **`Module Components`:** Individual components representing simulations, features, or other content, rendered within the `Central Content Window` when the `layoutState` is 'module'.
- **`State Management`:** Centralized in `App` to manage `activeModule` and `layoutState`.
- **`Animation Layer`:** Integration of an animation library (Framer Motion) to smoothly transition elements between layout states.

## Module Structure

Each module will reside in its own folder within the `src/modules/` directory.

```
src/
└── modules/
    └── [ModuleName]/
        ├── [ModuleName].js  # Main component file
        ├── components/      # Optional: Smaller components used within the module
        ├── utils/           # Optional: Module-specific utility functions
        └── styles/          # Optional: Module-specific Tailwind organization
```

Module-specific documentation will be located in `docs/modules/[ModuleName].md`.

## Technology Stack

- **Frontend Framework:** React (Functional Components, Hooks)
- **Styling:** Tailwind CSS (v3, primarily for internal components and utilities), Standard CSS (for core layout and ScreenContainer border/background)
- **Physics Engine:** Matter.js (for the initial simulation module)
- **AWS Interaction:** AWS SDK for JavaScript (for potential future client-side interactions with AWS services)
- **Build Tool:** Vite
- **Containerization (Optional Dev):** Docker
- **Animation Library:** Framer Motion

## Instructions for AI Agents

This project is specifically designed to be developed and maintained by AI agents. Adhering to the guidelines in [`docs/AGENT_GUIDELINES.md`](docs/AGENT_GUIDELINES.md) and the following instructions is critical for autonomous operation and context preservation:

1.  **Primary Knowledge Source:** The `docs` folder is the primary source of information. Consult relevant documentation files ([`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md), [`docs/STYLING.md`](docs/STYLING.md), [`docs/ANIMATION.md`](docs/ANIMATION.md), etc.) before starting work.
2.  **Task Management:** Refer to [`docs/todo.md`](docs/todo.md) for tasks and update upon verified completion.
3.  **Decision Logging:** Document significant decisions in `docs/decisions/`.
4.  **AWS Profile Usage:** Use the "personal" AWS profile for all AWS operations.
5.  **Utilize Available Tools:** Leverage provided tools effectively.
6.  **Code Quality:** Produce clean, readable, and well-commented code.
7.  **Styling:** Use Tailwind CSS classes where appropriate, but understand that standard CSS is used for the main grid layout and `ScreenContainer` border/background as documented in [`docs/STYLING.md`](docs/STYLING.md).
8.  **Responsiveness:** Design components to be fully responsive.
9.  **Error Handling:** Include basic error handling.
10. **Animations:** Implement animated transitions using Framer Motion as described in [`docs/ANIMATION.md`](docs/ANIMATION.md).

## Aesthetic Guidelines (Terminal-like)

Refer to [`docs/STYLING.md`](docs/STYLING.md) for detailed guidelines on achieving the terminal-like aesthetic, including color palette, typography, spacing, and component appearance, noting where standard CSS is used for core layout.

## Animation Strategy

Refer to [`docs/ANIMATION.md`](docs/ANIMATION.md) for the detailed animation strategy, including the use of Framer Motion and specific transition ideas (e.g., module opening animation, header transformation).

## Deployment Strategy (CI/CD)

Refer to [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for the deployment plan, including the manual steps and the plan for implementing a CI/CD pipeline (e.g., GitHub Actions) for automated builds and deployments to S3 using the "personal" AWS profile.

## Documentation Structure

All project documentation is located in the `docs/` folder. Key documents include:

- [`docs/AGENT_GUIDELINES.md`](docs/AGENT_GUIDELINES.md): Universal guidelines for AI agents.
- [`docs/README.md`](docs/README.md): Project overview and setup.
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md): Project architecture and design principles.
- [`docs/STYLING.md`](docs/STYLING.md): Aesthetic guidelines.
- [`docs/ANIMATION.md`](docs/ANIMATION.md): Animation strategy.
- [`docs/AWS_SETUP.md`](docs/AWS_SETUP.md): AWS infrastructure setup and profile usage.
- [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md): Deployment process and CI/CD planning.
- [`docs/TESTING.md`](docs/TESTING.md): Testing strategy.
- [`docs/DOCKER.md`](docs/DOCKER.md): Docker setup.
- [`docs/todo.md`](docs/todo.md): Project task list.
- `docs/modules/`: Documentation for individual modules.

* `docs/decisions/`: Log of significant project decisions.
