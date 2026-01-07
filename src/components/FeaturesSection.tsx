import { 
  TrendingUp, 
  BookOpen, 
  Download, 
  Crown,
  ArrowRight,
  BarChart3,
  Bot,
  GraduationCap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: GraduationCap,
    title: "체계적인 교육",
    description: "MT5 기초부터 고급 EA 개발까지, 단계별로 배우는 완벽한 커리큘럼",
    link: "/education",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Bot,
    title: "검증된 EA",
    description: "실전 백테스트와 포워드 테스트를 거친 수익성 높은 EA 제공",
    link: "/marketplace",
    color: "from-primary to-accent",
  },
  {
    icon: Download,
    title: "무료 자료실",
    description: "유용한 인디케이터와 스크립트를 무료로 다운로드하세요",
    link: "/resources",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Crown,
    title: "VIP 서비스",
    description: "1:1 맞춤 세팅 지원과 커스텀 EA 제작 서비스",
    link: "/vip",
    color: "from-amber-500 to-orange-500",
  },
];

export function FeaturesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-hero-glow opacity-30" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">모든 것을</span> 한 곳에서
          </h2>
          <p className="text-muted-foreground text-lg">
            MT5 자동매매에 필요한 모든 것을 제공합니다
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="group glass-card-hover p-6 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-full h-full text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm flex-grow">
                {feature.description}
              </p>

              {/* Link Arrow */}
              <div className="flex items-center gap-2 mt-4 text-primary text-sm font-medium">
                <span>자세히 보기</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-primary" />
              <div className="text-left">
                <p className="font-semibold">시작이 막막하신가요?</p>
                <p className="text-sm text-muted-foreground">무료 상담으로 시작해보세요</p>
              </div>
            </div>
            <Button variant="hero">
              무료 상담 신청
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
