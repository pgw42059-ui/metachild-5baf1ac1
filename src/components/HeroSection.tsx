import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroMain from "@/assets/hero-main.png";
import logoMark from "@/assets/logo-mark.png";

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroMain} 
          alt="시스템 트레이딩 환경" 
          className="w-full h-full object-cover object-right md:object-center"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30 md:to-transparent" />
      </div>

      {/* Subtle logo watermark - top left area */}
      <div className="absolute top-24 left-4 md:left-8 z-10">
        <img 
          src={logoMark} 
          alt="" 
          className="h-10 md:h-12 w-auto opacity-40"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-16">
        <div className="max-w-xl">
          {/* Main Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-foreground">
            메타트레이더 구조를 이해하는
            <br />
            시스템 트레이딩 교육 허브
          </h1>

          {/* Sub Heading */}
          <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
            자동매매 이전에 반드시 알아야 할
            <br />
            구조 · 리스크 · 설계 기준을 정리합니다.
          </p>

          {/* CTA Button */}
          <Button asChild size="lg" className="gap-2">
            <Link to="/start">
              구조부터 배우기
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
