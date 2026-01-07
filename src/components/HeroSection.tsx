import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Shield, GraduationCap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "500+", label: "활성 사용자" },
  { value: "95%", label: "교육 만족도" },
  { value: "24/7", label: "자동 매매" },
];

const features = [
  { icon: TrendingUp, label: "검증된 10년 백테스트" },
  { icon: Shield, label: "안전한 리스크 관리" },
  { icon: GraduationCap, label: "초보자 친화적 교육" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Trading background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-hero-glow" />
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 chart-grid opacity-20" />

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-profit animate-pulse" />
            <span className="text-sm text-muted-foreground">
              🟢 메타트레이더의 모든 것
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            메타트레이더(MT4/MT5)를{" "}
            <br className="hidden md:block" />
            <span className="text-gradient glow-text">'설정'이 아니라 '구조'</span>로 이해하다
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            틱 데이터부터 리스크 관리까지 실전에서 작동 가능한 자동매매 환경을 만듭니다.
            <br className="hidden md:block" />
            차트툴이 아니라 '실행 환경'으로 접근합니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              📚 무료 가이드 시작
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="glass" size="xl">
              EA 둘러보기
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border"
              >
                <feature.icon className="w-4 h-4 text-primary" />
                <span className="text-sm">{feature.label}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: "0.5s" }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
