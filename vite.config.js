import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Update "travel-blog" with your repo name
export default defineConfig({
  plugins: [react()],
  base: "/travel-blog/",
});
