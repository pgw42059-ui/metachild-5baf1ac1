import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // ✅ SWC 제거
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    base: "/", // 커스텀 도메인 merini.com

    server: {
      host: "::",
      port: 8080,
    },

    plugins: [
      react(),                 // ✅ CSP-safe
      isDev && componentTagger(), // 개발에서만
    ].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    build: {
      target: "es2018",
      sourcemap: false,
    },
  };
});
