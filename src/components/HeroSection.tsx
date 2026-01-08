import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background with subtle grid */}
      <div className="absolute inset-0 chart-grid opacity-[0.03]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
      
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      {/* Content */}
      <div className="container relative z-10 px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            실전 트레이더를 위한 시스템 트레이딩 허브
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            MT5를 <span className="text-gradient">이해</span>하는 곳.
            <br />
            자동매매를 <span className="text-gradient">판단</span>하는 곳.
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            수익을 약속하지 않습니다. 대신 구조를 설명합니다.
            <br className="hidden sm:block" />
            당신의 단계에 맞는 콘텐츠를 제공합니다.
          </p>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm">아래에서 시작점을 선택하세요</span>
            <ArrowRight className="w-4 h-4 rotate-90 animate-bounce" />
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-profit" />
              문서화된 전략
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-profit" />
              백테스트 리포트 공개
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-profit" />
              리스크 고지 명확
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
