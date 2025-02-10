import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // Tailwind Vite plugin
import tailwindScrollbarHide from "tailwind-scrollbar-hide"; // Import the scrollbar-hide plugin

export default defineConfig({
  plugins: [react(), tailwindcss(), tailwindScrollbarHide], // Add the plugin here
});
