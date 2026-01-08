import { Monitor, TrendingUp, ClipboardCheck, FileDown, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const tools = [
  {
    icon: Monitor,
    title: "MT5 설정 가이드",
    description: "PC/Mobile 설치부터 차트 설정까지",
    link: "/guide/mt5-pc",
  },
  {
    icon: TrendingUp,
    title: "TradingView 연동",
    description: "알람 → MT5 자동 주문 연결",
    link: "/resources",
  },
  {
    icon: ClipboardCheck,
    title: "백테스트 체크리스트",
    description: "테스트 전 확인사항 10가지",
    link: "/resources",
  },
];

const downloads = [
  {
    title: "전략 템플릿 (Notion)",
    description: "진입/청산/리스크 정리 양식",
    format: "Notion",
  },
  {
    title: "MT5 차트 프리셋",
    description: "다크 테마 + 인디케이터 세팅",
    format: ".tpl",
  },
  {
    title: "거래 일지 스프레드시트",
    description: "일별 성과 기록 및 분석",
    format: "Excel",
  },
];

export function ToolsResourcesSection() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            도구 & 리소스
          </h2>
          <p className="text-muted-foreground mt-2">
            바로 사용할 수 있는 가이드와 템플릿
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Tools */}
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">
              Quick Start 가이드
            </h3>
            <div className="space-y-3">
              {tools.map((tool, idx) => (
                <Link
                  key={idx}
                  to={tool.link}
                  className="group flex items-center gap-4 glass-card p-4 hover:border-primary/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <tool.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {tool.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {tool.description}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Downloads */}
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">
              다운로드
            </h3>
            <div className="space-y-3">
              {downloads.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-4 glass-card p-4 hover:border-primary/30 transition-all cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <FileDown className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-1 rounded bg-muted text-muted-foreground">
                    {item.format}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
