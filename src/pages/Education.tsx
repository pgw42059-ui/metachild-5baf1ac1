import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  AlertTriangle,
  TrendingDown,
  Shield,
  Settings,
  Bot,
  HelpCircle,
  Wrench,
  Target,
} from "lucide-react";

const Education = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 border-b border-border/50">
          <div className="container px-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-primary mb-4">
                <BookOpen className="w-5 h-5" />
                <span className="text-sm font-medium">트레이딩 교육</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                왜 잃는지 이해하면, 어떻게 해야 할지 보입니다
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                수익 공식을 알려주지 않습니다.
                <br />
                대신, 대부분의 개인 트레이더가 왜 같은 이유로 잃는지 설명합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Why most lose */}
        <section className="py-16 border-b border-border/50">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 text-destructive" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                  대부분의 개인 트레이더가 같은 이유로 잃는 이유
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  통계적으로 개인 트레이더의 70~90%가 손실을 봅니다. 
                  이것은 운이 나빠서가 아닙니다. 구조적인 이유가 있습니다.
                </p>

                <div className="glass-card p-5 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                    <p className="text-sm">
                      <strong className="text-foreground">감정적 매매</strong> — 
                      손실을 만회하려는 충동, 수익이 날 때 더 베팅하려는 욕구. 
                      계획 없이 진입하고, 계획 없이 청산합니다.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                    <p className="text-sm">
                      <strong className="text-foreground">리스크 무시</strong> — 
                      "이번엔 다를 거야"라고 생각하며 과도한 레버리지를 사용합니다. 
                      한 번의 손실로 계좌가 반토막 납니다.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                    <p className="text-sm">
                      <strong className="text-foreground">전략의 부재</strong> — 
                      명확한 진입/청산 기준 없이 차트를 봅니다. 
                      같은 상황에서 매번 다른 결정을 내립니다.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                    <p className="text-sm">
                      <strong className="text-foreground">비용 간과</strong> — 
                      스프레드, 슬리피지, 스왑 비용을 고려하지 않습니다. 
                      수익이 나도 비용을 빼면 손실인 경우가 많습니다.
                    </p>
                  </div>
                </div>

                <p className="text-sm pt-2">
                  이 문제들은 개인의 능력 부족이 아닙니다. 
                  <span className="text-foreground">구조와 시스템의 부재</span>입니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: MT5 advantages */}
        <section className="py-16 border-b border-border/50">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Settings className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                  메타트레이더(MT5)의 구조적 장점
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  MT5는 단순한 차트 도구가 아닙니다. 
                  전략을 코드화하고, 백테스트하고, 자동으로 실행할 수 있는 환경입니다.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-secondary/30">
                    <h3 className="text-sm font-medium text-foreground mb-2">규칙 기반 실행</h3>
                    <p className="text-sm">
                      감정이 아닌 사전에 정의된 조건에 따라 매매합니다. 
                      "이번엔 다를 거야"라는 생각이 끼어들 틈이 없습니다.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/30">
                    <h3 className="text-sm font-medium text-foreground mb-2">과거 데이터 검증</h3>
                    <p className="text-sm">
                      전략을 실제 돈으로 테스트하기 전에, 
                      과거 데이터로 먼저 검증할 수 있습니다.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/30">
                    <h3 className="text-sm font-medium text-foreground mb-2">24시간 실행</h3>
                    <p className="text-sm">
                      사람이 잠들어도 시스템은 깨어 있습니다. 
                      정해진 조건이 충족되면 자동으로 주문을 실행합니다.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/30">
                    <h3 className="text-sm font-medium text-foreground mb-2">표준화된 환경</h3>
                    <p className="text-sm">
                      전 세계 수백 개의 브로커가 MT5를 지원합니다. 
                      브로커를 바꿔도 같은 전략을 사용할 수 있습니다.
                    </p>
                  </div>
                </div>

                <p className="text-sm pt-2">
                  MT5는 도구일 뿐입니다. 
                  도구를 잘 쓰려면 <span className="text-foreground">왜, 어떻게 작동하는지</span> 이해해야 합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Risk management */}
        <section className="py-16 border-b border-border/50">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-profit/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-profit" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                  리스크 관리가 전략보다 중요한 이유
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  많은 트레이더가 "어떤 전략이 좋은가?"를 먼저 묻습니다. 
                  하지만 더 중요한 질문은 "얼마를 잃을 수 있는가?"입니다.
                </p>

                <div className="glass-card p-5">
                  <h3 className="text-sm font-medium text-foreground mb-3">간단한 계산</h3>
                  <div className="space-y-2 text-sm">
                    <p>50% 손실을 복구하려면 → <span className="text-foreground">100% 수익</span>이 필요합니다</p>
                    <p>70% 손실을 복구하려면 → <span className="text-foreground">233% 수익</span>이 필요합니다</p>
                    <p>90% 손실을 복구하려면 → <span className="text-foreground">900% 수익</span>이 필요합니다</p>
                  </div>
                </div>

                <p className="leading-relaxed">
                  아무리 좋은 전략도 한 번의 큰 손실로 무너질 수 있습니다.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-profit mt-2 shrink-0" />
                    <p className="text-sm">
                      <strong className="text-foreground">포지션 사이징</strong> — 
                      한 번의 거래에서 전체 자본의 1~2% 이상을 잃지 않도록 설계합니다.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-profit mt-2 shrink-0" />
                    <p className="text-sm">
                      <strong className="text-foreground">최대 드로우다운</strong> — 
                      전략이 연속으로 손실을 낼 때, 최대 얼마까지 떨어질 수 있는지 미리 계산합니다.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-profit mt-2 shrink-0" />
                    <p className="text-sm">
                      <strong className="text-foreground">손절 원칙</strong> — 
                      "조금 더 기다려보자"는 생각 없이, 조건이 충족되면 기계적으로 청산합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: EA misunderstandings */}
        <section className="py-16 border-b border-border/50">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                  자동매매(EA)에 대한 흔한 오해
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  "EA만 돌리면 자동으로 돈이 번다"는 생각은 위험합니다. 
                  EA는 도구이지, 마법이 아닙니다.
                </p>

                <div className="space-y-4">
                  <div className="glass-card p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <AlertTriangle className="w-5 h-5 text-destructive shrink-0" />
                      <h3 className="text-sm font-medium text-foreground">오해 1: "백테스트 수익률이 높으면 실제로도 그렇다"</h3>
                    </div>
                    <p className="text-sm pl-8">
                      백테스트는 과거 데이터에 맞춰 최적화된 결과입니다. 
                      과최적화(overfitting)된 전략은 실제 시장에서 무너집니다. 
                      백테스트 조건(스프레드, 슬리피지, 데이터 품질)을 반드시 확인하세요.
                    </p>
                  </div>

                  <div className="glass-card p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <AlertTriangle className="w-5 h-5 text-destructive shrink-0" />
                      <h3 className="text-sm font-medium text-foreground">오해 2: "한 번 설정하면 방치해도 된다"</h3>
                    </div>
                    <p className="text-sm pl-8">
                      시장 환경은 계속 변합니다. 변동성, 스프레드, 유동성이 달라지면 
                      전략의 성과도 달라집니다. 정기적인 모니터링과 조정이 필요합니다.
                    </p>
                  </div>

                  <div className="glass-card p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <AlertTriangle className="w-5 h-5 text-destructive shrink-0" />
                      <h3 className="text-sm font-medium text-foreground">오해 3: "EA는 리스크가 없다"</h3>
                    </div>
                    <p className="text-sm pl-8">
                      자동화된 거래도 손실을 봅니다. 오히려 잘못된 설정이나 
                      시스템 오류로 더 큰 손실이 발생할 수 있습니다. 
                      리스크 관리는 EA 사용 시에도 동일하게 적용됩니다.
                    </p>
                  </div>
                </div>

                <p className="text-sm pt-2">
                  EA를 제대로 활용하려면, 먼저 <span className="text-foreground">그 한계를 이해</span>해야 합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Learning paths */}
        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                  단계별 학습 경로
                </h2>
              </div>

              <p className="text-muted-foreground mb-8">
                자신의 현재 수준에 맞는 경로를 선택하세요. 
                각 단계는 다음 단계의 기반이 됩니다.
              </p>

              <div className="space-y-4">
                {/* Beginner */}
                <div className="glass-card p-5 hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <HelpCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded">초급</span>
                        <h3 className="text-base font-medium text-foreground">MT5 기초 이해</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        메타트레이더가 무엇인지, 어떻게 설치하고 사용하는지 배웁니다.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                        <li className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                          MT5 설치 및 브로커 연결
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                          차트 열기, 시간프레임 변경
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                          주문 창 사용법 (매수/매도)
                        </li>
                      </ul>
                      <Button asChild variant="outline" size="sm" className="gap-2">
                        <Link to="/guide/mt5-manual">
                          기초 가이드 보기
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Intermediate */}
                <div className="glass-card p-5 hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Wrench className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-accent bg-accent/10 px-2 py-0.5 rounded">중급</span>
                        <h3 className="text-base font-medium text-foreground">설정과 도구 활용</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        보조지표, 템플릿, 브로커 비교 등 실전 활용법을 익힙니다.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                        <li className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                          보조지표의 종류와 사용법
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                          차트 템플릿 저장 및 적용
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                          브로커별 스프레드/조건 비교
                        </li>
                      </ul>
                      <Button asChild variant="outline" size="sm" className="gap-2">
                        <Link to="/resources">
                          도구 및 리소스 보기
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Advanced */}
                <div className="glass-card p-5 hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-profit/10 flex items-center justify-center shrink-0">
                      <Target className="w-5 h-5 text-profit" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-profit bg-profit/10 px-2 py-0.5 rounded">고급</span>
                        <h3 className="text-base font-medium text-foreground">전략과 자동매매(EA)</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        전략 구조, 백테스트 해석, EA 검토 방법을 배웁니다.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                        <li className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                          전략 문서 읽는 법
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                          백테스트 결과 해석
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                          EA 구독 전 확인사항
                        </li>
                      </ul>
                      <Button asChild variant="outline" size="sm" className="gap-2">
                        <Link to="/marketplace">
                          전략 문서 보기
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom note */}
              <div className="mt-10 text-center">
                <p className="text-sm text-muted-foreground">
                  어느 단계에서 시작하든, 천천히 진행하세요.
                  <br />
                  이해하지 못한 채 다음으로 넘어가면, 결국 처음으로 돌아오게 됩니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Education;
