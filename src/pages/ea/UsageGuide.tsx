import { Settings, Download, Play, AlertTriangle } from "lucide-react";

const EAUsageGuide = () => {
  const steps = [
    {
      icon: Download,
      title: "1. EA 파일 다운로드",
      description: "MQL5 마켓에서 원하는 EA를 다운로드합니다. 무료 EA는 바로 사용 가능하며, 유료 EA는 구매 후 다운로드됩니다."
    },
    {
      icon: Settings,
      title: "2. MT5에 설치",
      description: "MT5 > 파일 > 데이터 폴더 열기 > MQL5 > Experts 폴더에 EA 파일(.ex5)을 복사합니다."
    },
    {
      icon: Play,
      title: "3. EA 실행",
      description: "MT5 네비게이터에서 EA를 차트에 드래그하고, 자동매매 버튼을 활성화합니다."
    }
  ];

  return (
    <div className="container px-4 py-8 max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
        EA 사용 가이드
      </h1>
      <p className="text-muted-foreground mb-8">
        Expert Advisor(EA) 설치부터 실행까지의 과정을 안내합니다.
      </p>

      {/* Warning */}
      <div className="glass-card p-4 border border-yellow-500/30 bg-yellow-500/5 mb-8">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground mb-1">실전 적용 전 반드시</p>
            <p className="text-xs text-muted-foreground">
              데모 계좌에서 최소 2주 이상 테스트 후 실계좌에 적용하세요. 
              소액으로 시작하여 EA 동작을 충분히 이해한 후 자본을 늘리는 것을 권장합니다.
            </p>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="glass-card p-6 border border-border/50">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Settings Section */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-foreground mb-4">주요 설정 항목</h2>
        <div className="glass-card p-6 border border-border/50">
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary font-medium shrink-0">Lot Size:</span>
              <span>거래 수량. 계좌 크기와 리스크에 맞게 설정</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-medium shrink-0">Stop Loss:</span>
              <span>손절 가격. 반드시 설정하여 리스크 관리</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-medium shrink-0">Take Profit:</span>
              <span>익절 가격. 목표 수익 도달 시 자동 청산</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-medium shrink-0">Magic Number:</span>
              <span>EA 식별 번호. 여러 EA 사용 시 구분용</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EAUsageGuide;
