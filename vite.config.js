import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: ["src/components.jsx", "src/utils.js"],
      formats: ["es"],
    },
    copyPublicDir: false,
    rollupOptions: {
      external: ["@wordpress/element", "@wordpress/api-fetch"],
    },
  },
});
