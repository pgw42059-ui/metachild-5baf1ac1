import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export type CategoryType = "today" | "markets" | "brokers" | "guides";

// 대분류별 중분류 메뉴 정의
const subNavigationMap: Record<CategoryType, { label: string; href: string }[]> = {
  today: [
    { label: "오늘의 시장 요약", href: "/today" },
    { label: "오늘의 핵심 경고", href: "/today#warning" },
  ],
  markets: [
    { label: "Top 6 Dashboard", href: "/markets/overview" },
    { label: "Nasdaq", href: "/markets/nasdaq" },
    { label: "S&P 500", href: "/markets/sp500" },
    { label: "Oil", href: "/markets/oil" },
    { label: "Gold", href: "/markets/gold" },
    { label: "Rates", href: "/markets/rates" },
  ],
  brokers: [
    { label: "브로커 선택 기준", href: "/brokers#criteria" },
    { label: "시장 상황별 가이드", href: "/brokers#market-guide" },
    { label: "브로커 리스트", href: "/brokers#list" },
  ],
  guides: [
    { label: "초보자 가이드", href: "/guides" },
    { label: "거래 환경 이해", href: "/guides/mt5-pc" },
    { label: "리스크 관리", href: "/guides/risk" },
  ],
};

interface CategorySubNavProps {
  category: CategoryType;
}

export function CategorySubNav({ category }: CategorySubNavProps) {
  const location = useLocation();
  const subItems = subNavigationMap[category];

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
