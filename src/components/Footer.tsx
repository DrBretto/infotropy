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
    // Use motion.footer for animations
    <motion.footer
      className={`text-center text-gray-400 text-sm mt-8 ${
        layoutState === "module" ? "opacity-75" : "" // Example: slightly less opaque in module state
      }`}
      layout // Enable layout animations
      transition={{ duration: 0.5, ease: "easeInOut" }} // Configure transition
    >
      <p>
        © 2025 Infotropy. All rights reserved. An independent exploration of
        fundamental patterns.
      </p>
    </motion.footer>
  );
};

export default Footer;
