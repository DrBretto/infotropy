# Aesthetic Guidelines (Terminal-like)

This document outlines the aesthetic guidelines for the Infotropy front-end project, focusing on achieving a terminal-like look and feel.

## Core Aesthetic Principles

- **Dark Theme:** Predominantly dark backgrounds with light text.
- **Monochromatic Base:** Utilize a gray scale for the primary color palette.
- **Subtle Accents:** Use limited, vibrant accent colors (blue, purple, green) for highlights and interactive elements.
- **Simple Shapes:** Prefer clean lines and geometric shapes.
- **Rounded Corners:** Use rounded corners for containers, buttons, and other elements to soften the look while maintaining a modern feel.
- **Consistent Typography:** Maintain a consistent font (Inter) and use appropriate font weights and sizes.
- **Structured Layout:** Use spacing, borders, and background variations to create a sense of structure, similar to panes in a terminal emulator.

## Color Palette (Tailwind CSS)

Utilize Tailwind CSS's default color palette, focusing on the following:

- **Backgrounds:** `gray-900`, `gray-800`, `gray-700`
- **Text:** `gray-100`, `gray-200`, `gray-300`, `gray-400`
- **Accents:** `blue-400`, `purple-600`, `green-300` (as used in the original `info.md`)

Future color scheme switching can be implemented by leveraging Tailwind's theming capabilities or CSS variables.

## Typography

- **Font Family:** "Inter" (applied globally).
- **Font Weights:** Use appropriate weights (e.g., `font-bold`) for emphasis.
- **Line Spacing:** Use `leading-relaxed` for body text for readability.

## Component Appearance

- **Containers:** Use classes like `bg-gray-800 bg-opacity-70`, `rounded-xl`, `shadow-lg`, `border`, `border-gray-600`.
- **Buttons:** Style with accent colors (e.g., `bg-purple-600 hover:bg-purple-700`), text color (`text-white`), padding (`py-2 px-4`), rounded corners (`rounded-md`), and shadows (`shadow-lg`).
- **Input Fields/Interactive Elements:** Style to fit the dark theme with subtle borders and appropriate text colors.

## Implementation Notes

- All styling **must** be done using Tailwind CSS classes.
- Refer to the Tailwind CSS documentation for detailed class usage.
- Ensure consistency in applying styles across components.
