import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('bar-database-raw')) return 'bar-database';
          if (id.includes('node_modules/leaflet/')) return 'vendor-map';
          if (id.includes('node_modules/recharts/')) return 'vendor-charts';
          if (id.includes('node_modules/react-dom/')) return 'vendor-react';
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-router-dom/')) return 'vendor-react';
        },
      },
    },
  },
}));
