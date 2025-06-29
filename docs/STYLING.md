# Aesthetic Guidelines (Terminal-like)

This document outlines the aesthetic guidelines for the Infotropy front-end project, focusing on achieving a terminal-like look and feel, specifically mimicking a Windows desktop screen layout with a prominent, static "single screen" area.

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

- **Global Container (`main`):** Full viewport height (`min-h-screen`, `h-screen`), no overflow (`overflow-hidden`), global background (`bg-gray-900`), global font (`font-inter`), grid layout (`grid grid-rows-[auto_1fr_auto]`) for Header, Screen Container, and Footer.
- **`ScreenContainer`:** The central grid item in `App.tsx`. This container represents the main "single screen". Styled with `bg-black`, `border-green-500`, `border-2`, `rounded-lg`, `shadow-lg`, `p-8`, `flex flex-col`, `space-y-8`. The primary text color for all content within this container is set here using `text-green-400`.
- **`Central Content Window` (Nested "Window"):** Styled with `bg-gray-700 bg-opacity-50`, `rounded-md`, `shadow-inner`, `border-green-500`, `border-2`. It should `flex-grow` to fill available space within the `ScreenContainer`. Text color within this component will inherit from the `ScreenContainer`.
- **`ChatBoxPlaceholder`:** Basic styling with a top border (`border-t-2`, `border-green-500`) and appropriate padding (`p-4`) to visually separate it at the bottom of the `ScreenContainer`. Text color will inherit from the `ScreenContainer`.
- **`Header` and `Footer`:** Positioned outside the `ScreenContainer`. Their text colors (`text-gray-100`, gradient for Header title) are distinct from the green text within the screen.
- **Other Containers:** Use classes like `bg-gray-800 bg-opacity-70`, `rounded-xl`, `shadow-lg`, `border`, `border-gray-600` for elements outside the main "Screen" area if needed.
- **Buttons:** Style with accent colors (e.g., `bg-purple-600 hover:bg-purple-700`), text color (`text-white`), padding (`py-2 px-4`), rounded corners (`rounded-md`), and shadows (`shadow-lg`).
- **Input Fields/Interactive Elements:** Style to fit the dark theme with subtle borders and appropriate text colors.

## Implementation Notes

- All styling **must** be done using Tailwind CSS classes.
- Refer to the Tailwind CSS documentation for detailed class usage.
- Ensure consistency in applying styles across components.
