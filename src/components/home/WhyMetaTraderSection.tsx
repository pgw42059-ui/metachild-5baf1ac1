import { Globe, Code, BarChart3 } from "lucide-react";

const reasons = [
  {
    icon: Globe,
    text: "전 세계에서 가장 널리 사용되는 트레이딩 플랫폼",
  },
  {
    icon: Code,
    text: "자동매매(EA) 개발과 백테스트가 가능한 구조",
  },
  {
    icon: BarChart3,
    text: "다양한 브로커와 연동되는 표준화된 환경",
  },
];

export function WhyMetaTraderSection() {
  return (
    <section className="py-12 border-t border-border">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2">
            왜 메타트레이더(MT5)인가?
          </h2>
          <p className="text-sm text-muted-foreground mb-8">
            MetaTrader 5는 MetaQuotes에서 개발한 무료 트레이딩 플랫폼입니다
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {reasons.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-3 p-4 rounded-lg bg-secondary/30"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground text-center leading-relaxed">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            본 사이트는 MetaQuotes와 제휴 관계가 없습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
