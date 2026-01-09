import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background with subtle grid */}
      <div className="absolute inset-0 chart-grid opacity-[0.03]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
      
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      {/* Content */}
      <div className="container relative z-10 px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-foreground">
            메타트레이더(MT5)를 이해하고 판단하는 곳
          </h1>

          {/* Supporting lines */}
          <p className="text-base md:text-lg text-muted-foreground mb-4 max-w-xl mx-auto leading-relaxed">
            수익을 약속하지 않습니다. 대신 구조와 원리를 설명합니다.
          </p>
          <p className="text-sm text-muted-foreground mb-8 max-w-lg mx-auto">
            설치 방법부터 자동매매 검토까지, 단계별로 정리된 정보를 제공합니다.
          </p>

          {/* CTA Button */}
          <Button asChild size="lg" className="gap-2">
            <Link to="/start">
              시작 페이지로 이동
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
