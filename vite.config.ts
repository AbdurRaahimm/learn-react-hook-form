import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
// export default defineConfig({
//   base: '/learn-react-hook-form/',
//   plugins: [react(), tailwindcss()],
//   build: {
//     outDir: 'build'
//   }
// });

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/learn-react-hook-form/" : "/",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "build",
  },
}));
