import { Link } from "react-router-dom";
import { BookOpen, Download, Menu, X, Globe, Bot, FileText, ChevronDown, Monitor, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import brandLogo from "@/assets/brand-logo.png";

const navItems = [
  { label: "교육 센터", href: "/education", icon: BookOpen },
  { label: "EA 마켓", href: "/marketplace", icon: Bot },
  { label: "무료 자료", href: "/resources", icon: Download },
  { label: "커뮤니티", href: "/community", icon: Globe },
];

const guideItems = [
  { label: "MT5 가이드 (PC)", href: "/guide/mt5-pc", icon: Monitor },
  { label: "MT5 가이드 (Mobile)", href: "/guide/mt5-mobile", icon: Smartphone },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [guideDropdownOpen, setGuideDropdownOpen] = useState(false);
  const [mobileGuideOpen, setMobileGuideOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass-card border-t-0 rounded-t-none">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={brandLogo} alt="메린이 로고" className="w-8 h-8" />
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold text-foreground">메린이</span>
                <span className="text-[10px] text-muted-foreground tracking-wide">META Child</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {/* Guide Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setGuideDropdownOpen(true)}
                onMouseLeave={() => setGuideDropdownOpen(false)}
              >
                <button
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
                >
                  <FileText className="w-4 h-4" />
                  <span>가이드</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${guideDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                {guideDropdownOpen && (
                  <div className="absolute top-full left-0 pt-1 min-w-[200px]">
                    <div className="bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                      {guideItems.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="flex items-center gap-3 px-4 py-2.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
                        >
                          <item.icon className="w-4 h-4" />
                          <span className="text-sm">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button asChild variant="hero" size="sm">
                <Link to="/consult">무료 상담</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border animate-fade-in">
              <nav className="flex flex-col gap-2">
                {/* Mobile Guide Accordion */}
                <div>
                  <button
                    onClick={() => setMobileGuideOpen(!mobileGuideOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5" />
                      <span>가이드</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileGuideOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {mobileGuideOpen && (
                    <div className="ml-4 mt-1 border-l border-border/50 pl-4 space-y-1">
                      {guideItems.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <item.icon className="w-4 h-4" />
                          <span className="text-sm">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                ))}
                <div className="pt-2">
                  <Button asChild variant="hero" className="w-full">
                    <Link to="/consult" onClick={() => setMobileMenuOpen(false)}>
                      무료 상담
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
