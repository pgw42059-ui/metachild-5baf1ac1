import { TrendingUp, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  서비스: [
    { label: "교육 콘텐츠", href: "/education" },
    { label: "EA 마켓플레이스", href: "/marketplace" },
    { label: "무료 자료실", href: "/resources" },
    { label: "VIP 서비스", href: "/vip" },
  ],
  정보: [
    { label: "이용약관", href: "/terms" },
    { label: "개인정보처리방침", href: "/privacy" },
    { label: "자주 묻는 질문", href: "/faq" },
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
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-gradient">MT5 Pro</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4 max-w-md">
              MT5 자동매매의 모든 것. 검증된 EA와 체계적인 교육으로 
              여러분의 트레이딩을 한 단계 업그레이드하세요.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:support@mt5pro.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                support@mt5pro.com
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
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 MT5 Pro. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            투자에는 원금 손실 위험이 있습니다. 신중한 투자 결정을 하시기 바랍니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
