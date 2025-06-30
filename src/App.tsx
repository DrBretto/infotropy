// src/App.tsx
import React, { useState, useMemo, useEffect } from "react"; // Import React, useState, useMemo, and useEffect
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence

// Import the components we created
import Header from "./components/Header";
import Footer from "./components/Footer";
import DescriptionSection from "./components/DescriptionSection";
import CentralContentWindow from "./components/CentralContentWindow";
import NavigationButtons from "./components/NavigationButtons";
import ChatBoxPlaceholder from "./components/ChatBoxPlaceholder"; // Import the ChatBoxPlaceholder component

// Import the main CSS file (now in src/)
import "./app.css";

// Define descriptions for each module
const moduleDescriptions: { [key: string]: string } = {
  "matterjs-simulation":
    "A simple physics simulation using Matter.js, demonstrating basic rigid body dynamics with boundaries and bouncing balls.",
  "maxwells-demon":
    "A physics simulation demonstrating Maxwell's Demon concept with bouncing balls, a controllable door, and dynamic background shading based on ball distribution.", // Description for Maxwell's Demon module
  // Add descriptions for future modules here
};

function App() {
  // State to track the active module (null for main menu)
  const [activeModule, setActiveModule] = useState<string | null>(null);

  // Derive layout state from activeModule
  const layoutState = useMemo(
    () => (activeModule === null ? "menu" : "module"),
    [activeModule]
  );

  // Add a console log to identify the deployed version
  useEffect(() => {
    console.log(`Infotropy App Version: ${new Date().toISOString()}`);
  }, []); // Run only once on component mount

  // Function to handle navigation to a module
  const handleSelectModule = (moduleName: string) => {
    setActiveModule(moduleName);
  };

  // Function to handle navigation back to the main menu
  const handleBackToMenu = () => {
    setActiveModule(null);
  };

  // Determine if the back button should be shown
  const showBackButton = activeModule !== null;

  // Get the description for the active module
  const currentDescription = activeModule
    ? moduleDescriptions[activeModule]
    : "Welcome to Infotropy. Select a module to begin.";

  return (
    // Apply global styling and full-screen layout to the main tag using Standard CSS
    <main className="bg-gray-900 text-gray-100 font-inter">
      {" "}
      {/* Removed grid/layout classes, handled by app.css */}
      {/* Header is in the top grid row (handled by main grid) */}
      <Header layoutState={layoutState} />
      {/* This motion.div is the ScreenContainer - the central grid item */}
      {/* Apply terminal-like styling using Standard CSS class and some Tailwind */}
      <motion.div
        className="screen-container rounded-lg shadow-lg overflow-hidden" // Added screen-container class, removed layout/color/dimension/flex classes
        layout // Keep layout animation
        transition={{ duration: 0.5, ease: "easeInOut" }} // Configure transition
      >
        {/* New inner div for content padding and flex layout */}
        <div className="w-full h-full p-8 flex flex-col space-y-8">
          {" "}
          {/* Added padding and flex properties here */}
          {/* Content within the ScreenContainer */}
          <DescriptionSection
            activeModule={activeModule} // Pass the activeModule prop
            description={currentDescription} // Pass the current description
            layoutState={layoutState}
          />
          <CentralContentWindow
            activeModule={activeModule}
            onSelectModule={handleSelectModule}
            layoutState={layoutState}
          />{" "}
          {/* Pass props to CentralContentWindow */}
          <ChatBoxPlaceholder />
        </div>
      </motion.div>
      {/* NavigationButtons are positioned independently, outside the grid flow */}
      {/* Pass back button handler and visibility prop, and layoutState */}
      <NavigationButtons
        onBackToMenu={handleBackToMenu}
        showBackButton={showBackButton}
        layoutState={layoutState}
      />
      {/* Footer is in the bottom grid row (handled by main grid) */}
      <Footer layoutState={layoutState} /> {/* Pass layoutState to Footer */}
    </main>
  );
}

export default App;

// Removed React Router specific components and imports (Layout, ErrorBoundary, links, etc.)
