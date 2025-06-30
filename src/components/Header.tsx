// src/components/Header.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence

// Define props for Header component
interface HeaderProps {
  layoutState: string; // Add layoutState prop
}

// Update component type to include HeaderProps
const Header: React.FC<HeaderProps> = ({ layoutState }) => {
  return (
    // Use motion.header for animations and apply dynamic styling
    // Added internal padding and removed bottom margin
    <motion.header
      className={`w-full p-4 ${
        // Added p-4 for internal padding
        // Ensure header takes full width
        layoutState === "module"
          ? "flex items-center justify-between" // Layout for module state (title left, buttons right), removed mb-4
          : "text-center space-y-2 flex flex-col items-center" // Layout for menu state, removed mb-8
      }`}
      layout // Enable layout animations
      transition={{ duration: 0.5, ease: "easeInOut" }} // Configure transition
    >
      {/* Animate the title */}
      <motion.h1
        className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg ${
          layoutState === "module"
            ? "text-xl sm:text-2xl" // Smaller text size for module state
            : "text-2xl sm:text-3xl" // Smaller text size for menu state (Adjusted)
        }`}
        layout // Enable layout animations
        transition={{ duration: 0.5, ease: "easeInOut" }} // Configure transition
      >
        Infotropy
      </motion.h1>
      {/* Conditionally render and animate the tagline */}
      <AnimatePresence>
        {layoutState === "menu" && (
          <motion.p
            key="tagline" // Unique key for animation
            className="text-gray-300 text-lg sm:text-xl"
            initial={{ opacity: 1, y: 0 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Animation to state
            exit={{ opacity: 0, y: -10 }} // Animation on exit
            transition={{ duration: 0.3, ease: "easeInOut" }} // Configure transition
          >
            Exploring the Universe as Information, Entropy, and the Arrow of
            Time.
          </motion.p>
        )}
      </AnimatePresence>
      {/* Navigation buttons will be added here later for module state */}
      {/* Placeholder for navigation buttons in module state */}
      {layoutState === "module" && (
        <div className="flex items-center space-x-4">
          {/* Back button and other nav items will go here */}
          {/* Example: <NavigationButtons onBackToMenu={...} showBackButton={true} layoutState={layoutState} /> */}
        </div>
      )}
    </motion.header>
  );
};

export default Header;
