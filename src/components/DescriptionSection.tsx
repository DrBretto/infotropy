// src/components/DescriptionSection.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence

interface DescriptionSectionProps {
  activeModule: string | null; // null for the main menu/intro
  layoutState: string; // Add layoutState prop
  description: string; // Add the description prop
}

const DescriptionSection: React.FC<DescriptionSectionProps> = ({
  activeModule,
  layoutState, // Destructure the new prop
  description, // Destructure the description prop
}) => {
  // Placeholder text - will be replaced with actual content and state logic later
  const mainIntroText = (
    <>
      <h2 className="text-blue-300 text-2xl sm:text-3xl font-bold mb-4">
        A New Lens for Reality
      </h2>
      {/* Apply green text color to paragraphs */}
      <p className="text-green-400 leading-relaxed mb-4">
        Information and entropy are two sides of a coin, fundamental to
        understanding the universe. The universe creates itself through
        iterative processes, building complexity from simple rules.
      </p>
      <p className="text-green-400 leading-relaxed">
        The arrow of time emerges from the accumulation of information and the
        emergence of complexity. This framework applies universally, from
        cosmogenesis to life, cognition, and societies.
      </p>
    </>
  );

  // Use the passed description prop instead of placeholder text
  // Apply green text color to the paragraph
  const moduleDescriptionText = (
    <p className="text-green-400 leading-relaxed">{description}</p>
  );

  return (
    // Use motion.section for animations and apply dynamic styling
    <motion.section
      className={`space-y-4 mb-8 ${
        layoutState === "module" ? "text-left w-full" : "text-center" // Adjust text alignment and width for module state
      }`}
      layout // Enable layout animations
      transition={{ duration: 0.5, ease: "easeInOut" }} // Configure transition
    >
      {/* Use AnimatePresence for exit animations */}
      <AnimatePresence mode="wait">
        {" "}
        {/* Wait for exit animation to complete before new component enters */}
        {layoutState === "menu" && (
          <motion.div
            key="main-intro" // Unique key for animation
            initial={{ opacity: 0, y: 10 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Animation to state
            exit={{ opacity: 0, y: -10 }} // Animation on exit
            transition={{ duration: 0.3, ease: "easeInOut" }} // Configure transition
          >
            {mainIntroText}
          </motion.div>
        )}
        {layoutState === "module" && (
          <motion.div
            key={activeModule} // Unique key based on active module
            initial={{ opacity: 0, y: 10 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Animation to state
            exit={{ opacity: 0, y: -10 }} // Animation on exit
            transition={{ duration: 0.3, ease: "easeInOut" }} // Configure transition
          >
            {moduleDescriptionText}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default DescriptionSection;
