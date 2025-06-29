# Project Architecture

This document outlines the architectural design and principles for the Infotropy front-end project. The goal is to create a modular, scalable, and maintainable single-page application designed with future expansion by AI agents in mind, featuring a terminal-like aesthetic with a distinct "single screen" area that fills the available space between the header and footer using standard CSS Grid.

## Core Principles

- **Modularity:** Components and features are designed as self-contained modules with clear interfaces.
- **Component-Based:** Utilizing React's component model for building the UI.
- **State-Driven Layout:** The application's visual state (e.g., displaying the menu or a specific module) is managed centrally and drives the rendering and styling of components across the full viewport.
- **Single Source of Truth:** Application state is centralized to avoid inconsistencies.
- **Convention over Configuration:** Establishing clear patterns for adding new modules and features.
- **Documentation:** Comprehensive markdown documentation is maintained to guide development (human and AI).
- **Terminal Aesthetic:** A consistent visual theme mimicking a classic terminal interface with a prominent "single screen" element that occupies the central area.

## High-Level Structure

The application follows a full-screen, non-scrolling layout structured with standard CSS Grid applied to the `main` HTML element. The grid has three rows: a fixed-height header, a flexible middle row that expands to fill the remaining space (the "single screen" area), and a fixed-height footer.

```mermaid
graph TD
    App --> MainGrid (Standard CSS: display: grid, grid-template-rows: auto 1fr auto, height: 100vh, no padding/gap)

    MainGrid --> Header (Grid Item, auto height, internal padding)
    MainGrid --> ScreenContainer (Grid Item, fills 1fr row, Standard CSS: width: 100%, height: 100%, background, border, color, box-sizing: border-box)
    MainGrid --> Footer (Grid Item, auto height, internal padding)

    ScreenContainer --> InnerContentDiv (Tailwind: w-full, h-full, p-8, flex col, space-y-8)

    InnerContentDiv --> DescriptionSection (no padding)
    InnerContentDiv --> CentralContentWindow (flex-grow, internal padding, border)
    InnerContentDiv --> ChatBoxPlaceholder (no padding, border-top)

    App --> NavigationButtons (Fixed Position, outside grid flow)
```

- **`App` Component:** The root component. Manages the global application state (`activeModule`, `layoutState`). It renders the main grid structure (`main` tag) and the `NavigationButtons` (positioned fixedly outside the grid flow).
- **`MainGrid` (Conceptual):** Represents the `main` HTML element in `App.tsx`. It uses standard CSS Grid (`display: grid`, `grid-template-rows: auto 1fr auto`, `height: 100vh`, `overflow: hidden`) to divide the viewport vertically into three sections: Header, Screen Container, and Footer. It has no external padding or gap, allowing the grid items to touch the viewport edges or each other.
- **`Header` Component:** Renders in the top grid row. It has internal padding (e.g., `p-4`) to create space around its content, preventing it from touching the viewport edges or the `ScreenContainer` border. Its appearance may change based on the `layoutState`.
- **`Footer` Component:** Renders in the bottom grid row. It has internal padding (e.g., `p-4`) to create space around its content, preventing it from touching the viewport edges or the `ScreenContainer` border. Typically displays copyright information.
- **`ScreenContainer`:** A dedicated container element (implemented as a `motion.div` in `App.tsx`) that occupies the middle grid row (`grid-row-2`). It is styled with standard CSS (`width: 100%`, `height: 100%`, `background-color: black`, `border: 2px solid green`, `color: green`, `box-sizing: border-box`) to fill its grid cell precisely and display the static green border. It also has Tailwind classes for `rounded-lg`, `shadow-lg`, and `overflow-hidden`. It contains an `InnerContentDiv` to manage internal spacing and layout.
- **`InnerContentDiv` (Conceptual):** A new `div` element placed directly inside the `ScreenContainer`. It is styled with Tailwind classes (`w-full h-full`, `p-8`, `flex flex-col`, `space-y-8`) to lay out and space the `DescriptionSection`, `CentralContentWindow`, and `ChatBoxPlaceholder`.
- **`Description Section` Component:** Displays textual content based on the `activeModule`. Positioned within the `InnerContentDiv`. It should **not have its own padding**, as padding is handled by the `InnerContentDiv`. Its content updates and may animate during layout transitions. Text color inherits from `ScreenContainer`.
- **`Central Content Window` (Nested "Window"):** A container component rendered within the `InnerContentDiv`. It is styled with Tailwind classes (`bg-gray-700 bg-opacity-50`, `rounded-md`, `shadow-inner`, `border-green-500`, `border-2`) and uses `flex-grow` to take up the available space between the Description Section and the Chat Box Placeholder. It should have **internal padding** (e.g., `p-8`) to space its content from its own border. Text color inherits from `ScreenContainer`.
- **`ChatBoxPlaceholder` Component:** A placeholder component rendered at the bottom of the `InnerContentDiv`. It represents the future chat interface for LLM interaction and navigation. Styled with a top border (`border-t-2`, `border-green-500`). It should **not have its own padding**, as padding is handled by the `InnerContentDiv`. Text color inherits from `ScreenContainer`.
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
