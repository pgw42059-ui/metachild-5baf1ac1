import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-2 text-primary mb-4">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">개인정보처리방침</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">
                개인정보처리방침
              </h1>
              
              <div className="prose prose-invert prose-sm max-w-none space-y-6">
                <section>
                  <h2 className="text-lg font-medium text-foreground mb-3">1. 수집하는 개인정보</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    현재 사이트는 회원가입 기능을 제공하지 않으며, 
                    별도의 개인정보를 수집하지 않습니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-medium text-foreground mb-3">2. 쿠키 사용</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    사이트 이용 편의를 위해 쿠키를 사용할 수 있습니다. 
                    쿠키는 브라우저 설정을 통해 거부하실 수 있습니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-medium text-foreground mb-3">3. 제3자 서비스</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    사이트는 분석 도구(예: Google Analytics)를 사용할 수 있으며, 
                    이 경우 해당 서비스의 개인정보처리방침이 적용됩니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-medium text-foreground mb-3">4. 문의</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    개인정보 관련 문의는 support@merini.kr로 연락해 주세요.
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

export default Privacy;
