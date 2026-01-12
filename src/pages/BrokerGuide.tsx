import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SubNavigation } from "@/components/SubNavigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Zap, 
  DollarSign, 
  Clock, 
  AlertTriangle,
  TrendingUp,
  Minus,
  Moon,
  ExternalLink,
  Info,
  XCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const selectionCriteria = [
  {
    icon: Zap,
    title: "체결 안정성",
    description: "슬리피지 발생 빈도, 주문 반응 속도, 리쿼트(재호가) 빈도를 확인하세요. 빠른 시장에서 체결 품질은 손익에 직접 영향을 줍니다."
  },
  {
    icon: DollarSign,
    title: "스프레드 및 거래 비용",
    description: "표면 스프레드뿐 아니라 수수료, 스왑 비용까지 종합적으로 비교하세요. 거래 횟수가 많을수록 비용 차이가 누적됩니다."
  },
  {
    icon: Clock,
    title: "거래 가능 시간",
    description: "야간 세션, 주말 거래 지원 여부를 확인하세요. 주요 경제 이벤트가 장외 시간에 발생하면 대응이 어려울 수 있습니다."
  },
  {
    icon: AlertTriangle,
    title: "과도한 레버리지 유도 여부",
    description: "1:500 이상의 레버리지를 적극 홍보하는 브로커는 주의하세요. 높은 레버리지는 리스크 관리를 어렵게 만듭니다."
  }
];

const situationGuides = [
  {
    icon: TrendingUp,
    situation: "변동성이 높은 날",
    priority: "체결 안정성이 가장 중요",
    recommendations: [
      "빠른 주문 반응 속도",
      "리쿼트가 적은 환경",
      "슬리피지 관리가 잘 되는 브로커"
    ],
    colorClass: "border-l-orange-500"
  },
  {
    icon: Minus,
    situation: "박스권 / 저변동성 장",
    priority: "스프레드가 핵심",
    recommendations: [
      "좁은 스프레드",
      "낮은 거래 수수료",
      "비용 누적이 적은 환경"
    ],
    colorClass: "border-l-blue-500"
  },
  {
    icon: Moon,
    situation: "야간·주말 대응이 필요한 경우",
    priority: "확장 거래 시간 지원 여부",
    recommendations: [
      "연장 거래 세션 지원",
      "주말 지수 거래 가능 여부",
      "24시간 고객 지원"
    ],
    colorClass: "border-l-purple-500"
  }
];

const brokers = [
  {
    name: "Pepperstone",
    suitable: [
      "나스닥·S&P 단타 위주 거래",
      "변동성이 큰 장에서 빠른 체결이 필요한 경우",
      "짧은 보유 시간 중심 트레이딩"
    ],
    cautions: [
      "스프레드는 평균 수준",
      "장기 보유 시 스왑 비용 발생 가능"
    ],
    notSuitable: [
      "스윙·중장기 위주 트레이더",
      "최소 비용만을 최우선으로 보는 경우"
    ],
    link: "#"
  },
  {
    name: "IC Markets",
    suitable: [
      "낮은 스프레드를 우선시하는 트레이더",
      "EA/알고리즘 트레이딩 사용자",
      "대량 주문을 자주 처리하는 경우"
    ],
    cautions: [
      "교육 자료가 상대적으로 적음",
      "일부 결제 수단 제한"
    ],
    notSuitable: [
      "초보자로서 교육 콘텐츠가 필요한 경우",
      "다양한 입출금 옵션이 중요한 경우"
    ],
    link: "#"
  },
  {
    name: "XM",
    suitable: [
      "입문자, 소액으로 시작하려는 경우",
      "보너스/프로모션 활용을 원하는 경우",
      "한국어 지원이 필요한 경우"
    ],
    cautions: [
      "스프레드가 상대적으로 넓을 수 있음",
      "프로모션 조건을 꼼꼼히 확인 필요"
    ],
    notSuitable: [
      "타이트한 스프레드가 필수인 스캘퍼",
      "고빈도 거래로 비용에 민감한 경우"
    ],
    link: "#"
  },
  {
    name: "EZ Square",
    suitable: [
      "한국어 지원이 필수인 경우",
      "국내 결제 수단을 선호하는 경우",
      "빠른 고객 응대가 중요한 경우"
    ],
    cautions: [
      "글로벌 브로커 대비 상품 라인업이 제한적일 수 있음",
      "스프레드 조건을 직접 비교 확인 필요"
    ],
    notSuitable: [
      "다양한 글로벌 상품 거래가 필요한 경우",
      "해외 브로커 경험이 있고 영어에 익숙한 경우"
    ],
    link: "#"
  }
];

export default function BrokerGuide() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SubNavigation />
      
      <main className="pt-28 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-16">
          <Breadcrumb />
          
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              시장 상황에 따라 달라지는 브로커 선택 가이드
            </h1>
            
            <div className="glass-card p-6 mb-6">
              <p className="text-xl text-foreground font-medium mb-3">
                "브로커는 수익을 만들어주지 않습니다.
                <br />
                하지만 잘못된 브로커는 손실을 키울 수 있습니다."
              </p>
              <p className="text-muted-foreground">
                이 페이지는 특정 브로커를 추천하지 않습니다. 
                시장 상황에 따른 거래 환경 선택 기준을 안내하여, 
                스스로 판단할 수 있도록 돕습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Selection Criteria Section */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            브로커 선택의 기준
          </h2>
          
          <div className="grid gap-4 md:grid-cols-2">
            {selectionCriteria.map((criteria, index) => (
              <Card key={index} className="glass-card border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <criteria.icon className="w-5 h-5 text-primary" />
                    </div>
                    {criteria.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {criteria.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Situation Guide Section */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            상황별 브로커 환경 가이드
          </h2>
          
          <div className="grid gap-4 md:grid-cols-3">
            {situationGuides.map((guide, index) => (
              <Card 
                key={index} 
                className={`glass-card border-l-4 ${guide.colorClass}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <guide.icon className="w-5 h-5 text-primary" />
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">
                      {guide.situation}
                    </span>
                  </div>
                  <CardTitle className="text-base text-foreground">
                    {guide.priority}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {guide.recommendations.map((rec, recIndex) => (
                      <li 
                        key={recIndex}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">→</span>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Broker Cards Section */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            주요 브로커 살펴보기
          </h2>
          <p className="text-muted-foreground mb-6">
            순위나 점수 없이, 각 브로커의 특성만 정리했습니다. 선택은 본인의 거래 스타일에 맞게 하세요.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2">
            {brokers.map((broker, index) => (
              <Card key={index} className="glass-card">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-foreground">
                    {broker.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  {/* Suitable cases */}
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">
                      이 브로커가 적합한 경우
                    </p>
                    <ul className="space-y-1.5">
                      {broker.suitable.map((item, itemIndex) => (
                        <li 
                          key={itemIndex}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Cautions */}
                  <div>
                    <p className="text-sm font-medium text-orange-400 mb-2 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      주의할 점
                    </p>
                    <ul className="space-y-1.5">
                      {broker.cautions.map((item, itemIndex) => (
                        <li 
                          key={itemIndex}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-orange-400">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Not suitable */}
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-1.5">
                      <XCircle className="w-3.5 h-3.5" />
                      이런 분들께는 맞지 않을 수 있습니다
                    </p>
                    <ul className="space-y-1.5">
                      {broker.notSuitable.map((item, itemIndex) => (
                        <li 
                          key={itemIndex}
                          className="text-sm text-muted-foreground/70 flex items-start gap-2"
                        >
                          <span className="text-muted-foreground/50">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full mt-3"
                    asChild
                  >
                    <a href={broker.link} target="_blank" rel="noopener noreferrer">
                      공식 사이트에서 거래 조건 확인
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Affiliate Disclosure */}
        <section className="container mx-auto px-4">
          <div className="glass-card p-4 flex items-start gap-3 max-w-2xl">
            <Info className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              본 페이지의 일부 링크는 제휴 링크를 포함할 수 있으며, 
              이용자에게 추가 비용을 발생시키지 않습니다. 
              제휴 여부와 관계없이 정보의 객관성을 유지하고자 노력합니다.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
