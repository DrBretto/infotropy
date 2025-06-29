# Aesthetic Guidelines (Terminal-like)

This document outlines the aesthetic guidelines for the Infotropy front-end project, focusing on achieving a terminal-like look and feel, specifically mimicking a Windows desktop screen layout with a prominent, static "single screen" area that fills the available space between the header and footer.

## Core Aesthetic Principles

- **Dark Theme:** Predominantly dark backgrounds with light text.
- **Monochromatic Base:** Utilize a gray scale for the primary color palette.
- **Subtle Accents:** Use limited, vibrant accent colors (blue, purple, green) for highlights and interactive elements.
- **Simple Shapes:** Prefer clean lines and geometric shapes.
- **Rounded Corners:** Use rounded corners for containers, buttons, and other elements to soften the look while maintaining a modern feel.
- **Consistent Typography:** Maintain a consistent font (Inter) and use appropriate font weights and sizes.
- **Structured Layout:** Use spacing, borders, and background variations to create a sense of structure, similar to panes in a terminal emulator or windows on a desktop.

## Color Palette (Tailwind CSS)

Utilize Tailwind CSS's default color palette, focusing on the following:

- **Backgrounds:** `gray-900` (global body background), `black` (for the main "Screen" area - `ScreenContainer`)
- **Text:** `gray-100`, `gray-200`, `gray-300`, `gray-400` (for elements outside the "Screen" area like Header/Footer), `green-400` (for primary text _within_ the "Screen" area - applied to `ScreenContainer` and inherited by its children)
- **Borders:** `green-500` (for the static border around the `ScreenContainer` and the border around the `CentralContentWindow`)
- **Accents:** `blue-400`, `purple-600`, `green-300` (as used in the original `info.md` for interactive elements like the Header title or buttons)

Future color scheme switching can be implemented by leveraging Tailwind's theming capabilities or CSS variables.

## Typography

- **Font Family:** "Inter" (applied globally).
- **Font Weights:** Use appropriate weights (e.g., `font-bold`) for emphasis.
- **Line Spacing:** Use `leading-relaxed` for body text for readability.

## Layout and Component Appearance

- **Global Container (`main`):** Full viewport height (`min-h-screen`, `h-screen`), no overflow (`overflow-hidden`), global background (`bg-gray-900`), global font (`font-inter`), grid layout (`grid grid-rows-[auto_1fr_auto]`) for Header, Screen Container, and Footer. **Crucially, this container has no padding or gap** to allow the central `ScreenContainer` to fill the available space completely.
- **`Header` and `Footer`:** Positioned in the top and bottom grid rows respectively. They have **internal padding** (e.g., `p-4`) to create space around their content, preventing it from touching the viewport edges or the `ScreenContainer` border. Their text colors (`text-gray-100`, gradient for Header title) are distinct from the green text within the screen.
- **`ScreenContainer`:** The central grid item in `App.tsx`. This container represents the main "single screen". It is styled with `w-full h-full` to fill its grid cell, `bg-black`, `border-green-500`, `border-2`, `rounded-lg`, `shadow-lg`. It has **internal padding** (`p-8`) to create space between its border and its children. It uses a flex column layout (`flex flex-col space-y-8`) to arrange its children. The primary text color for all content within this container is set here using `text-green-400`.
- **`Description Section` Component:** Displays textual content based on the `activeModule`. Positioned within the `ScreenContainer`. Its content updates and may animate during layout transitions. Text color inherits from `ScreenContainer`.
- **`Central Content Window` (Nested "Window"):** A container component rendered within the `ScreenContainer` that displays the active module or the module menu. It is styled with `bg-gray-700 bg-opacity-50`, `rounded-md`, `shadow-inner`, `border-green-500`, `border-2`. It uses `flex-grow` to take up the available space between the Description Section and the Chat Box Placeholder. Text color inherits from `ScreenContainer`.
- **`ChatBoxPlaceholder` Component:** A placeholder component rendered at the bottom of the `ScreenContainer`. It represents the future chat interface for LLM interaction and navigation. Styled with a top border (`border-t-2`, `border-green-500`) and internal padding (`p-4`). Text color inherits from `ScreenContainer`.
- **`Navigation Buttons` Component:** Contains buttons (e.g., "Back to Menu") that allow the user to change the `layoutState` and `activeModule` state in the `App` component. These buttons are positioned independently using fixed positioning, outside the main grid flow.
- **Other Containers:** Use classes like `bg-gray-800 bg-opacity-70`, `rounded-xl`, `shadow-lg`, `border`, `border-gray-600` for elements outside the main "Screen" area if needed.
- **Buttons:** Style with accent colors (e.g., `bg-purple-600 hover:bg-purple-700`), text color (`text-white`), padding (`py-2 px-4`), rounded corners (`rounded-md`), and shadows (`shadow-lg`).
- **Input Fields/Interactive Elements:** Style to fit the dark theme with subtle borders and appropriate text colors.

## Implementation Notes

- All styling **must** be done using Tailwind CSS classes.
- Refer to the Tailwind CSS documentation for detailed class usage.
- Ensure consistency in applying styles across components.
