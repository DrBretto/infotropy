// src/App.tsx
import React, { useState, useMemo } from "react"; // Import React, useState, and useMemo
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence

// Import the components we created
import Header from "./components/Header";
import Footer from "./components/Footer";
import DescriptionSection from "./components/DescriptionSection";
import CentralContentWindow from "./components/CentralContentWindow";
import NavigationButtons from "./components/NavigationButtons";

// Import the main CSS file (now in src/)
import "./app.css";

function App() {
  // State to track the active module (null for main menu)
  const [activeModule, setActiveModule] = useState<string | null>(null);

  // Derive layout state from activeModule
  const layoutState = useMemo(
    () => (activeModule === null ? "menu" : "module"),
    [activeModule]
  );

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

  return (
    // Apply global styling and full-screen layout to the main tag
    <main className="min-h-screen h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 font-inter p-4 sm:p-8 flex flex-col items-center">
      {/* Wrap inner content with motion.div for layout animations */}
      <motion.div
        className="w-full max-w-4xl bg-gray-800 bg-opacity-70 rounded-xl shadow-lg p-6 sm:p-8 space-y-8 mb-8 flex flex-col items-center"
        layout // Enable layout animations
        transition={{ duration: 0.5, ease: "easeInOut" }} // Configure transition
      >
        {/* Pass layoutState to components that need to react to it */}
        <Header layoutState={layoutState} />
        <DescriptionSection
          activeModule={activeModule}
          layoutState={layoutState}
        />
        {/* Pass activeModule state AND handleSelectModule to CentralContentWindow */}
        <CentralContentWindow
          activeModule={activeModule}
          onSelectModule={handleSelectModule}
          layoutState={layoutState}
        />
        {/* Pass back button handler and visibility prop, and layoutState */}
        <NavigationButtons
          onBackToMenu={handleBackToMenu}
          showBackButton={showBackButton}
          layoutState={layoutState}
        />
        <Footer layoutState={layoutState} /> {/* Pass layoutState to Footer */}
      </motion.div>
    </main>
  );
}

export default App;

// Removed React Router specific components and imports (Layout, ErrorBoundary, links, etc.)
