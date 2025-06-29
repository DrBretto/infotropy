import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Import the standard React plugin
import tailwindcss from "@tailwindcss/vite"; // Keep the tailwindcss plugin

export default defineConfig({
  plugins: [
    react(), // Use the standard React plugin
    tailwindcss(), // Keep the tailwindcss plugin
    // Remove reactRouter() and tsconfigPaths()
  ],
});
