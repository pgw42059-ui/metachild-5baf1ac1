import { Bell, Server, Settings, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const updates = [
  {
    type: "strategy",
    icon: Settings,
    title: "NQ 스캘핑 EA v2.1 패치",
    description: "진입 필터 개선, 뉴스 시간대 자동 스킵",
    date: "2025.01.05",
  },
  {
    type: "broker",
    icon: Server,
    title: "IC Markets 서버 점검 안내",
    description: "1/7 (토) 02:00~04:00 KST 거래 중단",
    date: "2025.01.04",
  },
  {
    type: "system",
    icon: Bell,
    title: "새 백테스트 리포트 양식 적용",
    description: "드로우다운 시각화 및 월별 분석 추가",
    date: "2025.01.02",
  },
];

const typeColors: Record<string, string> = {
  strategy: "bg-primary/10 text-primary",
  broker: "bg-amber-500/10 text-amber-400",
  system: "bg-blue-500/10 text-blue-400",
};

export function UpdatesLogSection() {
  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground">
            운영 공지 & 업데이트
          </h2>
          <Link
            to="/updates"
            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
          >
            전체보기
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {updates.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-4 hover:border-primary/20 transition-all"
            >
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${typeColors[item.type]}`}>
                  <item.icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-sm font-medium text-foreground truncate">
                      {item.title}
                    </h3>
                    <span className="text-[10px] text-muted-foreground shrink-0">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
