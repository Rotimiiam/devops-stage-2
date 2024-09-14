import { TanStackRouterVite } from "@tanstack/router-vite-plugin"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  server: {
    host: '0.0.0.0',  // Allow external access to the dev server
    port: 5143,  // Use Vite's default port or any other port
    watch: {
      usePolling: true,  // Required for Docker to pick up file changes
    },
  },
})
