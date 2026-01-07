import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, CheckCircle2, ArrowRight, Download, Monitor, Settings, BarChart3, MousePointer, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const WarningBox = ({ children }: { children: React.ReactNode }) => (
  <Alert className="border-yellow-500/50 bg-yellow-500/10 my-4">
    <AlertTriangle className="h-4 w-4 text-yellow-500" />
    <AlertDescription className="text-yellow-200/90">
      {children}
    </AlertDescription>
  </Alert>
);

const StepCard = ({ step, title, icon: Icon, children }: { 
  step: number; 
  title: string; 
  icon: React.ElementType;
  children: React.ReactNode;
}) => (
  <section className="mb-12 scroll-mt-24" id={`step-${step}`}>
    <div className="flex items-center gap-4 mb-6">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 text-primary font-bold text-lg">
        {step}
      </div>
      <div className="flex items-center gap-3">
        <Icon className="w-6 h-6 text-primary" />
        <h2 className="text-xl md:text-2xl font-semibold text-foreground">{title}</h2>
      </div>
    </div>
    <div className="pl-0 md:pl-16 space-y-4 text-muted-foreground leading-relaxed">
      {children}
    </div>
  </section>
);

const ClickStep = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3 py-2">
    <MousePointer className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
    <span>{children}</span>
  </div>
);

const CheckItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3 py-1">
    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
    <span>{children}</span>
  </div>
);

const MT5Manual = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              MT5 사용 설명서 (PC)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              아무것도 모르는 상태에서, 실수 없이 MT5를 실행하기 위한<br />
              최소한의 클릭 가이드입니다.
            </p>
          </div>

          {/* Table of Contents */}
          <nav className="mb-12 p-6 rounded-xl bg-secondary/30 border border-border/40">
            <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">목차</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                "MT5 설치하기",
                "MT5 실행 & 로그인",
                "기본 화면 정리",
                "차트 열기 & 설정",
                "주문 화면 익히기",
                "자동매매 기본 스위치",
                "완료 확인"
              ].map((item, index) => (
                <a 
                  key={index}
                  href={`#step-${index + 1}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  <span className="text-xs text-primary/60">{index + 1}</span>
                  <span>{item}</span>
                </a>
              ))}
            </div>
          </nav>

          {/* Step 0: Before You Start */}
          <section className="mb-12 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="text-lg font-semibold text-foreground mb-3">Step 0: 시작 전 확인</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Windows PC가 있어야 합니다 (Mac은 별도 가이드 필요)</li>
              <li>• 브로커 계정이 이미 있어야 합니다 (계정 개설은 이 가이드 범위 밖)</li>
              <li>• 이메일로 받은 로그인 정보 (계정번호, 비밀번호, 서버명)를 준비하세요</li>
            </ul>
          </section>

          {/* Step 1: Installation */}
          <StepCard step={1} title="MT5 설치하기" icon={Download}>
            <h3 className="text-foreground font-medium mb-2">다운로드 위치</h3>
            <ClickStep>브로커 공식 웹사이트에서 MT5 다운로드 링크를 찾습니다</ClickStep>
            <ClickStep>또는 MetaTrader 5 공식 사이트: metatrader5.com/download</ClickStep>
            
            <h3 className="text-foreground font-medium mt-6 mb-2">설치 방법</h3>
            <ClickStep>다운로드된 mt5setup.exe 파일을 더블클릭합니다</ClickStep>
            <ClickStep>"Next"를 계속 클릭합니다 (설정 변경 불필요)</ClickStep>
            <ClickStep>"Finish"를 클릭하면 MT5가 자동으로 실행됩니다</ClickStep>

            <WarningBox>
              <strong>흔한 실수:</strong> MT4와 MT5는 완전히 다른 프로그램입니다. 
              브로커가 MT5 계정을 제공했다면 반드시 MT5를 설치하세요. 
              MT4를 설치하면 로그인이 되지 않습니다.
            </WarningBox>
          </StepCard>

          {/* Step 2: Launch & Login */}
          <StepCard step={2} title="MT5 실행 & 로그인" icon={Monitor}>
            <h3 className="text-foreground font-medium mb-2">로그인 방법</h3>
            <ClickStep>상단 메뉴에서 <code className="bg-secondary px-2 py-0.5 rounded text-primary">File</code> 클릭</ClickStep>
            <ClickStep><code className="bg-secondary px-2 py-0.5 rounded text-primary">Login to Trade Account</code> 클릭</ClickStep>
            <ClickStep>Login (계정번호) 입력</ClickStep>
            <ClickStep>Password (비밀번호) 입력</ClickStep>
            <ClickStep>Server (서버) 선택 — 드롭다운에서 정확한 서버명 선택</ClickStep>
            <ClickStep><code className="bg-secondary px-2 py-0.5 rounded text-primary">OK</code> 클릭</ClickStep>

            <WarningBox>
              <strong>서버가 틀리면:</strong> "Invalid account" 또는 "No connection" 에러가 발생합니다. 
              브로커에게 받은 이메일에서 정확한 서버명을 확인하세요. 
              서버명은 대소문자와 숫자까지 정확히 일치해야 합니다.
            </WarningBox>

            <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <p className="text-green-400 text-sm">
                <strong>성공 확인:</strong> 화면 오른쪽 하단에 연결 상태 표시 (숫자/kb)가 보이면 로그인 성공입니다.
              </p>
            </div>
          </StepCard>

          {/* Step 3: Screen Layout */}
          <StepCard step={3} title="기본 화면 정리" icon={Settings}>
            <p className="mb-4">
              MT5를 처음 열면 창이 너무 많아서 혼란스럽습니다. 
              지금은 최소한의 창만 남기세요.
            </p>

            <h3 className="text-foreground font-medium mb-2">닫아도 되는 창</h3>
            <ul className="space-y-1 mb-4">
              <li>• Toolbox (하단의 탭들) — 지금은 불필요</li>
              <li>• Data Window — 닫아도 됨</li>
              <li>• 그 외 떠 있는 팝업 창들</li>
            </ul>

            <h3 className="text-foreground font-medium mb-2">반드시 남겨야 하는 창</h3>
            <CheckItem><strong>Market Watch</strong> (좌측) — 거래 가능한 심볼 목록</CheckItem>
            <CheckItem><strong>Navigator</strong> (좌측) — EA, 지표 등 실행 도구 목록</CheckItem>
            <CheckItem><strong>차트 영역</strong> (중앙) — 가격 차트가 표시되는 공간</CheckItem>

            <WarningBox>
              창을 닫았는데 다시 열고 싶다면: 상단 메뉴 <code className="bg-secondary px-2 py-0.5 rounded text-primary">View</code>에서 해당 창 이름을 클릭하면 다시 나타납니다.
            </WarningBox>
          </StepCard>

          {/* Step 4: Chart Setup */}
          <StepCard step={4} title="차트 열기 & 설정" icon={BarChart3}>
            <h3 className="text-foreground font-medium mb-2">차트 열기</h3>
            <ClickStep>Market Watch에서 원하는 심볼(예: EURUSD)을 찾습니다</ClickStep>
            <ClickStep>심볼을 <strong>더블클릭</strong>하거나, 우클릭 → Chart Window</ClickStep>

            <h3 className="text-foreground font-medium mt-6 mb-2">캔들스틱으로 변경</h3>
            <ClickStep>차트 위에서 우클릭 → Properties</ClickStep>
            <ClickStep>또는 상단 툴바에서 캔들 아이콘 클릭</ClickStep>

            <h3 className="text-foreground font-medium mt-6 mb-2">타임프레임 선택</h3>
            <ClickStep>상단 툴바에서 M1, M5, M15, H1, D1 등 버튼 클릭</ClickStep>
            <p className="text-sm">M1 = 1분봉, H1 = 1시간봉, D1 = 일봉</p>

            <h3 className="text-foreground font-medium mt-6 mb-2">자동 스크롤 & 차트 이동</h3>
            <ClickStep>차트 우클릭 → Properties → Common 탭</ClickStep>
            <CheckItem><strong>Auto Scroll</strong> — 새 캔들이 생기면 자동으로 오른쪽 끝으로 이동</CheckItem>
            <CheckItem><strong>Chart Shift</strong> — 차트 오른쪽에 여백 생성 (권장)</CheckItem>
          </StepCard>

          {/* Step 5: Order Window */}
          <StepCard step={5} title="주문 화면 익히기" icon={MousePointer}>
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg mb-6">
              <p className="text-red-400 font-medium">
                ⚠️ 이 단계에서는 실제 주문을 하지 않습니다. 화면만 익힙니다.
              </p>
            </div>

            <h3 className="text-foreground font-medium mb-2">주문 창 열기</h3>
            <ClickStep>차트 위에서 우클릭 → <code className="bg-secondary px-2 py-0.5 rounded text-primary">Trading</code> → <code className="bg-secondary px-2 py-0.5 rounded text-primary">New Order</code></ClickStep>
            <ClickStep>또는 키보드 F9</ClickStep>

            <h3 className="text-foreground font-medium mt-6 mb-2">주문 유형 이해</h3>
            <div className="space-y-3 mt-2">
              <div className="p-3 bg-secondary/30 rounded-lg">
                <p className="font-medium text-foreground">Market Execution (시장가 주문)</p>
                <p className="text-sm">지금 바로 현재 가격에 주문 — 초보자가 이해하기 쉬움</p>
              </div>
              <div className="p-3 bg-secondary/30 rounded-lg">
                <p className="font-medium text-foreground">Pending Order (예약 주문)</p>
                <p className="text-sm">특정 가격에 도달하면 자동으로 주문 — 나중에 배움</p>
              </div>
            </div>

            <WarningBox>
              <strong>지금 클릭하지 마세요:</strong> Buy, Sell 버튼을 누르면 실제 주문이 들어갑니다. 
              지금은 화면 구성만 확인하고 창을 닫으세요 (X 버튼 또는 ESC).
            </WarningBox>
          </StepCard>

          {/* Step 6: AutoTrading */}
          <StepCard step={6} title="자동매매 기본 스위치" icon={Bot}>
            <p className="mb-4">
              EA(Expert Advisor)를 실행하려면 MT5에서 자동매매를 허용해야 합니다.
            </p>

            <h3 className="text-foreground font-medium mb-2">AutoTrading 버튼</h3>
            <ClickStep>상단 툴바에서 <code className="bg-secondary px-2 py-0.5 rounded text-primary">AutoTrading</code> 버튼 클릭</ClickStep>
            <p className="text-sm mb-4">버튼이 녹색이면 활성화, 빨간색이면 비활성화</p>

            <h3 className="text-foreground font-medium mt-6 mb-2">Expert Advisors 설정</h3>
            <ClickStep>상단 메뉴 <code className="bg-secondary px-2 py-0.5 rounded text-primary">Tools</code> → <code className="bg-secondary px-2 py-0.5 rounded text-primary">Options</code></ClickStep>
            <ClickStep><code className="bg-secondary px-2 py-0.5 rounded text-primary">Expert Advisors</code> 탭 클릭</ClickStep>
            
            <h3 className="text-foreground font-medium mt-4 mb-2">필수 체크 항목</h3>
            <CheckItem><strong>Allow algorithmic trading</strong> — 반드시 체크</CheckItem>
            <CheckItem><strong>Allow DLL imports</strong> — EA에 따라 필요할 수 있음</CheckItem>

            <WarningBox>
              <strong>EA가 실행되지 않는 3가지 이유:</strong>
              <ol className="list-decimal list-inside mt-2 space-y-1">
                <li>AutoTrading 버튼이 빨간색 (비활성화)</li>
                <li>Tools → Options → Expert Advisors에서 "Allow algorithmic trading" 미체크</li>
                <li>차트에 EA를 올리지 않음 (Navigator에서 드래그 필요)</li>
              </ol>
            </WarningBox>
          </StepCard>

          {/* Step 7: Completion */}
          <StepCard step={7} title="완료 확인" icon={CheckCircle2}>
            <p className="mb-6">
              모든 단계를 완료했다면, 아래 체크리스트를 확인하세요.
            </p>

            <div className="space-y-3 mb-8">
              <CheckItem>MT5가 설치되어 있다</CheckItem>
              <CheckItem>로그인이 완료되었다 (우측 하단에 연결 표시)</CheckItem>
              <CheckItem>Market Watch, Navigator 창이 보인다</CheckItem>
              <CheckItem>차트를 열고 캔들스틱으로 설정했다</CheckItem>
              <CheckItem>AutoTrading 버튼이 녹색이다</CheckItem>
              <CheckItem>Expert Advisors 설정에서 algorithmic trading이 체크되어 있다</CheckItem>
            </div>

            <div className="p-6 bg-primary/10 border border-primary/30 rounded-xl text-center">
              <p className="text-foreground font-medium text-lg mb-2">
                ✓ 준비 완료
              </p>
              <p className="text-muted-foreground">
                아직 최적화하거나 실거래를 시작하지 마세요.<br />
                먼저 MT5가 어떤 '환경'인지 이해해야 합니다.
              </p>
            </div>
          </StepCard>

          {/* CTA */}
          <div className="mt-16 pt-8 border-t border-border/40">
            <Link to="/education">
              <Button variant="ghost" className="group text-primary hover:text-primary">
                다음 단계: MT5가 왜 '실행 환경'인지 이해하기
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MT5Manual;
