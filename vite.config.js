import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("@tsparticles")) {
              return "vendor_tsparticles";
            } else if (id.includes("react-parallax-tilt")) {
              return "vendor_tilt";
            }

            return "vendor"; // all other package goes here
          }
        },
      },
    },
  },
  plugins: [react()],
});
