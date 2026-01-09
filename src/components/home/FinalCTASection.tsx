import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  return (
    <section className="py-16 border-t border-border">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Trust message */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span className="text-sm">
              과장 없이, 구조와 원리를 설명합니다
            </span>
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
            어디서부터 시작해야 할지 모르겠다면
          </h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-lg mx-auto">
            MT5가 처음이든, 이미 사용 중이든, 자동매매를 검토 중이든
            <br />
            당신의 단계에 맞는 콘텐츠가 준비되어 있습니다.
          </p>

          <Button asChild size="lg" className="gap-2">
            <Link to="/start">
              시작 페이지로 이동
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>

          <p className="text-xs text-muted-foreground mt-6">
            무료 가이드와 도구를 먼저 확인하고, 필요하면 다음 단계로 진행하세요.
          </p>
        </div>
      </div>
    </section>
  );
}
