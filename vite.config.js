import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Ignore ESLint and type errors during build
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
  // For Vite 4+, suppress type checking errors (for TypeScript)
  define: {
    "process.env.ESLINT_NO_DEV_ERRORS": JSON.stringify("true"),
    "process.env.TSC_COMPILE_ON_ERROR": JSON.stringify("true"),
  },
});
