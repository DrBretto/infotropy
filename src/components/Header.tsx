// src/components/Header.tsx
import React from "react";
import { motion } from "framer-motion"; // Import motion

// Define props for Header component
interface HeaderProps {
  layoutState: string; // Add layoutState prop
}

// Update component type to include HeaderProps
const Header: React.FC<HeaderProps> = ({ layoutState }) => {
  return (
    // Use motion.header for animations
    <motion.header
      className={`text-center space-y-2 mb-8 ${
        layoutState === "module"
          ? "flex items-center justify-center space-x-4 mb-4"
          : "" // Adjust styling for module state
      }`}
      layout // Enable layout animations
      transition={{ duration: 0.5, ease: "easeInOut" }} // Configure transition
    >
      {/* Animate the title */}
      <motion.h1
        className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg ${
          layoutState === "module"
            ? "text-xl sm:text-2xl"
            : "text-4xl sm:text-5xl" // Adjust text size for module state
        }`}
        layout // Enable layout animations
        transition={{ duration: 0.5, ease: "easeInOut" }} // Configure transition
      >
        Infotropy
      </motion.h1>
      {/* Conditionally render and animate the tagline */}
      {layoutState === "menu" && (
        <motion.p
          className="text-gray-300 text-lg sm:text-xl"
          initial={{ opacity: 1, y: 0 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animation to state
          exit={{ opacity: 0, y: -10 }} // Animation on exit
          transition={{ duration: 0.3, ease: "easeInOut" }} // Configure transition
        >
          Exploring the Universe as Information, Entropy, and the Arrow of Time.
        </motion.p>
      )}
      {/* Navigation buttons will be added here later for module state */}
    </motion.header>
  );
};

export default Header;
