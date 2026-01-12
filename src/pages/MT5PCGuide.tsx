import { Monitor, ArrowRight, LogIn, LayoutDashboard, BarChart3, ShoppingCart, Settings, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

// Import step images
import step1LoginMenu from "@/assets/mt5-step1-login-menu.png";
import step2Layout from "@/assets/mt5-step2-layout.png";
import step3ChartButtons from "@/assets/mt5-step3-chart-buttons.png";
import step4OrderWindow from "@/assets/mt5-step4-order-window.png";
import step5AutoTrading from "@/assets/mt5-step5-autotrading.png";
import step6Options from "@/assets/mt5-step6-options.png";

const steps = [
  {
    step: 1,
    title: "로그인 & 서버 연결",
    description: "File → Login to Trade Account 메뉴 클릭",
    icon: LogIn,
    image: step1LoginMenu,
    highlight: "Login to Trade Account 선택",
  },
  {
    step: 2,
    title: "화면 구성 파악하기",
    description: "Market Watch, Navigator, Chart 영역 이해",
    icon: LayoutDashboard,
    image: step2Layout,
    highlight: "①② ③ 영역 확인",
  },
  {
    step: 3,
    title: "차트 타입 & 타임프레임",
    description: "캔들스틱 버튼과 시간대 설정",
    icon: BarChart3,
    image: step3ChartButtons,
    highlight: "① 캔들스틱 ② 타임프레임 선택",
  },
  {
    step: 4,
    title: "주문 창 확인 (주의!)",
    description: "주문 화면 구성 - Buy/Sell 클릭 금지",
    icon: AlertTriangle,
    image: step4OrderWindow,
    highlight: "⚠️ 실수 클릭 주의",
    isWarning: true,
  },
  {
    step: 5,
    title: "자동매매 버튼 상태",
    description: "AutoTrading 버튼 - 빨간색 OFF → 초록색 ON",
    icon: Settings,
    image: step5AutoTrading,
    highlight: "초록색 = 활성화",
  },
  {
    step: 6,
    title: "EA 옵션 체크리스트",
    description: "Tools → Options → Expert Advisors 설정",
    icon: Settings,
    image: step6Options,
    highlight: "3가지 체크박스 확인",
  },
];

const relatedItems: RelatedItem[] = [
  {
    title: "MT5 모바일 가이드",
    description: "모바일에서 모니터링하는 방법",
    href: "/guides/mt5-mobile",
  },
  {
    title: "MT5 상세 사용 설명서",
    description: "단계별 상세 클릭 가이드",
    href: "/guides/mt5-manual",
  },
  {
    title: "리스크 관리",
    description: "포지션 사이징과 자본 보호 규칙",
    href: "/guides/risk",
    badge: "STEP 3",
  },
];

const MT5PCGuide = () => {
  return (
    <>
      
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
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              처음 실행부터 차트 설정, 주문까지<br />
              한 단계씩 따라오는 클릭 설명서입니다.
            </p>
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
            <div className="space-y-6">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className={`group rounded-2xl border overflow-hidden ${
                    item.isWarning 
                      ? 'border-destructive/40 bg-destructive/5' 
                      : 'border-border/60 bg-secondary/20'
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 p-5 border-b border-border/30">
                    {/* Step Number */}
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm flex-shrink-0 ${
                      item.isWarning 
                        ? 'bg-destructive text-destructive-foreground' 
                        : 'bg-primary text-primary-foreground'
                    }`}>
                      {item.step}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <item.icon className={`w-4 h-4 ${item.isWarning ? 'text-destructive' : 'text-primary'}`} />
                        <h3 className="font-semibold text-foreground">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>

                    {/* Highlight Badge */}
                    <span className={`hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      item.isWarning 
                        ? 'bg-destructive/20 text-destructive' 
                        : 'bg-primary/10 text-primary'
                    }`}>
                      {item.highlight}
                    </span>
                  </div>
                  
                  {/* Image */}
                  <div className="p-4 bg-black/90">
                    <img 
                      src={item.image} 
                      alt={`Step ${item.step}: ${item.title}`}
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Related Content */}
            <RelatedContent items={relatedItems} />
          </div>
        </div>
      </section>
    </>
  );
};

export default MT5PCGuide;
