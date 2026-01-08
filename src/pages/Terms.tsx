import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-2 text-primary mb-4">
                <FileText className="w-5 h-5" />
                <span className="text-sm font-medium">이용약관</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">
                서비스 이용약관
              </h1>
              
              <div className="prose prose-invert prose-sm max-w-none space-y-6">
                <section>
                  <h2 className="text-lg font-medium text-foreground mb-3">제1조 (목적)</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    본 약관은 메린이(이하 "사이트")가 제공하는 서비스의 이용조건 및 절차, 
                    이용자와 사이트의 권리, 의무, 책임사항을 규정함을 목적으로 합니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-medium text-foreground mb-3">제2조 (서비스의 내용)</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    사이트는 MT5 시스템 트레이딩 관련 교육 콘텐츠, 가이드, 도구를 제공합니다. 
                    제공되는 정보는 투자 자문이 아니며, 투자 결정에 대한 책임은 이용자에게 있습니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-medium text-foreground mb-3">제3조 (면책조항)</h2>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• 사이트에서 제공하는 모든 정보는 교육 목적입니다.</li>
                    <li>• 실제 거래로 인한 손실에 대해 사이트는 책임지지 않습니다.</li>
                    <li>• 백테스트 결과는 과거 성과이며 미래 수익을 보장하지 않습니다.</li>
                    <li>• EA(Expert Advisor) 사용으로 인한 결과는 이용자 책임입니다.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-lg font-medium text-foreground mb-3">제4조 (저작권)</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    사이트에 게시된 모든 콘텐츠(텍스트, 이미지, 코드 등)의 저작권은 
                    메린이에 있으며, 무단 복제 및 배포를 금지합니다.
                  </p>
                </section>

                <div className="pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    시행일: 2025년 1월 1일
                  </p>
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

export default Terms;
