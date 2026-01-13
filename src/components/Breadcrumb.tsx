import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

// Route segment to label mapping
const segmentLabels: Record<string, string> = {
  // Main categories
  "markets": "Markets",
  "ea": "EA",
  "brokers": "Brokers",
  "guides": "Guides",
  
  // Markets sub-routes
  "overview": "Top 6 Dashboard",
  "nasdaq": "Nasdaq",
  "sp500": "S&P 500",
  "oil": "Oil",
  "gold": "Gold",
  "rates": "Rates",
  
  // EA sub-routes
  "usage-guide": "사용 가이드",
  "backtest": "백테스트 가이드",
  
  // Brokers sub-routes
  "criteria": "선택 기준",
  "market-guide": "시장 상황별 가이드",
  "list": "브로커 리스트",
  
  // Guides sub-routes
  "market-basics": "시장 구조 이해",
  "strategy": "전략 구조 학습",
  "risk": "리스크 관리",
  "why-mt5": "왜 MT5인가",
  "before-mt5": "MT5 시작 전 필수 지식",
  "mt5-pc": "MT5 PC 가이드",
  "mt5-mobile": "MT5 모바일 가이드",
  "mt5-manual": "MT5 사용 설명서",
  "resources": "자료실",
  "roadmap": "학습 로드맵",
};

interface BreadcrumbItem {
  label: string;
  path?: string;
}

export function Breadcrumb() {
  const location = useLocation();
  const pathname = location.pathname;
  
  // Don't show breadcrumb on home page
  if (pathname === "/" || pathname === "") {
    return null;
  }
  
  // Split pathname into segments and filter empty ones
  const segments = pathname.split("/").filter(Boolean);
  
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", path: "/" }
  ];
  
  // Build breadcrumb items from path segments
  let currentPath = "";
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const label = segmentLabels[segment] || segment;
    
    // Last segment is current page (no link)
    if (index === segments.length - 1) {
      breadcrumbs.push({ label });
    } else {
      breadcrumbs.push({ label, path: currentPath });
    }
  });
  
  return (
    <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
      {breadcrumbs.map((item, index) => (
        <div key={index} className="flex items-center gap-1.5">
          {index > 0 && (
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />
          )}
          {item.path ? (
            <Link 
              to={item.path} 
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              {index === 0 && <Home className="w-3.5 h-3.5" />}
              <span>{item.label}</span>
            </Link>
          ) : (
            <span className="text-foreground font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
