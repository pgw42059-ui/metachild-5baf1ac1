import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Heavy Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Trading background"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 chart-grid opacity-10" />

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge - simple */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-secondary/30 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-sm text-muted-foreground">
              메타트레이더의 모든 것
            </span>
          </div>

          {/* Main Heading - simple, no gradient */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-foreground">
            메타트레이더를 제대로 배우는 곳
          </h1>

          {/* Subheading - minimal */}
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            설정 대신 구조를, 감이 아닌 논리를
          </p>

          {/* CTA Buttons - toned down */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              무료 가이드 시작
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              EA 둘러보기
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
