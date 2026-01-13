import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoMark from "@/assets/logo-mark.png";
import { cn } from "@/lib/utils";

// 5개 대분류 메뉴 - 사이트 지도 역할
const mainCategories = [
  { 
    label: "Home", 
    href: "/",
    matchPaths: ["/", "/gateway", "/start", "/about"]
  },
  { 
    label: "Markets", 
    href: "/markets",
    matchPaths: ["/markets"]
  },
  { 
    label: "EA", 
    href: "/ea",
    matchPaths: ["/ea"]
  },
  { 
    label: "Brokers", 
    href: "/brokers",
    matchPaths: ["/brokers"]
  },
  { 
    label: "Guides", 
    href: "/guides",
    matchPaths: ["/guides"]
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // 현재 경로가 어떤 대분류에 속하는지 확인
  const isActiveCategory = (category: typeof mainCategories[0]) => {
    if (category.href === "/" && location.pathname === "/") {
      return true;
    }
    if (category.href !== "/") {
      return category.matchPaths.some(path => 
        location.pathname === path || location.pathname.startsWith(path + "/")
      );
    }
    return category.matchPaths.some(path => 
      path !== "/" && (location.pathname === path || location.pathname.startsWith(path + "/"))
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src={logoMark} alt="메린이 로고" className="h-7 w-auto" />
              <span className="text-base font-semibold text-foreground">메린이</span>
            </Link>

            {/* Desktop Navigation - 대분류 메뉴 */}
            <nav className="hidden md:flex items-center">
              {mainCategories.map((category) => {
                const isActive = isActiveCategory(category);
                return (
                  <Link
                    key={category.href}
                    to={category.href}
                    className={cn(
                      "relative px-5 py-4 text-sm font-medium transition-colors",
                      isActive 
                        ? "text-foreground" 
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {category.label}
                    {/* 현재 위치 강조 - 하단 인디케이터 */}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* 빈 공간 - 균형 맞춤 */}
            <div className="hidden md:block w-20" />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-3 border-t border-border animate-fade-in">
              <nav className="flex flex-col">
                {mainCategories.map((category) => {
                  const isActive = isActiveCategory(category);
                  return (
                    <Link
                      key={category.href}
                      to={category.href}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors",
                        isActive 
                          ? "text-foreground bg-secondary/50" 
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{category.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
