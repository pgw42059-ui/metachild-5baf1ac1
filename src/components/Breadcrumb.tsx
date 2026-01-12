import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

// Route to breadcrumb label mapping
const routeLabels: Record<string, string> = {
  // Main categories
  "/today": "Today",
  "/markets": "Markets",
  "/brokers": "Brokers",
  "/guides": "Guides",
  "/guides/resources": "자료실",
  "/guides/roadmap": "학습 로드맵",
  
  // Guides sub-routes
  "/guides/market-basics": "시장 구조 이해",
  "/guides/strategy": "전략 구조 학습",
  "/guides/risk": "리스크 관리",
  "/guides/why-mt5": "왜 MT5인가",
  "/guides/before-mt5": "MT5 시작 전 필수 지식",
  "/guides/mt5-pc": "MT5 PC 가이드",
  "/guides/mt5-mobile": "MT5 모바일 가이드",
  "/guides/mt5-manual": "MT5 사용 설명서",
};

// Category mapping for routes
const categoryMap: Record<string, { path: string; label: string }> = {
  "/today": { path: "/today", label: "Today" },
  "/markets": { path: "/markets", label: "Markets" },
  "/brokers": { path: "/brokers", label: "Brokers" },
  "/guides": { path: "/guides", label: "Guides" },
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
  
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", path: "/" }
  ];
  
  // Find the category for the current path
  const categoryKey = Object.keys(categoryMap).find(key => pathname.startsWith(key));
  
  if (categoryKey) {
    const category = categoryMap[categoryKey];
    
    // Add category if it's not the same as current page
    if (pathname !== category.path) {
      breadcrumbs.push({ label: category.label, path: category.path });
    }
    
    // Add current page
    const currentLabel = routeLabels[pathname] || routeLabels[categoryKey] || pathname.split('/').pop() || '';
    breadcrumbs.push({ label: currentLabel });
  } else {
    // Fallback: just show the current path
    const currentLabel = routeLabels[pathname] || pathname.split('/').pop() || '';
    breadcrumbs.push({ label: currentLabel });
  }
  
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
