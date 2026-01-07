import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, ExternalLink, Shield, BarChart3, AlertTriangle } from "lucide-react";

const eaList = [
  {
    name: "Grid Master",
    type: "그리드",
    description: "변동성 구간에서 작동하는 그리드 전략. 횡보장 특화.",
    riskNote: "추세장에서 드로우다운 주의",
    backtestYears: 10,
    mqlLink: "#",
  },
  {
    name: "Trend Follower",
    type: "추세추종",
    description: "명확한 추세에서만 진입. 횡보장에서는 대기합니다.",
    riskNote: "거래 빈도 낮음, 인내 필요",
    backtestYears: 8,
    mqlLink: "#",
  },
  {
    name: "Scalp Engine",
    type: "스캘핑",
    description: "단기 변동성 포착. 빠른 진입과 청산.",
    riskNote: "스프레드와 슬리피지에 민감",
    backtestYears: 5,
    mqlLink: "#",
  },
];

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 border-b border-border/50">
          <div className="container px-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-primary mb-4">
                <Bot className="w-5 h-5" />
                <span className="text-sm font-medium">EA 마켓</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                EA를 팔지 않습니다.
                <br />
                <span className="text-muted-foreground">선택할 수 있게 돕습니다.</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                모든 EA는 MQL 공식 마켓에서 직접 구매합니다.
                <br />
                저희는 백테스트 데이터와 리스크 분석을 제공합니다.
              </p>
            </div>
          </div>
        </section>

        {/* EA List */}
        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {eaList.map((ea, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl border border-border/50 bg-card/30"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-medium text-foreground">
                            {ea.name}
                          </h3>
                          <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                            {ea.type}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {ea.description}
                        </p>
                      </div>
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <BarChart3 className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">
                          백테스트 {ea.backtestYears}년
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <AlertTriangle className="w-4 h-4 text-yellow-500" />
                        <span className="text-muted-foreground">
                          {ea.riskNote}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pt-3 border-t border-border/30">
                      <Button variant="outline" size="sm" className="text-xs">
                        백테스트 보기
                        <ArrowRight className="w-3 h-3" />
                      </Button>
                      <a
                        href={ea.mqlLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                      >
                        MQL 마켓에서 구매
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Notice */}
              <div className="mt-12 p-5 rounded-xl border border-border/50 bg-secondary/20">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">직접 판매하지 않습니다</p>
                    <p className="text-sm text-muted-foreground">
                      모든 EA는 MQL5 공식 마켓에서 구매합니다. 
                      저희는 분석과 교육만 제공하며, 판매 수수료를 받지 않습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;