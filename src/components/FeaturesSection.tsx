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
    description: "설치부터 백테스팅까지, '왜 그렇게 되는지' 이해하며 배웁니다",
    link: "/education",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Bot,
    title: "검증된 EA",
    description: "10년 백테스트, MQL 공식 마켓에서 안전하게 구매하세요",
    link: "/marketplace",
    color: "from-primary to-accent",
  },
  {
    icon: Download,
    title: "무료 자료실",
    description: "검증된 지표와 템플릿을 무료로 받아가세요",
    link: "/resources",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Crown,
    title: "VIP 서비스",
    description: "1:1 세팅부터 커스텀 EA 제작까지 완벽 지원",
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
            <span className="text-gradient">왜 메린이</span>인가?
          </h2>
          <p className="text-muted-foreground text-lg">
            MT5를 단순한 차트툴이 아닌 실행 환경으로 이해합니다
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
                <p className="font-semibold">메타트레이더, 어디서부터 시작할까요?</p>
                <p className="text-sm text-muted-foreground">무료 가이드로 첫 걸음을 시작하세요</p>
              </div>
            </div>
            <Button variant="hero">
              무료 가이드 받기
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
