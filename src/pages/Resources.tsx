import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Download, FileText, Monitor, TrendingUp, ClipboardCheck, ExternalLink, FileDown, FileSpreadsheet, Palette, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import resourcesData from "@/content/resources.json";

interface GuideItem {
  id: string;
  category: string;
  title: string;
  description: string;
  link: string;
  icon: string;
  isDownload?: boolean;
}

interface DownloadItem {
  id: string;
  category: string;
  title: string;
  description: string;
  format: string;
  link: string;
  icon: string;
  isExternal?: boolean;
  isDownload?: boolean;
}

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  TrendingUp,
  ClipboardCheck,
  FileText,
  FileSpreadsheet,
  Palette,
};

const Resources = () => {
  const guides = resourcesData.guides as GuideItem[];
  const downloads = resourcesData.downloads as DownloadItem[];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 border-b border-border/50">
          <div className="container px-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-primary mb-4">
                <Download className="w-5 h-5" />
                <span className="text-sm font-medium">무료 자료</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                도구 & 리소스 허브
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                바로 사용할 수 있는 가이드, 템플릿, 설정 파일을 제공합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Guides */}
        <section className="py-16">
          <div className="container px-4">
            <h2 className="text-xl font-semibold mb-6 text-foreground">Quick Start 가이드</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {guides.map((guide) => {
                const IconComponent = iconMap[guide.icon] || Monitor;
                
                if (guide.isDownload) {
                  return (
                    <a
                      key={guide.id}
                      href={guide.link}
                      download
                      className="group p-5 rounded-xl border border-border/50 bg-card/30 hover:border-primary/30 transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{guide.description}</p>
                      <div className="mt-3 flex items-center text-xs text-primary">
                        <FileDown className="w-3 h-3 mr-1" /> 다운로드
                      </div>
                    </a>
                  );
                }
                
                return (
                  <Link
                    key={guide.id}
                    to={guide.link}
                    className="group p-5 rounded-xl border border-border/50 bg-card/30 hover:border-primary/30 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{guide.description}</p>
                    <div className="mt-3 flex items-center text-xs text-primary">
                      바로가기 <ExternalLink className="w-3 h-3 ml-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Downloads */}
        <section className="py-16 bg-secondary/20">
          <div className="container px-4">
            <h2 className="text-xl font-semibold mb-6 text-foreground">다운로드</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {downloads.map((item) => {
                const IconComponent = iconMap[item.icon] || FileText;
                
                if (item.isExternal) {
                  return (
                    <a
                      key={item.id}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-5 rounded-xl border border-border/50 bg-card/30 hover:border-primary/30 transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <IconComponent className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono px-2 py-1 rounded bg-muted text-muted-foreground">
                          {item.format}
                        </span>
                        <span className="flex items-center text-xs text-primary">
                          열기 <ExternalLink className="w-3 h-3 ml-1" />
                        </span>
                      </div>
                    </a>
                  );
                }
                
                return (
                  <a
                    key={item.id}
                    href={item.link}
                    download
                    className="group p-5 rounded-xl border border-border/50 bg-card/30 hover:border-primary/30 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2 py-1 rounded bg-muted text-muted-foreground">
                        {item.format}
                      </span>
                      <span className="flex items-center text-xs text-primary">
                        <FileDown className="w-3 h-3 mr-1" /> 다운로드
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-xl mx-auto text-center">
              <h3 className="text-lg font-medium text-foreground mb-3">
                더 많은 자료가 필요하신가요?
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                교육 센터에서 체계적인 시스템 트레이딩 학습을 시작하세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild variant="hero">
                  <Link to="/education">교육 센터 보기</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/consult">무료 상담 신청</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
