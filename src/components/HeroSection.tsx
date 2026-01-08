import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

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
            설정이 아닌 <span className="text-gradient">구조</span>로,
            <br />
            수익률이 아닌 <span className="text-gradient">통제</span>로.
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            MT5 자동매매의 본질은 '왜 작동하는가'입니다.
            <br className="hidden sm:block" />
            재현 가능한 전략, 리스크 설계, 실전 데이터 기반 교육.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="hero" size="xl">
              <Link to="/education">
                초보자 가이드 보기
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border hover:border-primary/50">
              <Link to="/marketplace" className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                전략·EA 데모 보기
              </Link>
            </Button>
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
