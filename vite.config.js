import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // 👈 Obliga a Vite a vigilar activamente los cambios de archivos
      interval: 100, // Revisa cambios cada 100ms para que sea instantáneo
    },
  },
});
