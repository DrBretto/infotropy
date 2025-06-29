// src/components/CentralContentWindow.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence
import ModuleMenu from "./ModuleMenu"; // Import the ModuleMenu component
import MatterJsSimulation from "../modules/matterjs-simulation/MatterJsSimulation"; // Import the MatterJsSimulation component

interface CentralContentWindowProps {
  activeModule: string | null; // null for the main menu/intro
  onSelectModule: (moduleName: string) => void; // Add onSelectModule prop
  layoutState: string; // Add layoutState prop
}

const CentralContentWindow: React.FC<CentralContentWindowProps> = ({
  activeModule,
  onSelectModule, // Destructure the new prop
  layoutState, // Destructure the new prop
}) => {
  // Render content based on activeModule and layoutState
  const renderContent = () => {
    if (layoutState === "menu") {
      // Render ModuleMenu when in menu state
      return (
        <motion.div
          key="module-menu" // Unique key for animation
          initial={{ opacity: 0, y: 10 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animation to state
          exit={{ opacity: 0, y: -10 }} // Animation on exit
          transition={{ duration: 0.3, ease: "easeInOut" }} // Configure transition
          className="w-full h-full flex items-center justify-center" // Ensure menu fills the container
        >
          <ModuleMenu onSelectModule={onSelectModule} />
        </motion.div>
      );
    } else if (activeModule === "matterjs-simulation") {
      // Render the Matter.js simulation component
      return (
        <motion.div
          key="matterjs-simulation" // Unique key for animation
          initial={{ opacity: 0, y: 10 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animation to state
          exit={{ opacity: 0, y: -10 }} // Animation on exit
          transition={{ duration: 0.3, ease: "easeInOut" }} // Configure transition
          className="w-full h-full" // Ensure simulation fills the container
        >
          <MatterJsSimulation />
        </motion.div>
      );
    } else {
      // Keep generic placeholder for other active modules when in module state
      return (
        <motion.div
          key="generic-placeholder" // Unique key for animation
          initial={{ opacity: 0, y: 10 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animation to state
          exit={{ opacity: 0, y: -10 }} // Animation on exit
          transition={{ duration: 0.3, ease: "easeInOut" }} // Configure transition
          className="text-center text-gray-400 w-full h-full flex items-center justify-center" // Ensure placeholder fills the container
        >
          Content for "{activeModule}" Module Placeholder
        </motion.div>
      );
    }
  };

  return (
    // Use motion.div for animations and apply dynamic styling
    // Added green border and ensured flex-grow in module state
    <motion.div
      className={`w-full bg-gray-700 bg-opacity-50 rounded-md shadow-inner flex items-center justify-center border-green-500 border-2 ${
        layoutState === "menu" ? "h-64" : "flex-grow" // Adjust height based on layout state
      }`}
      layout // Enable layout animations
      transition={{ duration: 0.5, ease: "easeInOut" }} // Configure transition
    >
      {/* Use AnimatePresence for exit animations */}
      <AnimatePresence mode="wait">
        {" "}
        {/* Wait for exit animation to complete before new component enters */}
        {renderContent()}
      </AnimatePresence>
    </motion.div>
  );
};

export default CentralContentWindow;
