import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tailwindScrollbarHide from "tailwind-scrollbar-hide"; // ✅ Import properly

export default defineConfig({
  plugins: [react(), tailwindcss(), tailwindScrollbarHide()],
});
