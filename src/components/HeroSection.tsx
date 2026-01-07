import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Heavy Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Trading background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 chart-grid opacity-5" />

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Target Audience - 누가 봐야 하는지 */}
          <p className="text-sm text-muted-foreground mb-6">
            EA를 돌려봤지만 왜 되는지 모르겠다면, 여기서 시작하세요.
          </p>

          {/* Main Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-5 leading-tight text-foreground">
            MT5는 차트툴이 아닙니다.
            <br />
            <span className="text-muted-foreground">실행 환경입니다.</span>
          </h1>

          {/* Subheading */}
          <p className="text-base text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed">
            설정법이 아닌 구조를, 수익률이 아닌 통제를 다룹니다.
            <br />
            EA가 작동하는 원리부터 시작하세요.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="hero" size="xl">
              <Link to="/education">
                MT5 구조 가이드 무료로 받기
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm" className="text-muted-foreground">
              <Link to="/marketplace">
                EA 비교하기
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
