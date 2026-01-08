import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MessageCircle, Mail, Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Consult = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 border-b border-border/50">
          <div className="container px-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-primary mb-4">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-medium">무료 상담</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                1:1 무료 상담 신청
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                시스템 트레이딩, MT5 설정, EA 관련 궁금한 점을 물어보세요.
              </p>
            </div>
          </div>
        </section>

        {/* Consult Options */}
        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-xl mx-auto space-y-6">
              {/* Kakao */}
              <div className="p-6 rounded-xl border border-border/50 bg-card/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">카카오톡 상담</h3>
                    <p className="text-xs text-muted-foreground">빠른 응답 (영업일 기준)</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  실시간 채팅으로 궁금한 점을 바로 물어보세요.
                </p>
                <span className="text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded">
                  준비중
                </span>
              </div>

              {/* Email */}
              <div className="p-6 rounded-xl border border-border/50 bg-card/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">이메일 상담</h3>
                    <p className="text-xs text-muted-foreground">상세한 질문에 적합</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  복잡한 설정이나 전략 관련 질문은 이메일로 보내주세요.
                </p>
                <Button asChild variant="outline" size="sm">
                  <a href="mailto:support@merini.kr">
                    support@merini.kr
                  </a>
                </Button>
              </div>

              {/* Notice */}
              <div className="p-5 rounded-xl border border-amber-500/30 bg-amber-500/5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground mb-1">상담 안내</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 투자 자문, 종목 추천, 수익 보장은 하지 않습니다.</li>
                      <li>• 기술적 질문(MT5 설정, EA 사용법 등)에 답변합니다.</li>
                      <li>• 응답까지 1~3 영업일이 소요될 수 있습니다.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Consult;
