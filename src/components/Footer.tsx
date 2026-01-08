import { Mail, MessageCircle, Youtube, FileText, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import brandLogo from "@/assets/brand-logo.png";

const quickLinks = [
  { label: "초보자 가이드", href: "/education" },
  { label: "MT5 설치 가이드", href: "/guide/mt5-pc" },
  { label: "전략 라이브러리", href: "/marketplace" },
  { label: "도구 & 리소스", href: "/resources" },
];

const legalLinks = [
  { label: "이용약관", href: "/terms", icon: FileText },
  { label: "개인정보처리방침", href: "/privacy", icon: Shield },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={brandLogo} alt="메린이 로고" className="w-7 h-7" />
              <div className="flex flex-col leading-none">
                <span className="text-lg font-semibold text-foreground">메린이</span>
                <span className="text-[10px] text-muted-foreground tracking-wider">META Child</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              MT5 시스템 트레이딩의 구조와 원리.
              <br />
              실전 데이터 기반 교육 허브.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">빠른 메뉴</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">문의 & 채널</h4>
            <div className="space-y-3">
              <Link
                to="/community"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                카카오톡 오픈채팅
              </Link>
              <Link
                to="/community"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="w-4 h-4" />
                유튜브 채널
              </Link>
              <a
                href="mailto:support@merini.kr"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                support@merini.kr
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © 2025 메린이 (META Child). All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <link.icon className="w-3 h-3" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
