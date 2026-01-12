import { Shield, ArrowLeft, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const topics = [
  {
    title: "포지션 사이징",
    content: "한 번의 거래에서 얼마를 걸 것인가? 계좌의 1~2%를 넘기지 않는 것이 일반적인 원칙입니다.",
  },
  {
    title: "드로우다운 관리",
    content: "연속 손실이 발생할 때 계좌가 얼마나 하락하는지를 측정합니다. 최대 드로우다운을 미리 설정하고 관리하세요.",
  },
  {
    title: "자본 보호 규칙",
    content: "일일 손실 한도, 주간 손실 한도를 설정합니다. 한도에 도달하면 거래를 중단합니다.",
  },
  {
    title: "복리의 함정",
    content: "복리 효과는 양날의 검입니다. 손실도 복리로 쌓입니다. 과도한 레버리지는 계좌를 빠르게 소진시킵니다.",
  },
];

const Risk = () => {
  return (
    <>
        {/* Hero */}
        <section className="py-16 border-b border-border/50">
          <div className="container px-4">
            <div className="max-w-2xl">
              <Link
                to="/education"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                교육 센터
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                  STEP 3
                </span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  45분
                </div>
              </div>
              <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                리스크 관리
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                포지션 사이징, 드로우다운 관리, 자본 보호 규칙을 배웁니다.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto space-y-8">
              {topics.map((topic, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-border/50 bg-card/30">
                  <h2 className="text-lg font-medium text-foreground mb-3">{topic.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{topic.content}</p>
                </div>
              ))}

              {/* Next Step */}
              <div className="pt-8 border-t border-border">
                <Link
                  to="/guide/mt5-pc"
                  className="group flex items-center justify-between p-4 rounded-xl border border-border/50 bg-card/30 hover:border-primary/30 transition-all"
                >
                  <div>
                    <span className="text-xs text-muted-foreground">다음 단계</span>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      STEP 4: 자동매매 실행 (MT5 설정)
                    </p>
                  </div>
                  <ArrowLeft className="w-4 h-4 text-muted-foreground rotate-180 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default Risk;
