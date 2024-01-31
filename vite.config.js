import { defineConfig } from "vite";
import Sitemap from "vite-plugin-sitemap";
import react from "@vitejs/plugin-react";

const routes = ["interests", "projects", "media", "settings"];
const dynamicRoutes = routes.map((route) => `/#/${route}`);

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
  plugins: [
    react(),
    Sitemap({
      hostname: "https://zoomerlz.neocities.org",
      readable: true,
      dynamicRoutes,
      changefreq: "weekly",
    }),
  ],
});
