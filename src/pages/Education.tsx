import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, CheckCircle2, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const levels = [
  {
    level: "Level 0",
    title: "MT5는 왜 '실행 환경'인가",
    description: "차트툴이 아닌 자동매매 플랫폼으로서의 MT5를 이해합니다.",
    duration: "15분",
    topics: ["MT5 아키텍처", "틱 데이터 흐름", "EA 실행 구조"],
  },
  {
    level: "Level 1",
    title: "설치와 기본 설정",
    description: "올바른 설치와 필수 설정. 왜 그렇게 해야 하는지 함께 설명합니다.",
    duration: "30분",
    topics: ["브로커 연결", "차트 설정", "틱 히스토리"],
  },
  {
    level: "Level 2",
    title: "EA의 작동 원리",
    description: "EA가 어떻게 주문을 실행하는지, 한계는 무엇인지 다룹니다.",
    duration: "45분",
    topics: ["OnTick 이벤트", "주문 실행 로직", "슬리피지와 지연"],
  },
  {
    level: "Level 3",
    title: "백테스트의 진실",
    description: "백테스트 결과를 믿어도 되는가? 한계와 해석법을 배웁니다.",
    duration: "60분",
    topics: ["틱 데이터 품질", "스프레드 시뮬레이션", "과최적화 방지"],
  },
  {
    level: "Level 4",
    title: "리스크 관리 구조",
    description: "수익이 아닌 손실을 먼저 통제하는 방법론을 다룹니다.",
    duration: "45분",
    topics: ["포지션 사이징", "드로우다운 관리", "복리의 함정"],
  },
];

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
                <span className="text-sm font-medium">교육 센터</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                설정법이 아니라 구조를 배웁니다
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                "이렇게 하세요"가 아닌 "왜 그렇게 되는지"를 설명합니다.
                <br />
                원리를 알면 스스로 판단할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {levels.map((item, index) => (
                  <div
                    key={index}
                    className="group p-5 rounded-xl border border-border/50 bg-card/30 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                            {item.level}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {item.duration}
                          </div>
                        </div>
                        <h3 className="text-lg font-medium mb-2 text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.topics.map((topic, i) => (
                            <span
                              key={i}
                              className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors mt-1" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Notice */}
              <div className="mt-12 p-5 rounded-xl border border-border/50 bg-secondary/20">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">무료로 시작하세요</p>
                    <p className="text-sm text-muted-foreground">
                      Level 0~2는 무료입니다. 원리를 먼저 이해한 후 결정하세요.
                    </p>
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

export default Education;