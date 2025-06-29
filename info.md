Infotropy Website - Front Page AI Reference
This document outlines the architectural design and specific instructions for building the Infotropy website's front page.

1. Project Goal
   Develop a single-page React application that serves as the "Infotropy" landing page. It should feature:

A clear header.

A brief textual introduction to the concept.

A navigation section for future simulations.

A basic interactive 2D physics simulation (as a default/initial display).

A placeholder for a future AI chat window.

A simple footer.

2. Core Technologies
   Frontend Framework: React (Functional Components with useState, useEffect, useRef hooks).

Styling Framework: Tailwind CSS (exclusively for all styling, no custom CSS files).

Physics Engine: Matter.js (2D physics for browser-based simulations). Install via npm.

Font: "Inter" (apply globally).

3. Component Breakdown & Instructions
   3.1. App (Main Component)
   Purpose: Top-level container, orchestrates all other components.

Responsibilities:

Global layout (min-h-screen, bg-gradient-to-br from-gray-900 to-gray-800, text-gray-100, font-inter).

Global padding (p-4 sm:p-8).

Main content area (main tag) styling: w-full max-w-4xl, bg-gray-800 bg-opacity-70, rounded-xl, shadow-lg, p-6 sm:p-8, space-y-8, mb-8.

Arrangement of sub-components: flex flex-col items-center.

Include SimulationNav after IntroSection and before the SimulationCanvas section.

3.2. Header Component
Purpose: Displays the main site title and tagline.

Content:

<h1> for "Infotropy" (large, bold, gradient text: text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg).

<p> for tagline: "Exploring the Universe as Information, Entropy, and the Arrow of Time."

Styling: Centered text, appropriate font sizes and spacing.

3.3. IntroSection Component
Purpose: Provides a brief textual introduction to the Infotropy framework.

Content:

<h2> for "A New Lens for Reality" (text-blue-300).

Two paragraphs explaining:

Information and entropy as two sides of a coin.

Universe creating itself through iterative processes.

Arrow of time as information accumulation/complexity emergence.

Universality across cosmogenesis, life, cognition, societies.

Styling: Centered text, readable leading-relaxed, text-gray-200.

3.4. SimulationNav Component (NEW)
Purpose: Provides navigation buttons for different simulations.

Placement: Positioned below the IntroSection and above the SimulationCanvas.

Content:

<h2> title: "Explore Simulations" (text-xl font-bold text-gray-200).

A row or grid of placeholder buttons. For the initial version, create one button.

Example Button: "Bouncing Balls (Matter.js)"

Note for Future: These buttons will eventually trigger full-screen animated transitions to their respective simulations. The initial architecture should be flexible enough to allow for state management to control which simulation is currently active and potentially take over the screen. This component will serve as the entry point for those interactions.

Styling: Centered, clear spacing, visually appealing buttons (e.g., bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md shadow-lg).

3.5. SimulationCanvas Component
Purpose: Renders a 2D physics simulation using Matter.js. This will be the default/initially displayed simulation.

Key Functionality (useEffect):

Initialize Matter.js (Engine, Render, World, Bodies, Runner).

Use useRef for <canvas> element.

Box Boundaries: Create four static rectangle bodies (top, bottom, left, right walls).

isStatic: true, distinct dark fillStyle with strokeStyle and lineWidth, small friction.

Bouncing Balls: Add 15-20 dynamic circle bodies.

Random initial positions, radii (10-20px), restitution (0.8-0.95), density (0.001-0.002).

Random, vibrant HSL fillStyle for each ball. Minimal friction.

Gravity: engine.gravity.y = 1;.

Responsiveness: Implement resizeCanvas function for window.addEventListener('resize').

Adjust render.options.width/height and canvas.width/height to fill parent container, maintaining a 3:2 aspect ratio (width:height), up to a max of 600px width / 400px height for the core physics world dimensions.

Cleanup: Return cleanup function from useEffect to stop Matter.js engine/render and remove event listeners.

Styling: Canvas container w-full relative aspect-w-3 aspect-h-2, bg-gray-900, rounded-md, shadow-inner, border border-gray-600. Canvas itself absolute inset-0 w-full h-full.

3.6. AIChatPlaceholder Component
Purpose: Placeholder for future AI chat interface.

Content:

<h2> for "Engage with Infotropy (Coming Soon!)" (text-green-300).

<p> explaining future functionality.

A div placeholder for the chat window: h-32, p-4, border border-gray-600, rounded-md, bg-gray-800, text-gray-400, flex items-center justify-center.

Placeholder text: "AI Chat Window Placeholder..." with animate-pulse effect.

Styling: Centered text, bg-gray-700 bg-opacity-50, rounded-lg, shadow-md, border-2 border-dashed border-purple-500.

3.7. Footer Component
Purpose: Displays copyright and general site information.

Content: "© 2025 Infotropy. All rights reserved. An independent exploration of fundamental patterns."

Styling: Centered text, text-gray-400, text-sm, appropriate margins.

4. General Instructions for AI Agent
   Code Quality: Produce clean, readable, and well-commented code.

Self-Contained: The output should be a complete, runnable React application within a single file or standard React project structure.

Tailwind Only: All styling must derive from Tailwind CSS classes. Do not use inline styles unless absolutely necessary or custom CSS.

No alert() or confirm(): Do not use browser-native dialogs.

Error Handling: Include basic error handling for critical parts like canvas initialization.

Responsiveness: Ensure all components are fully responsive across common screen sizes (mobile, tablet, desktop) using Tailwind's responsive prefixes.
