import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

// 대분류별 중분류 메뉴 정의
const subNavigationMap: Record<string, { label: string; href: string }[]> = {
  today: [
    { label: "오늘의 시장 요약", href: "/dashboard" },
    { label: "오늘의 핵심 경고", href: "/dashboard#warning" },
  ],
  markets: [
    { label: "Top 6 Dashboard", href: "/dashboard" },
    { label: "Nasdaq", href: "/dashboard#nasdaq" },
    { label: "S&P 500", href: "/dashboard#sp500" },
    { label: "Oil", href: "/dashboard#oil" },
    { label: "Gold", href: "/dashboard#gold" },
    { label: "Rates", href: "/dashboard#rates" },
  ],
  brokers: [
    { label: "브로커 선택 기준", href: "/broker-guide#criteria" },
    { label: "시장 상황별 가이드", href: "/broker-guide#market-guide" },
    { label: "브로커 리스트", href: "/broker-guide#list" },
  ],
  guides: [
    { label: "초보자 가이드", href: "/education" },
    { label: "거래 환경 이해", href: "/guide/mt5-pc" },
    { label: "리스크 관리", href: "/education/risk" },
  ],
};

// 경로에 따른 현재 대분류 결정
function getCurrentCategory(pathname: string): string | null {
  if (pathname === "/dashboard") return "today";
  if (pathname.startsWith("/broker-guide")) return "brokers";
  if (
    pathname.startsWith("/education") ||
    pathname.startsWith("/guide") ||
    pathname.startsWith("/resources") ||
    pathname.startsWith("/roadmap")
  ) {
    return "guides";
  }
  return null;
}

export function SubNavigation() {
  const location = useLocation();
  const currentCategory = getCurrentCategory(location.pathname);

  // 대분류에 해당하지 않으면 서브 네비 표시 안 함
  if (!currentCategory || !subNavigationMap[currentCategory]) {
    return null;
  }

  const subItems = subNavigationMap[currentCategory];

  // 현재 활성화된 항목 확인
  const isActive = (href: string) => {
    const [path, hash] = href.split("#");
    if (hash) {
      return location.pathname === path && location.hash === `#${hash}`;
    }
    return location.pathname === path && !location.hash;
  };

  return (
    <div className="fixed top-14 left-0 right-0 z-40 bg-background/90 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-2">
          {subItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "shrink-0 px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap",
                  active
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
