// src/components/Footer.tsx
import React from "react";
import { motion } from "framer-motion"; // Import motion

// Define props for Footer component
interface FooterProps {
  layoutState: string; // Add layoutState prop
}

// Update component type to include FooterProps
const Footer: React.FC<FooterProps> = ({ layoutState }) => {
  // Conditional styling based on layoutState can be added here if needed
  return (
    // Use motion.footer for animations and apply styling
    // Added internal padding and removed top margin
    <motion.footer
      className={`text-center text-gray-400 text-sm p-4 ${
        // Added p-4, removed mt-8
        layoutState === "module" ? "opacity-75" : "" // Example: slightly less opaque in module state
      }`}
      layout // Enable layout animations
      transition={{ duration: 0.5, ease: "easeInOut" }} // Configure transition
    >
      <p>
        © 2025 drbretto. All rights reserved. An independent exploration of
        fundamental patterns.
      </p>
    </motion.footer>
  );
};

export default Footer;
