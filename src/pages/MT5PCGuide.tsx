import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Monitor, Smartphone, ArrowRight, Download, LogIn, LayoutDashboard, BarChart3, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    step: 1,
    title: "MT5 설치하기",
    description: "공식 다운로드 및 설치 과정",
    icon: Download,
  },
  {
    step: 2,
    title: "로그인 & 서버 연결",
    description: "계정 정보 입력과 서버 선택",
    icon: LogIn,
  },
  {
    step: 3,
    title: "화면 구성 정리",
    description: "필요한 창만 남기고 정리하기",
    icon: LayoutDashboard,
  },
  {
    step: 4,
    title: "차트 열기 & 설정",
    description: "심볼 선택, 캔들스틱, 타임프레임",
    icon: BarChart3,
  },
  {
    step: 5,
    title: "주문 화면 이해하기",
    description: "주문 창 구성과 주의사항",
    icon: ShoppingCart,
  },
];

const MT5PCGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm mb-6">
              <Monitor className="w-4 h-4" />
              PC 버전
            </div>
            
            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              MT5 PC 사용 가이드
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              처음 실행부터 차트 설정, 주문까지<br />
              한 단계씩 따라오는 클릭 설명서입니다.
            </p>
            
            {/* Mobile Guide Link */}
            <Link 
              to="/guide/mt5-mobile" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Smartphone className="w-4 h-4" />
              모바일 가이드 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* Step-based Guide Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                단계별 가이드
              </h2>
              <p className="text-muted-foreground">
                각 단계를 클릭해서 상세 내용을 확인하세요
              </p>
            </div>

            {/* Step Cards */}
            <div className="space-y-4">
              {steps.map((item) => (
                <a
                  key={item.step}
                  href={`#step-${item.step}`}
                  className="group block"
                >
                  <div className="flex items-center gap-5 p-5 rounded-2xl border border-border/60 bg-secondary/20 hover:bg-secondary/40 hover:border-primary/30 transition-all duration-300">
                    {/* Step Number */}
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg flex-shrink-0">
                      {item.step}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <item.icon className="w-4 h-4 text-primary" />
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Placeholder Image */}
                    <div className="hidden md:flex items-center justify-center w-32 h-20 rounded-lg bg-secondary/60 border border-border/40 flex-shrink-0">
                      <span className="text-xs text-muted-foreground/60">이미지</span>
                    </div>
                    
                    {/* Arrow */}
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <Link to="/guide/mt5-manual">
                <Button variant="hero" size="lg" className="group">
                  상세 가이드 시작하기
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MT5PCGuide;
