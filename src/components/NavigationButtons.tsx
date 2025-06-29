// src/components/NavigationButtons.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence

interface NavigationButtonsProps {
  onBackToMenu: () => void;
  showBackButton: boolean; // Prop to control visibility
  layoutState: string; // Add layoutState prop
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onBackToMenu,
  showBackButton,
  layoutState, // Destructure the new prop
}) => {
  // Only show the button in the 'module' layout state
  const shouldShowButton = showBackButton && layoutState === "module";

  return (
    // Use AnimatePresence for exit animations
    <AnimatePresence>
      {shouldShowButton && (
        // Use motion.div for animations
        <motion.div
          key="back-button" // Unique key for animation
          initial={{ opacity: 0, y: 10 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animation to state
          exit={{ opacity: 0, y: 10 }} // Animation on exit
          transition={{ duration: 0.3, ease: "easeInOut" }} // Configure transition
          className="text-center mt-4" // Apply styling
        >
          <button
            onClick={onBackToMenu}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md shadow-lg transition duration-200 ease-in-out"
          >
            Back to Menu
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavigationButtons;
