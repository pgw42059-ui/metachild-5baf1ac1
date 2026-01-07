import { TrendingUp, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  서비스: [
    { label: "교육 센터", href: "/education" },
    { label: "EA 구독하기", href: "/marketplace" },
    { label: "무료 자료실", href: "/resources" },
    { label: "VIP 서비스", href: "/vip" },
  ],
  정보: [
    { label: "이용약관", href: "/terms" },
    { label: "개인정보처리방침", href: "/privacy" },
    { label: "블로그", href: "/blog" },
    { label: "유튜브", href: "https://youtube.com", external: true },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-semibold text-foreground">메린이</span>
                <span className="text-[10px] text-muted-foreground tracking-wider">META Child</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm mb-4 max-w-md">
              메타트레이더의 모든 것. 설정이 아닌 구조로,
              차트가 아닌 실행 환경으로 접근합니다.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:support@merini.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                support@merini.com
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                카카오톡 상담
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 메린이 (META Child). All rights reserved.
            </p>
          </div>
          <p className="text-xs text-muted-foreground text-center bg-secondary/30 rounded-lg p-3">
            ⚠️ 투자 위험 고지: 본 서비스는 투자 조언이 아니며, 모든 투자 결정과 손실은 투자자 본인의 책임입니다. 과거 수익률이 미래 수익을 보장하지 않습니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
