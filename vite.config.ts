import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    /**
     * 커스텀 도메인(merini.com)에서 서비스할 때는 base는 반드시 "/"가 정답입니다.
     * (기존 "/metachild-5baf1ac1/" 는 github.io 레포 경로용 설정)
     */
    base: "/",

    server: {
      host: "::",
      port: 8080,
    },

    plugins: [
      react(),
      // lovable tagger는 개발에서만 사용 (프로덕션 번들 영향 최소화)
      isDev && componentTagger(),
    ].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    /**
     * GitHub Pages 환경에서 CSP가 엄격할 때 'eval' 계열이 남아있으면
     * 런타임이 차단되어 화이트 스크린이 날 수 있어 빌드 옵션을 보수적으로 지정합니다.
     */
    build: {
      target: "es2018",
      sourcemap: false,
    },

    /**
     * 의도치 않은 인라인 소스맵/디버그 코드가 섞이는 것을 피하려고 명시
     * (문제 재현 시 디버깅 위해 true로 바꿀 수 있음)
     */
    esbuild: {
      legalComments: "none",
    },
  };
});
