import { AlertTriangle, ShieldAlert, FileWarning } from "lucide-react";

const disclaimers = [
  {
    icon: ShieldAlert,
    title: "투자 조언 아님",
    description: "본 사이트의 모든 콘텐츠는 정보 제공 목적이며, 개인화된 투자 조언이 아닙니다.",
  },
  {
    icon: AlertTriangle,
    title: "성과 보장 없음",
    description: "과거 백테스트 결과와 실거래 성과는 미래 수익을 보장하지 않습니다.",
  },
  {
    icon: FileWarning,
    title: "백테스트 조건 명시",
    description: "모든 전략의 백테스트 조건(기간, 스프레드, 슬리피지)은 해당 문서에 명시되어 있습니다.",
  },
];

export function TrustDisclaimerSection() {
  return (
    <section className="py-12 border-t border-border">
      <div className="container px-4">
        <div className="glass-card p-6 md:p-8 bg-destructive/5 border-destructive/10">
          <div className="text-center mb-6">
            <h2 className="text-lg font-semibold text-foreground mb-1">
              투자 위험 고지
            </h2>
            <p className="text-sm text-muted-foreground">
              시스템 트레이딩은 높은 위험을 수반합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {disclaimers.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                <item.icon className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6 max-w-2xl mx-auto">
            레버리지 거래는 원금 손실 위험이 있습니다. 투자 전 충분한 학습과 데모 거래를 권장하며, 감당 가능한 금액만 투자하세요.
          </p>
        </div>
      </div>
    </section>
  );
}
