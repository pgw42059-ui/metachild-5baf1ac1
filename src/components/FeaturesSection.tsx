import { 
  Download, 
  Crown,
  ArrowRight,
  Bot,
  GraduationCap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: GraduationCap,
    title: "체계적인 교육",
    description: "Level 0부터 시작. MT5가 '실행 환경'인 이유부터 설명합니다.",
    link: "/education",
  },
  {
    icon: Bot,
    title: "검증된 EA",
    description: "MQL 공식 마켓 연동. 백테스트 10년치 공개.",
    link: "/marketplace",
  },
  {
    icon: Download,
    title: "무료 자료실",
    description: "실전 검증된 지표 무료 배포. 바로 사용 가능.",
    link: "/resources",
  },
  {
    icon: Crown,
    title: "VIP 서비스",
    description: "1:1 세팅 지원. EA 개발 의뢰 가능.",
    link: "/vip",
  },
];

export function FeaturesSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container relative z-10 px-4">
        {/* Section Header - simple */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-foreground">
            어떻게 다른가?
          </h2>
          <p className="text-muted-foreground">
            MT5를 단순한 차트툴이 아닌 실행 환경으로 이해합니다
          </p>
        </div>

        {/* Feature Cards - simplified */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="group p-5 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 transition-colors"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Link Arrow */}
              <div className="flex items-center gap-1.5 mt-4 text-primary text-sm">
                <span>자세히</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA - simplified */}
        <div className="text-center mt-14">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 rounded-xl border border-border/50 bg-card/30">
            <p className="text-sm text-muted-foreground">처음이신가요?</p>
            <Button variant="outline" size="sm">
              무료 가이드 받기
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
